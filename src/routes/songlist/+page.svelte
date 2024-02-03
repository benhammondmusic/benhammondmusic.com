<script lang="ts">
	import { fade } from "svelte/transition";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import songsJson from "$lib/data/songs.json";
	import AlphabetLinks from "$lib/Components/AlphabetLinks.svelte";
	import LetterHeader from "$lib/Components/LetterHeader.svelte";
	import SearchBox from "$lib/Components/SearchBox.svelte";
	let artistToSongTitlesMap: Record<string, string[]> = {};

	for (let { title, artistArray } of songsJson.songs) {
		for (let artist of artistArray) {
			if (artistToSongTitlesMap[artist]) artistToSongTitlesMap[artist].push(title);
			else artistToSongTitlesMap[artist] = [title];
		}
	}

	const songlistCutoff = 6;

	let letters: string[] = [];

	/*
	Returns letter if item should trigger rendering of a alphanumeric heading
	*/
	function addHeaderLetter(item: string) {
		if (!letters.includes(item[0]) && isNaN(parseInt(item[0]))) {
			letters.push(item[0]);
			return item[0];
		}
		return "";
	}

	/* Very long lists of songs (by one artist) should split across multiple outer columns and also the list items should be split into inner columns */
	function getLongListClass(songs: string[]) {
		return {
			colSpan:
				songs.length > songlistCutoff
					? "col-span-full sm:col-span-2 lg:col-span-3 2xl:col-span-4"
					: "",
			columns: songs.length > songlistCutoff ? "sm:columns-2 lg:columns-3 2xl:columns-4" : "",
		};
	}
</script>

<svelte:head>
	<title>Ben Hammond - Original Music and More</title>
</svelte:head>

<section
	transition:fade|global
	class="mx-auto flex w-full max-w-7xl flex-col items-center"
>
	<div class="flex flex-col items-center p-10">
		<FancyHeading text={`Songlist`} />

		<h3 class="text-xl">
			A somewhat complete, searchable list of all the covers, standards, and originals Ben Hammond
			has performed.
		</h3>

		<SearchBox />

		<AlphabetLinks />

		<div
			class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4"
		>
			{#each Object.entries(artistToSongTitlesMap).sort() as [artist, songs] (artist)}
				{#if addHeaderLetter(artist)}
					<LetterHeader keyLetter={artist[0]} />
				{/if}
				<article
					class={`rounded-md p-5 ring-1 ring-bhm-blue-50 ${getLongListClass(songs).colSpan}`}
				>
					<p class="text-xl">{artist}</p>
					<ul class={`list-inside list-disc  ${getLongListClass(songs).columns}`}>
						{#each songs as song, index (`${song}-${artist}-${index}`)}
							<li class="px-2 text-sm font-bold">{song}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>
