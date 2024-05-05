<script lang="ts">
import BandsInTownWidget from "$lib/Components/BandsInTownWidget.svelte";
import CountUp from "$lib/Components/CountUp.svelte";
import FancyHeading from "$lib/Components/FancyHeading.svelte";
import CD from "$lib/icons/CD.svelte";
import Diamond from "$lib/icons/Diamond.svelte";
import MusicNotes from "$lib/icons/MusicNotes.svelte";
import OldMic from "$lib/icons/OldMic.svelte";
//  @ts-ignore
import BenSnowyVertical from "$lib/images/BenSnowyVertical.jpg?w=700&webp";
import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>Ben Hammond - Singer-Songbuilder</title>
	<script
		defer
		src="https://widgetv3.bandsintown.com/main.min.js"
	>
	</script>
</svelte:head>

<section
	transition:fade|global
	class="mx-auto grid max-w-7xl grid-cols-1 content-center items-center justify-center md:grid-cols-3"
>
	<div class="col-span-1 flex items-center justify-center px-10 py-0 md:py-10">
		<img
			height="910"
			width="527"
			src={BenSnowyVertical}
			alt="ben atop a snowy mountain in a dark suit holding a guitar"
			class="w-1/2 rounded-md md:w-full"
		/>
	</div>
	<div class="p-10 md:col-span-2">
		<FancyHeading text={"Singer Songbuilder"} />
		<p class="py-2">
			"Funky… guitar-looping, beat-boxing, soul-singing… powerhouse Ben Hammond" (Sarasota Herald
			Tribune) performs a wide range of groove-oriented acoustic mashups, original compositions and
			re-imagined cover songs.
		</p>

		<p class="py-2">
			For over two decades, Hammond has honed his diverse, energetic style and is consistently one
			of the most sought after musicians in those places he's called home, including Denver and the
			Colorado Rocky Mountains since 2016. As noted by the Portland Press Herald: "Hammond is a
			versatile musician who writes memorable originals, delivers when he decides to cover someone,
			and uses his guitar, voice and gadgets to create a sound that you want to keep hearing." Learn
			more and <a
				class="underline underline-offset-2 hover:bg-bhm-copper-700 hover:text-white"
				href="/booking">book music for your next event!</a
			>
		</p>

		<div class="mb-0 pt-10">
			<FancyHeading text={"Live Performances"} />

			<BandsInTownWidget />
		</div>
	</div>
</section>

<aside class="mx-auto grid max-w-7xl grid-cols-4 items-center justify-items-center pb-20 pt-10">
	<CountUp
		className="col-span-4 sm:col-span-2 lg:col-span-1"
		targetCount={100}
		interval={30}
		suffix={"0+"}
		textLabel={"Songs in Repertoire"}
	>
		<MusicNotes />
	</CountUp>

	<CountUp
		className="col-span-4 sm:col-span-2 lg:col-span-1"
		targetCount={3}
		interval={1000}
		suffix={"k"}
		textLabel={"Public Gigs"}
	>
		<OldMic />
	</CountUp>
	<CountUp
		className="col-span-4 sm:col-span-2 lg:col-span-1"
		targetCount={40}
		interval={100}
		suffix={"0+"}
		textLabel={"Private Events"}
	>
		<Diamond />
	</CountUp>

	<CountUp
		className="col-span-4 sm:col-span-2 lg:col-span-1"
		targetCount={15}
		interval={300}
		suffix={"k"}
		textLabel={"Albums Sold"}
	>
		<CD />
	</CountUp>
</aside>
