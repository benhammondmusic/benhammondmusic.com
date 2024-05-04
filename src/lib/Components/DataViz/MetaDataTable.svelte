<script lang="ts">
import type { Feature } from "$lib/utils/songlistUtils";

import {
	asPct,
	getAverageOfProperty,
	getMostCommonKeySigs,
} from "$lib/utils/songlistUtils";

export let data: any;
const featuresToAverage: Feature[] = [
	"danceability",
	"energy",
	"acousticness",
	"valence",
];
</script>

<article class="rounded-sm p-5 ring-1 ring-bhm-blue">
	<p>
		Most common key: <span class="font-bold">{getMostCommonKeySigs(data).join(", ")}</span>
	</p>
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

	<p class="pl-2 pt-2 font-thin italic">
		*Valence refers to the musical happiness, positivity, and euphoria of a song.
	</p>
</article>
