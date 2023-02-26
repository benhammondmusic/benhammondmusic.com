<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/Components/Layout/Navbar.svelte";
	import Footer from "$lib/Components/Layout/Footer.svelte";
</script>

<div class="border-box flex min-h-screen w-full flex-col bg-bhm-gray font-light text-white">
	<Navbar />
	<main class="w-full content-center items-center justify-center">
		<slot />
	</main>
	<Footer />
</div>
