<script lang="ts">
	export let artist: string;

	function handleClick() {
		history.pushState("", document.title, window.location.pathname + window.location.search);
		window.scrollTo(0, 0);
	}
</script>

<h4
	id={artist[0]}
	class="col-span-full mt-24 flex justify-between"
>
	<span class="text-4xl">
		{artist[0]}
	</span>
	<button
		class="ml-24 rounded-lg p-2 hover:bg-white hover:text-bhm-sky"
		on:click={handleClick}>back to top</button
	>
</h4>
