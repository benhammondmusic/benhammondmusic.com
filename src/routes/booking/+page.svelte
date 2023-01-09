<script>
	import FancyHeading from '$lib/Components/FancyHeading.svelte';
</script>

<svelte:head>
	<title>Ben Hammond - Booking Info</title>
</svelte:head>

<section class="py-10">
	<h2 class="text-3xl">Booking</h2>
</section>

<section class="py-10 flex flex-col align-center">
	<FancyHeading text={'Booking Info'} />

	<p class="py-2">
		As a solo artist, I specialize in destination- and other intimate events in the state and around
		the globe. Often incorporating loop pedals and extended performance techniques, I truly enjoy
		providing the energy and variety of a full band or DJ with the pricing and space considerations
		of a single performer. If a larger, more intricate production is in your plans, I work with an
		amazing assortment of band members including horns, strings, percussion, and much more.
	</p>

	<p class="py-2">
		My performances are improvised and passionate, shaping themselves in real-time to suit you and
		your guests, whether that be a romantic ceremony, relaxing over cocktails, or dancing the night
		away! My services are well suited for clients who are passionate about live music, and who are
		seeking a fun and memorable way to enhance their celebration. Wherever you might be in your
		planning, please reach out by email for more info. Let's make some music!
	</p>

	<div class="aspect-w-16 aspect-h-9  flex justify-center my-10 mx-20">
		<iframe
			class="rounded-md"
			src="https://www.youtube.com/embed/e50j1oUjbUY"
			title="Ben Hammond - Live Music Event Booking Sampler Video"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section class="py-10 px-24 flex flex-col align-center">
	<FancyHeading text={'Event Services'} />

	<h3 class="text-xl">Packages starting at $1,500</h3>
	<ul class="list-inside list-disc mb-5 mt-2">
		<li>
			live music including romantic acoustic repertoire, upbeat live-looped dance sets, and
			everything in between
		</li>
		<li>additional DJ coverage, split before and after live music</li>
		<li>unlimited requests from artist’s 1,000+ song repertoire and DJ library</li>
	</ul>

	<h3 class="text-xl">Additional coverage</h3>
	<ul class="list-inside list-disc mb-5 mt-2">
		<li>can be pro-rated in half hour increments of live music and/or DJ coverage</li>
	</ul>

	<h3 class="text-xl">Expanded ensemble options:</h3>
	<ul class="list-inside list-disc mb-5 mt-2">
		<li>cello, percussion, violin, horns, 2nd vocalist, and more</li>
	</ul>

	<p class="italic text-xs">
		*discounts may be available for shorter, informal events in the Denver metro, and additional
		fees may apply for longer events more than 2 hours from Denver; please inquire for a specific
		quote
	</p>
</section>

<section class="py-10 px-24 flex flex-col align-center">
	<FancyHeading text={'Client Testimonials'} />
</section>
