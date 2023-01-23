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
		songs = songs.sort((a, b) => a.title.localeCompare(b.title));
	}

	function resetFilters() {
		selectedArtist = "";
		songs = songsJson.songs;
	}

	let letters: string[] = [];

	function doAddLetterHeader(item: string) {
		// skip numbers
		if (!isNaN(parseInt(item[0]))) return false;

		if (!letters.includes(item[0])) {
			letters.push(item[0]);
			return true;
		}
		return false;
	}

	const capitalLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
</script>

<svelte:head>
	<title>Ben Hammond - Original Music and More</title>
</svelte:head>

<section class="flex flex-col items-center">
	<FancyHeading text={`Songlist`} />

	<p class="m-10">
		<span class="p-5">Jump to:</span>
		<span>
			{#each capitalLetters as letter (letter)}
				<a
					href={`#${letter}`}
					class="rounded-lg p-2 font-bold underline hover:bg-white hover:text-bhm-sky ">{letter}</a
				>
			{/each}
		</span>
	</p>

	<div class=" grid gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
		{#each Object.entries(artistToSongsMap).sort() as [artist, songs] (artist)}
			{#if doAddLetterHeader(artist)}
				<h4
					id={artist[0]}
					class="col-span-full mt-24 flex justify-between"
				>
					<span class="text-4xl">
						{artist[0]}
					</span>
					<button
						class="ml-24"
						on:click={() => window.scrollTo(0, 0)}>back to top</button
					>
				</h4>
			{/if}
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
