<script lang="ts">
import "../app.css";
import Footer from "$lib/Components/Layout/Footer.svelte";
import Navbar from "$lib/Components/Layout/Navbar.svelte";
</script>

<div
	id="whole-page"
	class="border-box flex bg-black bg-opacity-40 min-h-screen w-full flex-col font-light text-white"
>
	<Navbar />
	<main class="w-full content-center items-center justify-center">
		<slot />
	</main>
	<Footer />
</div>

<style>
	/* spinning, fuzzy && in the background */
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
		transform: rotate(20deg) scale(2);
		filter: blur(3px);
	}

	/* Keyframes for animation */
	@keyframes focusInOutTexture {
		0% {
			transform: rotate(20deg) scale(2);
		}
		50% {
			transform: rotate(-160deg) scale(2.75); /* Adjust scale */
		}
		100% {
			transform: rotate(-340deg) scale(2);
		}
	}

	/* Apply animation only on larger screens and if prefers reduced motion is not set */
	@media (min-width: 768px) {
		#whole-page::before {
			animation: focusInOutTexture 250s linear infinite;
			opacity: 0.4;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		#whole-page::before {
			animation: none !important;
		}
	}
</style>
