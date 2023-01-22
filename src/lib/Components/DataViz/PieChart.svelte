<script lang="ts">
	import type { Song } from "$lib/utils/songlistUtils";
	import { arc, pie } from "d3-shape";

	export let valueCounts: { [key: string]: number };

	const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

	$: arcs = pie()(Object.entries(valueCounts).map((key, count) => count)); // generate the arc angles from data
	const arcGen = arc(); // generate the arcs
	$: pies = arcs.map((arc) => {
		// generate the svg paths from the arcs
		let input = {
			innerRadius: 100,
			outerRadius: 200,
			startAngle: arc.startAngle,
			endAngle: arc.endAngle,
		};
		return arcGen(input);
	});
</script>

<!-- Plot the svg paths  -->
<svg
	width="600"
	height="500"
>
	{#each pies as pie, i}
		<g>
			<path
				d={pie}
				style="transform:translate(200px, 200px)"
				fill={colors[i % colors.length]}
			/>
			<text
				x={5 * i}
				y={5 * i}>{Object.keys(valueCounts)[i]}</text
			>
		</g>
	{/each}
</svg>
