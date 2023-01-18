import {PUBLIC_BASE_URL} from '$env/static/public';
import { json } from '@sveltejs/kit';


const songlist_endpoint = "https://api.spotify.com/v1/playlists/1BGI6ETmEsvhj0nTv7LOu6/tracks?limit=100&offset=100";

export async function GET() {
	const response = await fetch(`${PUBLIC_BASE_URL}/api/access-token`)

	const access_token = await response.json()

	const jsonData = await fetch(songlist_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	}).then(res => res.json());

	// const data = jsonData.tracks.items.map((track:any)=>track.track.name)
	const data = jsonData.items.map((item:any)=>item.track.name)
	console.log(data);

	return json({"status": 200,"data": data})

}