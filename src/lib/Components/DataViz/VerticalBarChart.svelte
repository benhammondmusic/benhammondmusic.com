<script lang="ts">
import {
	type Song,
	getDurationFromBpm,
	getTempoDistributions,
	roundNearestIncrementOfN,
	tempoMarkings,
} from "$lib/utils/songlistUtils";
export let songs: Song[];
import { scaleBand, scaleLinear } from "d3-scale";
import { flip } from "svelte/animate";

const colors = [
	"#336699",
	"#5b64a0",
	"#815f9e",
	"#a15a94",
	"#ba5681",
	"#ca5769",
	"#ce614f",
	"#c87136",
];

const data = getTempoDistributions(songs);

let innerWidth = window.innerWidth;
let vizWidth = window.innerWidth - 100;
let vizHeight = window.innerHeight - 150;

const marginTop = 5; // top margin, in pixels
const marginRight = 5; // right margin, in pixels
const marginBottom = 100; // bottom margin, in pixels
const marginLeft = 150; // left margin, in pixels
// const width = innerWidth; // width of the chart, in pixels
// const height = innerHeight; // height of the chart, in pixels
const xPadding = 0.05; // padding between bars
const yFormat = " songs"; // unit to display on y-axis ticks
const yLabel = "Songs per tempo marking in Ben's repertoire"; // label for the y-axis
const xLabelLeft = "← Slower";
const xLabelRight = "Faster →";

const yScaleFactor = 2; // number of ticks on y-axis

$: reactiveXVals = tempoMarkings.map((row) => row[1]);
$: reactiveYVals = tempoMarkings.map((row) => data[row[1]]);

// Compute default domains, and unique the x-domain.
$: reactiveXDomain = reactiveXVals; // an array of (ordinal) x-values // sort by descending frequency
$: reactiveYDomain = [0, Math.max(...reactiveYVals)]; // [y-min, y-max]

// Construct scales, axes, and formats.
const xRange = [marginLeft, innerWidth - marginRight]; // [left, right]
const yRange = [innerHeight - marginBottom, marginTop * 4]; // [bottom, top]
$: reactiveXScale = scaleBand(reactiveXDomain, xRange).padding(xPadding);
$: reactiveYScale = scaleLinear(reactiveYDomain, yRange).nice();

$: reactiveYTicks = reactiveYScale.ticks(yScaleFactor);
$: reactiveYTicksFormatted = reactiveYTicks.map((el) =>
	el.toLocaleString("en-US"),
);
</script>

<svelte:window bind:innerWidth />
<section class="m-5 p-5">
	<div
		class="chart-container"
		dir="auto"
	>
		<svg
			width={vizWidth}
			height={vizHeight}
			viewBox="0 0 {vizWidth} {vizHeight}"
		>
			<g
				class="x-axis"
				transform="translate(0,{innerHeight - marginBottom})"
			>
				<path
					class="domain"
					stroke="white"
					d="M{marginLeft}, 0.5 H{innerWidth}"
				/>
				{#each reactiveXVals as xVal, i}
					<g
						class="tick"
						opacity="1"
						transform="translate({reactiveXScale(xVal)},0)"
					>
						<line
							x1={reactiveXScale.bandwidth() / 2}
							x2={reactiveXScale.bandwidth() / 2}
							stroke="white"
							y2="6"
						/>
						<text
							y={marginBottom}
							dy={innerWidth < 800 ? -reactiveXScale.bandwidth() / 2 + 5 : -50}
							dx={reactiveXScale.bandwidth() / 4}
							transform="rotate({innerWidth < 800 ? 90 : 0} 50 50)">{xVal}</text
						>
					</g>
				{/each}
			</g>

			<g
				class="y-axis"
				transform="translate({marginLeft}, 0)"
			>
				{#each reactiveYTicks as tick, i}
					<g
						class="tick"
						opacity="1"
						transform="translate(0, {reactiveYScale(tick)})"
					>
						<line
							class="tick-grid"
							x2={innerWidth - marginLeft - marginRight}
						/>
						<text
							x={-marginLeft}
							y="10">{reactiveYTicksFormatted[i] + yFormat}</text
						>
					</g>
				{/each}
				<text
					x="-{marginLeft}"
					y={marginTop}
					fill={"white"}>{yLabel}</text
				>
			</g>

			<g class="bars">
				{#each reactiveYVals as bar, i (bar)}
					<rect
						class={tempoMarkings[i][1].toString()}
						x={reactiveXScale(reactiveXVals[i])}
						y={reactiveYScale(reactiveYVals[i])}
						width={reactiveXScale.bandwidth()}
						height={reactiveYScale(0) - reactiveYScale(bar)}
						fill={colors[i % colors.length]}
						animate:flip={{ duration: 1000 }}
					/>
				{/each}
				{#each reactiveYVals as barLabel, i (barLabel)}
					{@const avgBpm =
						i > 0 ? (tempoMarkings[i - 1][0] + tempoMarkings[i][0]) / 2 : tempoMarkings[i][0]}
					<text
						style="animation-duration: {getDurationFromBpm(avgBpm)};"
						class="text-xs italic"
						x={reactiveXScale(reactiveXVals[i])}
						y={reactiveYScale(reactiveYVals[i]) - 2}
						width={reactiveXScale.bandwidth()}
						height={reactiveYScale(0) - reactiveYScale(barLabel)}
						fill={"white"}
						animate:flip={{ duration: 1000 }}
						>{i === 0 ? "<" : "~"} {roundNearestIncrementOfN(avgBpm)} bpm</text
					>
				{/each}
				<text
					class="italic"
					x={250}
					y={innerHeight}
					fill={"white"}>{xLabelLeft}</text
				>
				<text
					class="italic"
					x={innerWidth - 200}
					y={innerHeight}
					fill={"white"}>{xLabelRight}</text
				>
			</g>
		</svg>
	</div>
</section>

<style>
	.chart-container {
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 2rem;
		padding-right: 100px;
	}

	svg {
		max-width: 100%;
		max-height: 100%;
		margin: auto;
	}

	.bars rect.Lento {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 40bpm  */
		animation: pulse 1.5s infinite;
	}

	.bars rect.Adagio {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 61bpm  */
		animation: pulse 1s infinite;
	}

	.bars rect.Andante {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 79bpm  */
		animation: pulse 0.76s infinite;
	}

	.bars rect.Moderato {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 97bpm  */
		animation: pulse 0.62s infinite;
	}

	.bars rect.Allegro {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 120bpm  */
		animation: pulse 0.5s infinite;
	}

	.bars rect.Vivace {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 141bpm  */
		animation: pulse 0.43s infinite;
	}

	.bars rect.Presto {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 165bpm  */
		animation: pulse 0.36s infinite;
	}

	.bars rect.Prestissimo {
		will-change: transform;
		transform-origin: bottom;
		/* 60 / 200bpm  */
		animation: pulse 0.3s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scaleY(0.93);
			transform-origin: bottom;
		}

		100% {
			transform: scaleY(1);
			transform-origin: bottom;
		}
	}

	.y-axis {
		font-size: "10px";
		text-anchor: "end";
	}

	.x-axis {
		font-size: "10px";
		text-anchor: "middle";
	}

	.tick {
		opacity: 1;
	}

	.tick-grid {
		stroke: white;
		stroke-opacity: 0.2;
		font-size: "11px";
		color: white;
	}

	.tick text {
		fill: white;
		text-anchor: start;
		padding-bottom: 2rem;
		line-height: 4rem;
		vertical-align: middle;
	}
</style>
