<script>
	const capitalLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
</script>

<div class="m-10">
	<span class="p-5">Jump to:</span>
	<span>
		{#each capitalLetters as letter (letter)}
			<a
				href={`#${letter}`}
				class="rounded-lg p-2 font-bold underline hover:bg-white hover:text-bhm-sky ">{letter}</a
			>
		{/each}
	</span>
</div>
