<script>
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import reviews from '$lib/data/reviews.json';
</script>

<Carousel particlesToShow={3}>
	{#each reviews.reviews as review (review)}
		<div class="bg-white text-bhm-gray-800 flex flex-col align-center justify-center px-10 py-5">
			<h4 class="text-2xl text-center text-bhm-blue-500">{review.reviewer}</h4>
			<p class="m-1 italic">
				<span class="text-xl font-serif">“</span>
				{review.text}
				<span class="text-xl font-serif">”</span>
			</p>
		</div>
	{/each}
</Carousel>
