<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Components/pppNavbar.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<div class="bg-bhm-gray text-white font-light">
	<Navbar />
	<main class="p-5">
		<slot />
	</main>
	<Footer />
</div>
