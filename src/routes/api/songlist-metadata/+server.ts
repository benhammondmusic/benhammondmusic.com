import {PUBLIC_BASE_URL} from '$env/static/public';
import { json } from '@sveltejs/kit';
import { songlistItemsStore } from '$lib/stores';
import { get } from 'svelte/store';

export async function GET() {

	const cachedSonglistItems = get(songlistItemsStore)

	console.log({cachedSonglistItems});

	if (cachedSonglistItems) {
		console.log("already cached, skipping fetch");
		return json({"status": 200,"data": cachedSonglistItems})
	}

	const response = await fetch(`${PUBLIC_BASE_URL}/api/access-token`)
	const access_token = await response.json()

	console.log("not in cache; fetching fresh playlist data");

	const allItems = []

	let songlist_endpoint = "https://api.spotify.com/v1/playlists/1BGI6ETmEsvhj0nTv7LOu6/tracks";


	// limit of 100 but next is a pre-made url with the next batch of 100,
	// so keep fetching until there is no next provided and combine items
	while (songlist_endpoint){
		console.log("fetching 100 items from", songlist_endpoint);
		const jsonData = await fetch(songlist_endpoint, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			}
		}).then(res => res.json());

		allItems.push(...jsonData.items)
		console.log("next url", jsonData.next);
		songlist_endpoint = jsonData.next

	}

	// const data = jsonData.tracks.items.map((track:any)=>track.track.name)
	const data = allItems.map((item:any)=> getEra(item.track.album.release_date))

	songlistItemsStore.set(data)


	return json({"status": 200,"data": data})

}


function getEra(release_date: string){

	const year: number = parseInt(release_date.substring(0,4))

	if (year < 1960) return "Early 20th Century"
	if (year < 1970) return "60's"
	if (year < 1980) return "70's"
	if (year < 1990) return "80's"
	if (year < 2000) return "90's"
	if (year < 2010) return "2000's"
	return "2010's and Today"

}