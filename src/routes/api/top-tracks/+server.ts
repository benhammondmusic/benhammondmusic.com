const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

export async function GET() {
	const response = await fetch('/api/access-token/')

	const access_token = await response.json()

	const data = await fetch(top_tracks_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	}).then(res => res.json());

	return new Response(JSON.stringify({"status": 200,"top_tracks": data.items
	}))

}