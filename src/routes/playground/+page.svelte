<script lang="ts">
	import { PUBLIC_BASE_URL } from "$env/static/public";

	import {
		asPct,
		getAverageOfProperty,
		getKeySigsCounts,
		getMostCommonKeySigs,
		getArtistCounts,
		type Feature,
		type Song,
		getLowestItems,
	} from "$lib/utils/songlistUtils";

	import PieChart from "$lib/Components/DataViz/PieChart.svelte";
	import DonutChart from "$lib/Components/DataViz/DonutChart.svelte";

	let songDataPromise: Promise<{ data: Song[] }> = getPlayListData();

	async function getPlayListData() {
		return await fetch(`${PUBLIC_BASE_URL}/api/songlist-metadata`).then((res) => res.json());
	}

	const featuresToAverage: Feature[] = ["danceability", "energy", "acousticness", "valence"];
</script>

{#await songDataPromise}
	<p>...waiting</p>
{:then songData}
	<div>
		<DonutChart data={getArtistCounts(songData.data)} />
		<PieChart valueCounts={getKeySigsCounts(songData.data)} />
	</div>
	<p>
		Average tempo:
		<span class="font-bold">{Math.round(getAverageOfProperty(songData.data, "tempo"))} bpm</span>
	</p>
	{#each featuresToAverage as feature (feature)}
		<p>
			Average {feature}:
			<span class="font-bold">{asPct(getAverageOfProperty(songData.data, feature))} </span>
		</p>
	{/each}

	<p>
		Most common key: {getMostCommonKeySigs(songData.data).join(", ")}
	</p>

	<div class="grid grid-cols-4 mt-24">
		{#each songData.data as song (song.id)}
			<span class="text-xs">{song.name.split(" - ")[0]}</span>
		{/each}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
