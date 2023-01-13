<script lang="ts">
	export let quotePic: string;
	export let quoteText: string;
	export let quoteName: string;
	export let quoteOrg: string;
</script>

<article
	class="mx-auto w-full rounded-lg bg-bhm-sky-50 py-5 px-5 pb-10 text-bhm-gray-800 shadow-lg"
	style="max-width: 500px"
>
	<div class="w-full pt-1 pb-5">
		<div class="mx-auto -mt-16 h-20 w-20 overflow-hidden rounded-full shadow-lg">
			<img
				src={quotePic}
				alt=""
			/>
		</div>
	</div>
	<div class="mb-10 w-full">
		<div class="h-3 text-left text-3xl leading-tight text-bhm-blue-500">“</div>
		<p class="px-5 text-center italic text-bhm-gray-600">
			{quoteText}
		</p>
		<div class="-mt-3 h-3 text-right text-3xl leading-tight text-bhm-blue-500">”</div>
	</div>
	<div class="w-full">
		<p class="text-md text-center font-bold text-bhm-blue-500">
			{quoteName}
		</p>
		<p class="text-center text-xs text-bhm-gray-500">
			{quoteOrg}
		</p>
	</div>
</article>
