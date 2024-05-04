import { PUBLIC_BASE_URL } from "$env/static/public";
import { type RequestHandler, json } from "@sveltejs/kit";

const now_playing_endpoint =
	"https://api.spotify.com/v1/me/player/currently-playing";

export const GET: RequestHandler = async () => {
	console.log("getting token first");
	const access_token = await fetch(`${PUBLIC_BASE_URL}/api/access-token`).then(
		(res) => res.json(),
	);

	const res = await fetch(now_playing_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	console.log("getting NOW PLAYING response");

	if (res.status === 204 || res.status > 400) {
		return json({ isPlaying: false });
	}
	const song = await res.json();
	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists
		.map((_artist: { name: string }) => _artist.name)
		.join(", ");
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return json({
		isPlaying: isPlaying,
		title: title,
		artist: artist,
		album: album,
		albumImageUrl: albumImageUrl,
		songUrl: songUrl,
	});
};
