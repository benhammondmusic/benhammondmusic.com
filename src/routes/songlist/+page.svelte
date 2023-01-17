<script lang="ts">
	import { fade } from "svelte/transition";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import songsJson from "$lib/data/songs.json";
	let songs = songsJson.songs;

	let artistToSongsMap: Record<string, string[]> = {};

	for (let { title, artistArray } of songsJson.songs) {
		for (let artist of artistArray) {
			if (artistToSongsMap[artist]) artistToSongsMap[artist].push(title);
			else artistToSongsMap[artist] = [title];
		}
	}

	$: isFiltered = songs !== songsJson.songs;
	$: selectedArtist = "";

	function getArtistsSongs(artist: string) {
		return songsJson.songs
			.filter((song) => song.artistArray.includes(artist))
			.map((song) => song.title);
	}

	function filterByArtist(artist: string) {
		selectedArtist = artist;
		songs = songsJson.songs.filter((song) => song.artistArray.includes(artist));
		songs = songs.sort((a, b) => (a.title as any) - (b.title as any));
	}

	function resetFilters() {
		selectedArtist = "";
		songs = songsJson.songs;
	}
</script>

<svelte:head>
	<title>Ben Hammond - Original Music and More</title>
</svelte:head>

<section class="flex flex-col items-center">
	<FancyHeading text={`Songlist`} />

	<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
		{#each Object.entries(artistToSongsMap) as [artist, songs] (artist)}
			<article
				transition:fade
				class="rounded-md  p-5 ring-1 ring-bhm-blue-50"
			>
				<p class="text-xl">{artist}</p>
				<ul class="list-inside list-disc">
					{#each songs as song, index (`${song}-${artist}-${index}`)}
						<li class="px-2 text-sm font-bold">{song}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
