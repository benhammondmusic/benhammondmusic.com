<p>BAR CHART HERE 📊</p>

<!-- <script lang="ts">
	import { scaleBand, scaleLinear } from "d3-scale";

	export let data: any;

	const width = 2000;
	const height = 1200;

	const margin = { top: 20, right: 20, bottom: 20, left: 41 };
	// const innerHeight = height - margin.top - margin.bottom;
	// const innerWidth = width - margin.left - margin.right;

	$: xDomain = data.map((d: any) => d.year);
	$: yDomain = data.map((d: any) => +d.count);

	$: yScale = scaleBand().domain(xDomain).range([0, innerHeight]).padding(0.2);
	$: xScale = scaleLinear()
		.domain([0, Math.max.apply(null, yDomain)])
		.range([0, innerWidth]);
</script>

<svg
	{width}
	{height}
>
	<g transform={`translate(${margin.left},${margin.top})`}>
		{#each xScale.ticks() as tickValue}
			<g transform={`translate(${xScale(tickValue)},0)`}>
				<line
					y2={innerHeight}
					stroke="#336699"
				/>
				<text
					text-anchor="middle"
					dy=".31em"
					stroke="white"
					y={innerHeight + 3}
				>
					{tickValue}
				</text>
			</g>
		{/each}
		{#each data as d}
			<text
				text-anchor="end"
				x="-3"
				dy=".12em"
				stroke="white"
				y={yScale(d.year) + yScale.bandwidth() / 3}
			>
				{d.year % 5 === 0 ? d.year : ""}
			</text>
			<rect
				x="0"
				stroke="white"
				fill="#336699"
				y={yScale(d.year)}
				width={xScale(d.count)}
				height={yScale.bandwidth() / 2}
			/>
		{/each}
	</g>
</svg> -->
