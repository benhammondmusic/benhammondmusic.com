<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Components/Navbar.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<div class="bg-bhm-gray text-white font-light w-full">
	<div class="w-full flex flex-col items-center">
		<Navbar />
		<main class="py-10 px-20 w-11/12 max-w-8xl ">
			<slot />
		</main>
		<Footer />
	</div>
</div>
