import { PUBLIC_BASE_URL } from "$env/static/public";
import { songlistItemsStore } from "$lib/stores";
import { type Song, getEra } from "$lib/utils/songlistUtils";
import { json } from "@sveltejs/kit";
import { get } from "svelte/store";

const BHM_SONGLIST_ENDPOINT =
	"https://api.spotify.com/v1/playlists/1BGI6ETmEsvhj0nTv7LOu6/tracks";
const TRACK_FEATURES_BASE_ENDPOINT =
	"https://api.spotify.com/v1/audio-features?ids=";
const SEVERAL_ARTISTS_BASE_ENDPOINT = "https://api.spotify.com/v1/artists?ids=";

// const DONT_CACHE = false
const DONT_CACHE = true;

export async function GET() {
	const cachedSonglistItems = get(songlistItemsStore);
	if (!DONT_CACHE && cachedSonglistItems) {
		console.log("already cached, skipping fetch");

		return json({ status: 200, data: cachedSonglistItems });
	}

	const response = await fetch(`${PUBLIC_BASE_URL}/api/access-token`);
	const access_token = await response.json();
	const headerOptions = {
		headers: { Authorization: `Bearer ${access_token}` },
	};
	console.log("not in cache; fetching fresh playlist data");
	const allItems = [];

	let songlist_endpoint = BHM_SONGLIST_ENDPOINT;
	// limit of 100 but next is a pre-made url with the next batch of 100,
	// so keep fetching until there is no next provided and combine items
	while (songlist_endpoint) {
		// console.log("fetching 100 items from", songlist_endpoint);
		// initial json data from 100 song chunk of playlist
		const jsonData = await fetch(songlist_endpoint, headerOptions).then((res) =>
			res.json(),
		);

		// fetch 100 songs' worth of features (build the endpoint based on track ids)
		const batchTrackIds = jsonData.items.map(
			(item: { track: { id: string } }) => item.track.id,
		);
		const featuresBatchUrl =
			TRACK_FEATURES_BASE_ENDPOINT + batchTrackIds.join(",");
		const tracksFeaturesJson = await fetch(
			featuresBatchUrl,
			headerOptions,
		).then((res) => res.json());

		// fetch 100 songs' worth of artist:genre info (build endpoint based on artist ids)
		const batchArtistIds = jsonData.items.flatMap(
			(item: { track: { artists: { id: string }[] } }) =>
				item.track.artists.map((artist: { id: string }) => artist.id),
		);

		const batchArtistData: { id: string; genres: string[] }[] = [];

		for (let i = 0; i < batchArtistIds.length; i += 50) {
			const artistsBatchUrl =
				SEVERAL_ARTISTS_BASE_ENDPOINT +
				batchArtistIds.slice(i, i + 50).join(",");
			const tracksArtistDetailsJson = await fetch(
				artistsBatchUrl,
				headerOptions,
			).then((res) => res.json());
			// console.log("******");
			// console.log(i, i + 50);
			batchArtistData.push(...tracksArtistDetailsJson.artists);
		}

		// next chunk of 100 or fewer songs
		songlist_endpoint = jsonData.next;

		const songs = jsonData.items.map((item: { track: Song }) => {
			const { name, popularity, artists, album } = item.track;
			const features = tracksFeaturesJson.audio_features.find(
				(itemFeatures: Song) => itemFeatures.id === item.track.id,
			);

			const {
				danceability,
				energy,
				key,
				mode,
				acousticness,
				valence,
				tempo,
				id,
				time_signature,
			} = features;

			return {
				name,
				popularity,
				era: getEra(album.release_date),
				artists: artists.map((artist) => {
					return {
						name: artist.name,
						id: artist.id,
						genres: batchArtistData.find(
							(artistItem: { id: string; genres: string[] }) =>
								artistItem.id === artist.id,
						)?.genres,
					};
				}),
				danceability,
				energy,
				key,
				mode,
				acousticness,
				valence,
				tempo,
				id,
				time_signature,
			};
		});

		allItems.push(...songs);
	}

	songlistItemsStore.set(allItems);

	return json({ status: 200, data: allItems });
}
