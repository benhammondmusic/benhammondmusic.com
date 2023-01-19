<script lang="ts">
	import CountUp from "$lib/Components/CountUp.svelte";
	import MusicNotes from "$lib/icons/MusicNotes.svelte";
	import Diamond from "$lib/icons/Diamond.svelte";
	import OldMic from "$lib/icons/OldMic.svelte";
	import CD from "$lib/icons/CD.svelte";
	import FancyHeading from "$lib/Components/FancyHeading.svelte";

	import { PUBLIC_BASE_URL } from "$env/static/public";
	import { onMount } from "svelte";

	import BarChart from "$lib/Components/BarChart.svelte";

	let song: any;
	let yearDistribution: any = [];

	async function getPlayListYears() {
		const fetchedYearList = await fetch(`${PUBLIC_BASE_URL}/api/songlist-metadata`).then((res) =>
			res.json(),
		);

		const yearsScaffold = Array.from({ length: 75 }, (_, i) => i + 1950);

		yearsScaffold.forEach((year: number) => {
			const count = fetchedYearList.data.filter(
				(fetchedYear: string) => parseInt(fetchedYear) === year,
			).length;
			yearDistribution.push({
				year,
				count,
			});
		});
	}

	onMount(async () => {
		getPlayListYears();
	});
</script>

<svelte:head>
	<title>Ben Hammond - Singer-Songbuilder</title>
</svelte:head>

<BarChart data={yearDistribution} />

<section class="grid grid-cols-12 items-center gap-10 py-10">
	<img
		class="col-span-5 "
		src="/images/BenSnowyVertical.jpg"
		alt="ben atop a snowy mountain in a dark suit holding a guitar"
	/>
	<div class="col-span-6 m-2">
		<FancyHeading text={"Singer Songbuilder"} />
		<p class="py-2">
			"Funky… guitar-looping, beat-boxing, soul-singing… powerhouse Ben Hammond" (Sarasota Herald
			Tribune) performs a wide range of groove-oriented acoustic mashups, original compositions and
			re-imagined cover songs.
		</p>

		<p class="py-2">
			For over two decades, Hammond has honed his diverse, energetic style and is consistently one
			of the most sought after musicians in those places he's called home, including most recently
			the Colorado Rocky Mountains and Front Range. As noted by the Portland Press Herald: "Hammond
			is a versatile musician who writes memorable originals, delivers when he decides to cover
			someone, and uses his guitar, voice and gadgets to create a sound that you want to keep
			hearing."
		</p>

		<p class="py-2 text-xl">
			<a
				class="text-bhm-copper underline hover:bg-bhm-copper-700 hover:text-white "
				href="/booking">Book music for your event!</a
			>
		</p>
	</div>
</section>

<aside class="grid grid-cols-4 items-center justify-items-center py-10">
	<CountUp
		targetCount={100}
		interval={30}
		suffix={"0+"}
		textLabel={"Songs in Repertoire"}
	>
		<MusicNotes />
	</CountUp>

	<CountUp
		targetCount={3}
		interval={1000}
		suffix={"k"}
		textLabel={"Public Gigs"}
	>
		<OldMic />
	</CountUp>
	<CountUp
		targetCount={40}
		interval={100}
		suffix={"0+"}
		textLabel={"Private Events"}
	>
		<Diamond />
	</CountUp>

	<CountUp
		targetCount={15}
		interval={300}
		suffix={"k"}
		textLabel={"Albums Sold"}
	>
		<CD />
	</CountUp>
</aside>
