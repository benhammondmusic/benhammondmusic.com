<script lang="ts">
	import { onMount } from "svelte";
	let song: any;

	async function getNowPlaying() {
		song = await fetch("/api/now-playing/").then((res) => res.json());
	}

	onMount(async () => {
		getNowPlaying();
	});

	// setInterval(() => {
	// 	getNowPlaying();
	// }, 5000);

	import CountUp from "$lib/Components/CountUp.svelte";
	import MusicNotes from "$lib/icons/MusicNotes.svelte";
	import Diamond from "$lib/icons/Diamond.svelte";
	import OldMic from "$lib/icons/OldMic.svelte";
	import CD from "$lib/icons/CD.svelte";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import Spotify from "$lib/icons/Spotify.svelte";
</script>

<aside
	class="decoration-none group m-5 inline-flex w-full items-center rounded-md bg-bhm-gray-800 px-3 py-1 text-sm transition-colors dark:bg-bhm-gray-50/10 {song
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
