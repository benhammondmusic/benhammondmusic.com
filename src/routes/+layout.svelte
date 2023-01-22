<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/Components/Layout/Navbar.svelte";
	import Footer from "$lib/Components/Layout/Footer.svelte";
</script>

<div class="w-full bg-bhm-gray font-light text-white">
	<div class="flex w-full flex-col items-center">
		<Navbar />
		<main class="max-w-8xl w-11/12 py-10 px-20 ">
			<slot />
		</main>
		<Footer />
	</div>
</div>
