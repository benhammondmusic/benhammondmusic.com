<script>
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import reviews from '$lib/data/reviews.json';
</script>

<Carousel>
	{#each reviews.reviews as review (review)}
		<div class="bg-white text-bhm-gray-800 flex flex-col align-center">
			<h4>{review.reviewer}</h4>
			<p>{review.text}</p>
		</div>
	{/each}
</Carousel>
