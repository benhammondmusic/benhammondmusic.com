<script>
	import CountUp from '$lib/Components/CountUp.svelte';
	import MusicNotes from '$lib/icons/MusicNotes.svelte';
	import Diamond from '$lib/icons/Diamond.svelte';
	import OldMic from '$lib/icons/OldMic.svelte';
	import CD from '$lib/icons/CD.svelte';
	import FancyHeading from '$lib/Components/FancyHeading.svelte';
</script>

<section class="py-10">
	<h2 class="text-3xl">Ben Hammond</h2>
	<h3 class="text-xl">Singer-Songbuilder</h3>
</section>

<section class="py-10 grid grid-cols-12 gap-10">
	<img
		class="col-span-5"
		src="/images/BenHeroSnowyGuitar.jpg"
		alt="ben atop a snowy mountain in a dark suit holding a guitar"
	/>
	<div class="col-span-6 m-5">
		<FancyHeading text={'About'} />
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
	</div>
</section>

<aside>
	<CountUp targetCount={100} interval={30} suffix={'0+'} textLabel={'Songs in Repertoire'}>
		<MusicNotes />
	</CountUp>
	<CountUp targetCount={40} interval={100} suffix={'0+'} textLabel={'Weddings and Private Events'}>
		<Diamond />
	</CountUp>
	<CountUp targetCount={3} interval={1000} suffix={'k'} textLabel={'Public Gigs'}>
		<OldMic />
	</CountUp>
	<CountUp targetCount={14} interval={300} suffix={'k'} textLabel={'Discs Sold'}>
		<CD />
	</CountUp>
</aside>
