const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;

export async function GET() {
	const response = await fetch('/api/access-token/')

	const access_token = await response.json()

	console.log(access_token);
	const res = await fetch(now_playing_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	})

	if (res.status === 204 || res.status > 400) {
		return new Response(JSON.stringify({ isPlaying: false }));
	}

	const song = await res.json();
	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists.map((_artist:{name:string}) => _artist.name).join(', ');
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return new Response(JSON.stringify({"isPlaying":isPlaying,"title":title,"artist":artist, "album":album, "albumImageUrl":albumImageUrl, "songUrl":songUrl}));
}