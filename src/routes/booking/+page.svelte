<script>
	import FancyHeading from '$lib/Components/FancyHeading.svelte';
	import TestimonialsCarousel from '$lib/Components/TestimonialsCarousel.svelte';
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

	<div class="flex flex-col align-center items-center my-10 mx-24 lg:px-32 2xl:px-48 ">
		<iframe
			class="rounded-md w-full aspect-video"
			src="https://www.youtube.com/embed/e50j1oUjbUY"
			title="Ben Hammond - Live Music Event Booking Sampler Video"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section class="py-10 flex flex-col align-center items-center">
	<div class="max-w-md">
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

		<p class="italic text-sm">
			*discounts may be available for shorter, informal events in the Denver metro, and additional
			fees may apply for longer events more than 2 hours from Denver; please inquire for a specific
			quote
		</p>
	</div>
</section>

<section class="py-10 px-1 md:px-10 xl:px-24 flex flex-col align-center">
	<FancyHeading text={'Client Testimonials'}>
		<a
			href="https://www.theknot.com/marketplace/redirect-1029657?utm_source=vendor_website&utm_medium=banner&utm_term=e308acc6-f312-445b-82f7-a70f00baa3ff&utm_campaign=vendor_badge_assets"
		>
			<img
				src="/images/VendorBadge_CouplesLoveUs.png"
				alt="couples love us badge from the knot.com"
				width="100"
				class="inline m-5"
			/>
		</a>
	</FancyHeading>

	<TestimonialsCarousel />
</section>
