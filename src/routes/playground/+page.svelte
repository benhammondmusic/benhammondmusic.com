<script lang="ts">
	import { PUBLIC_BASE_URL } from "$env/static/public";
	import { fade } from "svelte/transition";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import { Wave } from "svelte-loading-spinners";
	import {
		asPct,
		getAverageOfProperty,
		// getKeySigsCounts,
		getMostCommonKeySigs,
		getArtistCounts,
		type Feature,
		type Song,
		getGenreCounts,
		// getLowestItems,
	} from "$lib/utils/songlistUtils";

	// import PieChart from "$lib/Components/DataViz/PieChart.svelte";
	import DonutChart from "$lib/Components/DataViz/DonutChart.svelte";
	import BubbleChart from "$lib/Components/DataViz/BubbleChart.svelte";
	import VerticalBarChart from "$lib/Components/DataViz/VerticalBarChart.svelte";

	let songDataPromise: Promise<{ data: Song[] }> = getPlayListData();

	async function getPlayListData() {
		return await fetch(`${PUBLIC_BASE_URL}/api/songlist-metadata`).then((res) => res.json());
	}

	const featuresToAverage: Feature[] = ["danceability", "energy", "acousticness", "valence"];
</script>

<svelte:head>
	<title>Ben Hammond - Music Data Viz Playground</title>
</svelte:head>

<section
	transition:fade
	class="align-center mx-auto w-full max-w-7xl"
>
	<FancyHeading text={"Music Data-Viz Playground"} />

	<div class="flex flex-col items-center">
		<p class="max-w-xl pb-10">
			Below are some ongoing experiments in visualizing the data behind my music career. I have
			uploaded (most) of my songlist as a <a
				href="https://open.spotify.com/playlist/1BGI6ETmEsvhj0nTv7LOu6?si=7027beba59b4422d"
				class="underline hover:bg-bhm-sky">Spotify playlist</a
			>; that data is securely fetched, wrangled, and ultimately displayed below. Much of my data
			viz experience comes from my full-time job as Senior Software Engineer on the
			<a
				href="https://healthequitytracker.org"
				class="underline hover:bg-bhm-sky">Health Equity Tracker</a
			>. I will be using this page as a low-stakes way to try new ideas and explore SvelteKit and D3
			creations.
		</p>

		{#await songDataPromise}
			<Wave
				size="120"
				color="#336699"
				unit="px"
				duration="2s"
			/>
			<article class="flex justify-center">
				<p>loading songlist metadata from Spotify...</p>
			</article>
		{:then songData}
			<article class="rounded-sm ring-1 ring-bhm-blue p-5">
				<p>
					Average tempo:
					<span class="font-bold"
						>{Math.round(getAverageOfProperty(songData.data, "tempo"))} bpm</span
					>
				</p>
				{#each featuresToAverage as feature (feature)}
					<p>
						Average {feature}:
						<span class="font-bold">{asPct(getAverageOfProperty(songData.data, feature))} </span>
					</p>
				{/each}

				<p>
					Most common key: <span class="font-bold"
						>{getMostCommonKeySigs(songData.data).join(", ")}</span
					>
				</p>
			</article>
			<div>
				<DonutChart data={getArtistCounts(songData.data)} />
				<DonutChart data={getGenreCounts(songData.data)} />
				<BubbleChart data={getGenreCounts(songData.data)} />
				<!-- <PieChart valueCounts={getKeySigsCounts(songData.data)} /> -->
				<VerticalBarChart songs={songData.data} />
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</section>
