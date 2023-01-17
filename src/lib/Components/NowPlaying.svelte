<script lang="ts">
	import { PUBLIC_BASE_URL } from "$env/static/public";

	import { onMount } from "svelte";
	let song: any;

	async function getNowPlaying() {
		song = await fetch(`${PUBLIC_BASE_URL}/api/now-playing`).then((res) => res.json());
	}

	onMount(async () => {
		getNowPlaying();
	});

	// setInterval(() => {
	// 	getNowPlaying();
	// }, 5000);

	import Spotify from "$lib/icons/Spotify.svelte";
</script>

<aside
	class="decoration-none group m-5 inline-flex w-5/12 items-center rounded-md bg-bhm-gray-800 px-3 py-1 text-sm transition-colors dark:bg-bhm-gray-50/10 {song
		? 'hover:bg-[#1DB954] dark:hover:bg-[#1DB954]'
		: ''}"
>
	<span class="mr-3">
		<Spotify />
	</span>
	<span class="mr-3">Ben's currently listening to:</span>
	{#if !song}
		&nbsp;Loading - <span class="text-bhm-gray-400">&nbsp;Spotify</span>
	{:else if song}
		{#if song.isPlaying === true}
			<a
				href={song.songUrl}
				rel="noopener noreferrer"
				target="_blank"
				class="font-bold hover:underline">“{song.title}” by {song.artist}</a
			>
		{:else}
			<span>...something other than spotify 😿</span>
		{/if}
	{/if}
	<br />
</aside>
