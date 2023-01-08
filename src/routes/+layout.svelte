<script lang="ts">
	import '../app.css';
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="bg-bhm-gray text-white p-5">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
