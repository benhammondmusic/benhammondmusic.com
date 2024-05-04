<script lang="ts">
import { PUBLIC_BASE_URL } from "$env/static/public";
import { onMount } from "svelte";
let song: { isPlaying: boolean; url: string; title: string; artist: string };
// export let className: string = "";

async function getRecentlyPlayed() {
	const activeSong = await fetch(`${PUBLIC_BASE_URL}/api/spotify-now-playing`)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
			return null;
		});

	song = activeSong.isPlaying
		? activeSong
		: await fetch(`${PUBLIC_BASE_URL}/api/spotify-recently-played`)
				.then((res) => res.json())
				.catch((err) => {
					console.error(err);
					return null;
				});
}

onMount(async () => {
	getRecentlyPlayed();
});

import SpotifyIcon from "$lib/icons/Spotify.svelte";
</script>

<aside
	class="mx-auto flex w-full max-w-7xl content-center items-center justify-center sm:justify-start"
>
	<div
		class="decoration-none group ml-5 mt-5 inline-flex items-center rounded-md bg-bhm-gray-800 px-3 py-1 text-sm transition-colors dark:bg-bhm-gray-50/10 {song
			? 'hover:bg-[#1DB954] dark:hover:bg-[#1DB954]'
			: ''}"
	>
		<span class="mr-3">
			<SpotifyIcon />
		</span>
		<span class="mr-3">Ben's most recent jam:</span>
		{#if song?.title && song?.artist}
			<a
				href={song.url}
				rel="noopener noreferrer"
				target="_blank"
				class="font-bold hover:underline">“{song.title}” by {song.artist}</a
			>
		{:else}
			&nbsp;Loading - <span class="text-bhm-gray-400">&nbsp;Spotify</span>
		{/if}
	</div>
</aside>
