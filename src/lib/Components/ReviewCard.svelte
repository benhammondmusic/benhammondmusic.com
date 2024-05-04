<script lang="ts">
import FiveStars from "./FiveStars.svelte";

export let reviewPic = "";
export let reviewText: string;
export let reviewName: string;
export let reviewSubText: string;
export let showStars = false;
</script>

<article
	class="mx-auto mt-5 inline-block w-full rounded-lg bg-bhm-sky-50 px-5 py-5 pb-10 text-bhm-gray-800 shadow-lg"
	style="max-width: 500px"
>
	{#if reviewPic}
		<div class="w-full pb-5 pt-1">
			<div class="mx-auto -mt-16 h-20 w-20 overflow-hidden rounded-full shadow-lg">
				<img
					src={reviewPic}
					alt=""
				/>
			</div>
		</div>
	{/if}

	<div class="mb-10 w-full">
		<div class="h-3 text-left text-3xl leading-tight text-bhm-blue-500">“</div>
		<p class="px-5 text-center italic text-bhm-gray-600">
			{reviewText}
		</p>
		<div class="-mt-3 h-3 text-right text-3xl leading-tight text-bhm-blue-500">”</div>
	</div>
	{#if showStars}
		<FiveStars />
	{/if}
	<div class="w-full">
		<p class="text-md text-center font-bold text-bhm-blue-500">
			{reviewName}
		</p>
		<p class="text-center text-xs text-bhm-gray-500">
			{reviewSubText}
		</p>
	</div>
</article>
