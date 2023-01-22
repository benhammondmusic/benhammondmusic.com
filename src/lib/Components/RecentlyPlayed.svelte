<script lang="ts">
	import { PUBLIC_BASE_URL } from "$env/static/public";

	import { onMount } from "svelte";
	let song: { isPlaying: boolean; url: string; title: string; artist: string };

	async function getRecentlyPlayed() {
		const activeSong = await fetch(`${PUBLIC_BASE_URL}/api/now-playing`).then((res) => res.json());

		song = activeSong.isPlaying
			? activeSong
			: await fetch(`${PUBLIC_BASE_URL}/api/recently-played`).then((res) => res.json());
	}

	onMount(async () => {
		getRecentlyPlayed();
	});

	import SpotifyIcon from "$lib/icons/Spotify.svelte";
</script>

<aside class="flex w-full items-center">
	<div
		class="decoration-none group mt-5 ml-5 inline-flex w-5/12 items-center rounded-md bg-bhm-gray-800 px-3 py-1 text-sm transition-colors dark:bg-bhm-gray-50/10 {song
			? 'hover:bg-[#1DB954] dark:hover:bg-[#1DB954]'
			: ''}"
	>
		<span class="mr-3">
			<SpotifyIcon />
		</span>
		<span class="mr-3">Ben's most recent jam:</span>
		{#if !song}
			&nbsp;Loading - <span class="text-bhm-gray-400">&nbsp;Spotify</span>
		{:else if song}
			<a
				href={song.url}
				rel="noopener noreferrer"
				target="_blank"
				class="font-bold hover:underline">“{song.title}” by {song.artist}</a
			>
		{/if}
	</div>
</aside>
