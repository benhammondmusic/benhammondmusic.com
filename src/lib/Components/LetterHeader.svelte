<script lang="ts">
export let keyLetter: string;

function handleClick() {
	history.pushState(
		"",
		document.title,
		window.location.pathname + window.location.search,
	);
	window.scrollTo(0, 0);
}
</script>

<h4
	id={keyLetter}
	class="col-span-full mt-10 flex justify-between"
>
	<span class="text-4xl">
		{keyLetter}
	</span>
	<button
		class="ml-24 rounded-lg p-2 hover:bg-white hover:text-bhm-sky"
		on:click={handleClick}>back to top</button
	>
</h4>
