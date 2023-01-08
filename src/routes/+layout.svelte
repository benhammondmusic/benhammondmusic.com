<script lang="ts">
	import '../app.css';
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="bg-bhm-gray text-white ">
	<Navbar />
	<main class="p-5">
		<slot />
	</main>
	<Footer />
</div>
