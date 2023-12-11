<script lang="ts">
	import type { asPct } from "$lib/utils/songlistUtils";

	import { getAverageOfProperty, asPct, getMostCommonKeySigs } from "$lib/utils/songlistUtils";

	export let data;
	const featuresToAverage: Feature[] = ["danceability", "energy", "acousticness", "valence"];
</script>

<article class="rounded-sm p-5 ring-1 ring-bhm-blue">
	<p>
		Average tempo:
		<span class="font-bold">{Math.round(getAverageOfProperty(data, "tempo"))} bpm</span>
	</p>
	{#each featuresToAverage as feature (feature)}
		<p>
			Average {feature}:
			<span class="font-bold">{asPct(getAverageOfProperty(data, feature))} </span>
		</p>
	{/each}

	<p>
		Most common key: <span class="font-bold">{getMostCommonKeySigs(data).join(", ")}</span>
	</p>
</article>
