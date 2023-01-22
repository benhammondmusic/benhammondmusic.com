import {PUBLIC_BASE_URL} from '$env/static/public';
import { json } from '@sveltejs/kit';
import { songlistItemsStore } from '$lib/stores';
import { get } from 'svelte/store';
import type { Song } from '$lib/utils/songlistUtils';

const BHM_SONGLIST_ENDPOINT = "https://api.spotify.com/v1/playlists/1BGI6ETmEsvhj0nTv7LOu6/tracks"
const TRACK_FEATURES_BASE_ENDPOINT = "https://api.spotify.com/v1/audio-features?ids="


const DONT_CACHE = false 
// const DONT_CACHE = true 


export async function GET() {

	const cachedSonglistItems = get(songlistItemsStore)

	// console.log({cachedSonglistItems});

	if (!DONT_CACHE && cachedSonglistItems) {
		console.log("already cached, skipping fetch");
		return json({"status": 200,"data": cachedSonglistItems})
	}

	const response = await fetch(`${PUBLIC_BASE_URL}/api/access-token`)
	const access_token = await response.json()

	console.log("not in cache; fetching fresh playlist data");

	const allItems = []

	let songlist_endpoint = BHM_SONGLIST_ENDPOINT;

	// limit of 100 but next is a pre-made url with the next batch of 100,
	// so keep fetching until there is no next provided and combine items
	while (songlist_endpoint){
		console.log("fetching 100 items from", songlist_endpoint);
		const jsonData = await fetch(songlist_endpoint, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			}
		}).then(res => res.json());

		const batchTrackIds = jsonData.items.map((item:{track:{id:string}})=>item.track.id)

		const featuresBatchUrl = TRACK_FEATURES_BASE_ENDPOINT + batchTrackIds.join(",")

		const tracksFeaturesJson = await fetch(featuresBatchUrl, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			}
		}).then(res => res.json());

		songlist_endpoint = jsonData.next


		const songs = jsonData.items.map((item:{track: Song})=>{

			// console.log("***");
			// console.log(item.track);

			const { name, popularity, artists, album} = item.track

			const features = tracksFeaturesJson.audio_features.find((itemFeatures:Song)=>{
				if (itemFeatures.id === item.track.id) console.log(itemFeatures.id, "===", item.track.id);
				return itemFeatures.id === item.track.id}
				)

			const { danceability,
      energy,
      key,
      mode,
      speechiness,
      acousticness,
      instrumentalness,
      liveness,
      valence,
      tempo,
      id,
      duration_ms,
      time_signature } = features

			return {
				name, 
				popularity, 
				era: getEra(album.release_date),
				"artists": artists.join(", "),
				danceability,
				energy,
				key,
				mode,
				speechiness,
				acousticness,
				instrumentalness,
				liveness,
				valence,
				tempo,
				id,
				duration_ms,
				time_signature 
			}
		})

		allItems.push(...songs)

	}

	songlistItemsStore.set(allItems)


	return json({"status": 200,"data": allItems})

}


function getEra(release_date: string){

	const year: number = parseInt(release_date.substring(0,4))

	// return year

	if (year < 1960) return "Early 20th Century"
	if (year < 1970) return "60's"
	if (year < 1980) return "70's"
	if (year < 1990) return "80's"
	if (year < 2000) return "90's"
	if (year < 2010) return "2000's"
	return "2010's and Today"

}