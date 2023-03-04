<script lang="ts">
	import { listViewStore, type ListType } from "$lib/stores";
	import { get } from "svelte/store";
	let listViewType: ListType = get(listViewStore);

	listViewStore.subscribe((viewType) => {
		listViewType = viewType;
	});

	import { fade } from "svelte/transition";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import songsJson from "$lib/data/songs.json";
	import AlphabetLinks from "$lib/Components/AlphabetLinks.svelte";
	import LetterHeader from "$lib/Components/LetterHeader.svelte";
	let songs = songsJson.songs;
	let artistToSongTitlesMap: Record<string, string[]> = {};

	for (let { title, artistArray } of songsJson.songs) {
		for (let artist of artistArray) {
			if (artistToSongTitlesMap[artist]) artistToSongTitlesMap[artist].push(title);
			else artistToSongTitlesMap[artist] = [title];
		}
	}

	const songlistCutoff = 6;

	$: isFiltered = songs !== songsJson.songs;

	function resetFilters() {
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
	function shouldAddLetterHeader(item: string) {
		console.log({ item });
		if (!letters.includes(item[0])) {
			letters.push(item[0]);
			return true;
		}
		return false;
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

<section class="mx-auto flex w-full max-w-7xl flex-col items-center">
	<div class="flex flex-col items-center p-10">
		<FancyHeading text={`Songlist`} />

		<form class="flex w-full flex-wrap content-center items-center justify-center">
			<label
				class=""
				for="text-search">Search song title or artist:</label
			>
			<input
				id="text-search"
				on:input={(e) => handleSearchUpdate(e)}
				class="mx-5 w-32 rounded-md px-3 py-1 text-bhm-blue-800 sm:w-64 md:w-96"
			/>
			<button
				type="reset"
				class="rounded-xl p-3 hover:bg-bhm-copper"
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
				<ul class="list-inside list-disc columns-2">
					{#each songs as song, index (`${song}-${index}`)}
						<li class="px-2 text-sm font-bold">{song.title} ({song.artistArray.join(", ")})</li>
					{/each}
				</ul>
			</article>
		{:else if isFiltered}
			<p>No results</p>
		{/if}

		<AlphabetLinks />

		<div class=" mx-auto flex w-full justify-center">
			<button
				class={`m-5 rounded-md  px-5 py-1 text-sm hover:cursor-pointer hover:bg-bhm-blue-400 lg:text-lg ${
					listViewType === "bySong" ? "bg-bhm-sky-600" : "ring-1 ring-bhm-sky"
				}`}
				on:click={() => listViewStore.set("bySong")}>by Song</button
			>
			<button
				class={`m-5 rounded-md  px-5 py-1 text-sm hover:cursor-pointer hover:bg-bhm-blue-400 lg:text-lg ${
					listViewType === "byArtist" ? "bg-bhm-sky-600" : "ring-1 ring-bhm-sky"
				}`}
				on:click={() => listViewStore.set("byArtist")}>by Artist</button
			>
		</div>

		<div
			class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4"
		>
			{#if listViewType === "byArtist"}
				{#each Object.entries(artistToSongTitlesMap).sort() as [artist, songs] (artist)}
					{#if shouldAddLetterHeader(artist)}
						<LetterHeader item={artist} />
					{/if}
					<article
						transition:fade
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
			{/if}
			{#if listViewType === "bySong"}
				{#each songs.sort((a, b) => +a.title[0] - +b.title[0]) as { title, artistArray }, i (`${title}-${artistArray.join(", ")}-${i}`)}
					{#if shouldAddLetterHeader(title)}
						<LetterHeader item={title} />
					{/if}
					<p>{title}</p>
				{/each}
			{/if}
		</div>
	</div>
</section>
