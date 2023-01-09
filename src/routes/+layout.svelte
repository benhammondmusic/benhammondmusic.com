<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Components/Navbar.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<div class="bg-bhm-gray text-white font-light ">
	<Navbar />
	<main class="py-10 px-24 ">
		<slot />
	</main>
	<Footer />
</div>
