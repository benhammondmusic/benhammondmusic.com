<script>
	const capitalLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
</script>

<div class="m-10">
	<span class="p-5">Jump to:</span>
	<div class="flex flex-wrap justify-evenly">
		{#each capitalLetters as letter (letter)}
			<a
				href={`#${letter}`}
				class="rounded-lg px-2 font-bold underline hover:bg-white hover:text-bhm-sky sm:py-2"
				>{letter}</a
			>
		{/each}
	</div>
</div>
