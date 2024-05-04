<script lang="ts">
	import "../app.css";
	import Footer from "$lib/Components/Layout/Footer.svelte";
	import Navbar from "$lib/Components/Layout/Navbar.svelte";
</script>

<!-- bg-gradient-to-br from-bhm-blue-800 via-bhm-gray-600 to-bhm-gray-800 -->

<div
	id="whole-page"
	class="border-box flex bg-[#000002] bg-opacity-50 min-h-screen w-full flex-col font-light text-white"
>
	<Navbar />
	<main class="w-full content-center items-center justify-center">
		<slot />
	</main>
	<Footer />
</div>

<style>
	/* spinning, fuzzy && in the background */
	/* #whole-page::before { */
	#whole-page::before {
		content: "";
		position: fixed;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background-image: url("$lib/images/PedalBoardHello.jpg");
		opacity: 0.2;
		pointer-events: none;
		z-index: -1;
		transform-origin: center;
		transform: rotate(0deg) scale(1);
		filter: blur(6px);
		animation: focusInOutTexture 300s linear infinite;
	}

	@keyframes focusInOutTexture {
		0% {
			transform: rotate(180deg) scale(1);
		}
		50% {
			transform: rotate(360deg) scale(1.5); /* Adjust scale */
		}
		100% {
			transform: rotate(540deg) scale(1);
		}
	}
</style>
