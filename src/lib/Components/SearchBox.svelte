<script lang="ts">
import songsJson from "$lib/data/songs.json";
import { fade } from "svelte/transition";
let songs = songsJson.songs;

function resetFilters() {
	songs = songsJson.songs;
}

function handleSearchUpdate(e: Event) {
	const target = e.target as HTMLInputElement;
	const value: string = target.value;
	if (value) {
		songs = songsJson.songs
			.filter(
				(song) =>
					song.title.toLowerCase().includes(target.value.toLowerCase()) ||
					song.artistArray
						.join(" ")
						.toLowerCase()
						.includes(target.value.toLowerCase()),
			)
			.sort((a, b) => a.title.localeCompare(b.title));
	} else {
		isFiltered = false;
	}
}

$: isFiltered = songs !== songsJson.songs;
</script>

<div class="mt-10 w-full rounded-md p-5 ring-1 ring-bhm-blue-50">
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
		<article
			transition:fade|global
			class="col-span-3 mb-5"
		>
			<h4 class="col-span-full my-10 flex justify-between">
				<span class="text-2xl"> Search Results </span>
			</h4>
			<ul class="list-inside list-disc columns-2">
				{#each songs as song, index (`${song}-${index}`)}
					<li class="px-2 text-sm font-bold">{song.title} ({song.artistArray.join(", ")})</li>
				{/each}
			</ul>
		</article>
	{:else if isFiltered}
		<p>No results</p>
	{/if}
</div>
