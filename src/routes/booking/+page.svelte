<script lang="ts">
	import FancyHeading from "$lib/Components/FancyHeading.svelte";
	import ReviewCard from "$lib/Components/ReviewCard.svelte";
	import reviewsJson from "$lib/data/reviews.json";
	import type { Review } from "$lib/utils/reviewUtils";
	const testimonials = reviewsJson.reviews as Review[];
</script>

<svelte:head>
	<title>Ben Hammond - Booking Info</title>
</svelte:head>

<section class="align-center mx-auto w-full max-w-7xl">
	<FancyHeading text={"Booking Info"} />

	<div class="mx-10">
		<p class="mx-auto w-full max-w-4xl py-2">
			As a solo artist, I specialize in destination- and other intimate events in the state and
			around the globe. Often incorporating loop pedals and extended performance techniques, I truly
			enjoy providing the energy and variety of a full band or DJ with the pricing and space
			considerations of a single performer. If a larger, more intricate production is in your plans,
			I work with an amazing assortment of band members including horns, strings, percussion, and
			much more.
		</p>

		<p class="mx-auto w-full max-w-4xl py-2">
			My performances are improvised and passionate, shaping themselves in real-time to suit you and
			your guests, whether that be a romantic ceremony, relaxing over cocktails, or dancing the
			night away! My services are well suited for clients who are passionate about live music, and
			who are seeking a fun and memorable way to enhance their celebration. Wherever you might be in
			your planning, please reach out by email for more info. Let's make some music!
		</p>
	</div>

	<div class="align-center my-10 mx-24 flex flex-col items-center lg:px-32 2xl:px-48 ">
		<iframe
			class="aspect-video w-full rounded-md"
			src="https://www.youtube.com/embed/e50j1oUjbUY"
			title="Ben Hammond - Live Music Event Booking Sampler Video"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section class="align-center mx-auto flex w-full max-w-7xl flex-col items-center">
	<div class="max-w-md">
		<FancyHeading text={"Event Services"} />

		<h3 class="text-xl">Packages starting at $1,500</h3>
		<ul class="mb-5 mt-2 list-inside list-disc">
			<li>
				live music including romantic acoustic repertoire, upbeat live-looped dance sets, and
				everything in between
			</li>
			<li>additional DJ coverage, split before and after live music</li>
			<li>unlimited requests from artist’s 1,000+ song repertoire and DJ library</li>
		</ul>

		<h3 class="text-xl">Additional coverage</h3>
		<ul class="mb-5 mt-2 list-inside list-disc">
			<li>can be pro-rated in half hour increments of live music and/or DJ coverage</li>
		</ul>

		<h3 class="text-xl">Expanded ensemble options:</h3>
		<ul class="mb-5 mt-2 list-inside list-disc">
			<li>cello, percussion, violin, horns, 2nd vocalist, and more</li>
		</ul>

		<p class="text-sm italic">
			*discounts may be available for shorter, informal events in the Denver metro, and additional
			fees may apply for longer events more than 2 hours from Denver; please inquire for a specific
			review
		</p>
	</div>
</section>

<section class="align-center mx-auto flex w-full max-w-4xl flex-col ">
	<div class="py-10 px-5 ">
		<FancyHeading text={"Recent Client Testimonials"}>
			<a
				href="https://www.theknot.com/marketplace/redirect-1029657?utm_source=vendor_website&utm_medium=banner&utm_term=e308acc6-f312-445b-82f7-a70f00baa3ff&utm_campaign=vendor_badge_assets"
			>
				<img
					src="/images/VendorBadge_CouplesLoveUs.png"
					alt="couples love us badge from the knot.com"
					width="100"
					class="m-5 inline"
				/>
			</a>
		</FancyHeading>

		<div class="columns-3xs gap-5">
			{#each testimonials as testimonial (testimonial)}
				<ReviewCard
					reviewText={testimonial.text}
					reviewName={testimonial.reviewer}
					reviewSubText={testimonial.place}
					showStars={true}
				/>
			{/each}
		</div>
	</div>
</section>
