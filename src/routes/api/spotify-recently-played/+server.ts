import { json, type RequestHandler } from '@sveltejs/kit'
import { PUBLIC_BASE_URL } from '$env/static/public';

const endpoint = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

export const GET: RequestHandler = async () => {
	console.log("getting token first");
	const access_token = await fetch(`${PUBLIC_BASE_URL}/api/access-token`).then(res => res.json());

	const res = await fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	})

	console.log("getting RECENTLY PLAYED response");

	if (res.status === 204 || res.status > 400) {
		return json({ "error": "Error figuring out what Ben listened to most recently" });
	}

	const data = await res.json();
	const artist = data.items[0].track.artists[0].name
	const title = data.items[0].track.name
	const url = data.items[0].track.external_urls.spotify

	return json({ "artist": artist, "title": title, "url": url });
}