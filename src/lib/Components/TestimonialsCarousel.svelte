<script lang="ts">
	let innerWidth = 0;
	function calcNumParticles(width: number) {
		if (width < 960) return 1;
		if (width < 1280) return 2;
		return 3;
	}

	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import reviews from '$lib/data/reviews.json';

	let carousel: any;
	function goToPrevPage() {
		carousel.goToPrev({ animated: true });
	}
	function goToNextPage() {
		carousel.goToNext({ animated: true });
	}
</script>

<svelte:window bind:innerWidth />

<Carousel
	dots={false}
	particlesToShow={calcNumParticles(innerWidth)}
	let:showPrevPage
	let:showNextPage
	bind:this={carousel}
>
	<div class="flex items-center" slot="prev">
		<button class="text-5xl mr-5 hover:text-bhm-sky hover:cursor-pointer" on:click={goToPrevPage}
			>◀</button
		>
	</div>
	<div class="flex items-center" slot="next">
		<button class="text-5xl ml-5 hover:text-bhm-sky hover:cursor-pointer" on:click={goToNextPage}
			>▶</button
		>
	</div>
	{#each reviews.reviews as review (review)}
		<div
			class="bg-white text-bhm-gray-800 flex flex-col align-center justify-center px-10 py-5 cursor-grab active:cursor-grabbing select-none"
		>
			<h4 class="text-2xl text-center text-bhm-blue-500">{review.reviewer}</h4>
			<p class="m-1 italic">
				<span class="text-xl font-serif">“</span>
				{review.text}
				<span class="text-xl font-serif">”</span>
			</p>
		</div>
	{/each}
</Carousel>
