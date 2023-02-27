<script lang="ts">
	import { fade } from "svelte/transition";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import songsJson from "$lib/data/songs.json";
	import AlphabetLinks from "$lib/Components/AlphabetLinks.svelte";
	import LetterHeader from "$lib/Components/LetterHeader.svelte";
	let songs = songsJson.songs;
	let artistToSongsMap: Record<string, string[]> = {};

	for (let { title, artistArray } of songsJson.songs) {
		for (let artist of artistArray) {
			if (artistToSongsMap[artist]) artistToSongsMap[artist].push(title);
			else artistToSongsMap[artist] = [title];
		}
	}

	const songlistCutoff = 6;

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

	function handleSearchUpdate(e: Event) {
		const target = e.target as HTMLInputElement;
		const value: string = target.value;
		if (value) {
			songs = songsJson.songs.filter(
				(song) =>
					song.title.toLowerCase().includes(target.value.toLowerCase()) ||
					song.artistArray.join(" ").toLowerCase().includes(target.value.toLowerCase()),
			);
		} else {
			isFiltered = false;
		}
	}

	let letters: string[] = [];

	/* 
	Returns boolean whether this item should trigger rendering of a alphanumeric heading or not 
	*/
	function getLetterHeader(item: string) {
		if (!letters.includes(item[0])) {
			letters.push(item[0]);
			return true;
		}

		return false;
	}
</script>

<svelte:head>
	<title>Ben Hammond - Original Music and More</title>
</svelte:head>

<section class="mx-auto flex w-full max-w-7xl">
	<div class="flex flex-col items-center p-10">
		<FancyHeading text={`Songlist`} />

		<form class="flex items-center">
			<label
				class="pr-10"
				for="text-search">Search song title or artist:</label
			>
			<input
				id="text-search"
				on:input={(e) => handleSearchUpdate(e)}
				class="w-96 rounded-md px-3 py-1 text-bhm-blue-800"
			/>
			<button
				type="reset"
				class="ml-10 rounded-xl p-3 hover:bg-bhm-copper"
				on:click={resetFilters}>Clear search</button
			>
		</form>
		{#if isFiltered && songs.length}
			<h4 class="col-span-full my-10 flex justify-between">
				<span class="text-4xl"> Search Results </span>
			</h4>
			<article
				transition:fade
				class="col-span-3 mb-24 w-full rounded-md p-10 ring-1 ring-bhm-blue-50"
			>
				<ul class="list-inside list-disc columns-3">
					{#each songs as song, index (`${song}-${index}`)}
						<li class="px-2 text-sm font-bold">{song.title} ({song.artistArray.join(", ")})</li>
					{/each}
				</ul>
			</article>
		{:else if isFiltered}
			<p>No results</p>
		{/if}

		<AlphabetLinks />

		<div class=" grid gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{#each Object.entries(artistToSongsMap).sort() as [artist, songs] (artist)}
				{#if getLetterHeader(artist)}
					<LetterHeader {artist} />
				{/if}
				<article
					transition:fade
					class={`rounded-md p-5 ring-1 ring-bhm-blue-50 ${
						songs.length > songlistCutoff ? "col-span-3" : ""
					}`}
				>
					<p class="text-xl">{artist}</p>
					<ul class={`list-inside list-disc  ${songs.length > songlistCutoff ? "columns-3" : ""}`}>
						{#each songs as song, index (`${song}-${artist}-${index}`)}
							<li class="px-2 text-sm font-bold">{song}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>
