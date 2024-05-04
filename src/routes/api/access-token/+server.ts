import { type RequestHandler, json } from "@sveltejs/kit";

import {
	VITE_SPOTIFY_CLIENT_ID,
	VITE_SPOTIFY_CLIENT_SECRET,
	VITE_SPOTIFY_REFRESH_TOKEN,
} from "$env/static/private";

import { PUBLIC_BASE_URL } from "$env/static/public";

const token_endpoint = `https://accounts.spotify.com/api/token`;
export const GET: RequestHandler = async () => {
	console.log("getting access token");

	const { access_token } = await fetch(token_endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: VITE_SPOTIFY_REFRESH_TOKEN,
			redirect_uri: PUBLIC_BASE_URL,
			client_id: VITE_SPOTIFY_CLIENT_ID,
			client_secret: VITE_SPOTIFY_CLIENT_SECRET,
		}),
	}).then((res) => res.json());

	return json(access_token);
};
