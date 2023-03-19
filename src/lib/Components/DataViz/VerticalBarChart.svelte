<script lang="ts">
	import type { Song } from "$lib/utils/songlistUtils";
	export let songs: Song[];
	import { scaleLinear } from "d3-scale";
	import { slide } from "svelte/transition";

	console.log(songs);

	const tempoMarkings = [
		[50, "Lento"],
		[73, "Adagio"],
		[86, "Andante"],
		[109, "Moderato"],
		[132, "Allegro"],
		[150, "Vivace"],
		[180, "Presto"],
		[220, "Prestissimo"],
	];

	const tempoDistributions = getTempoDistributions(songs);

	function getTempoBucket(tempo: number) {
		for (let [maxTempo, bucket] of tempoMarkings) {
			if (tempo <= maxTempo) return bucket;
		}
		return "Weird Tempo";
	}

	const xTicks = tempoMarkings.map((item) => item[1]);
	const yTicks = [50, 100, 150, 200, 250];
	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	let width = 1200;
	let height = 1500;

	function getTempoDistributions(songs: Song[]) {
		let tempoDistributions: Record<string, number> = { Lento: 0 };

		for (let song of songs) {
			const tempoBucket = getTempoBucket(song.tempo);
			if (tempoDistributions[tempoBucket]) {
				tempoDistributions[tempoBucket] += 1;
			} else {
				tempoDistributions[tempoBucket] = 1;
			}
		}
		return tempoDistributions;
	}

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	console.log(xScale);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply({ "0": 0 }, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;
</script>

<section class="mb-24">
	<h2>Distribution of Songs by Tempo</h2>

	<div
		class="chart"
		bind:clientWidth={width}
		bind:clientHeight={height}
	>
		<svg>
			<!-- y axis -->
			<g class="axis y-axis">
				{#each yTicks as tick}
					<g
						class="tick tick-{tick}"
						transform="translate(0, {yScale(tick)})"
					>
						<line x2="100%" />
						<text y="-4">{tick} songs</text>
					</g>
				{/each}
			</g>

			<!-- x axis -->
			<g class="axis x-axis">
				{#each Object.keys(tempoDistributions) as tempoBucket, i}
					<g
						class="tick"
						transform="translate({xScale(i)},{height})"
					>
						<text
							x={barWidth / 2}
							y="-4">{tempoBucket}</text
						>
					</g>
				{/each}
			</g>

			<g class="bars">
				{#each Object.values(tempoDistributions) as count, i}
					<rect
						x={xScale(i) + 2}
						y={yScale(count)}
						width={barWidth - 4}
						height={yScale(0) - yScale(count)}
						in:slide={{ duration: 1000 }}
					/>
				{/each}
			</g>
		</svg>
	</div>
</section>

<style>
	h2 {
		text-align: center;
	}

	.chart {
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 600px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #ccc;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
		fill: #a11;
		stroke: none;
		opacity: 0.65;
	}
</style>
