<script lang="ts">
	import Amazon from "$lib/icons/Amazon.svelte";
	import AppleMusic from "$lib/icons/AppleMusic.svelte";
	import Spotify from "$lib/icons/Spotify.svelte";

	export let title = "";
	export let subtitle = "";
	export let src: string;
	export let spotifyUrl: string;
	export let appleMusicUrl: string;
	export let amazonUrl: string;
</script>

<article>
	<div class="flex transform flex-col items-center transition duration-500 hover:scale-110">
		<img
			alt="album cover"
			{src}
		/>
		<div class="max-w-xs">
			<h3 class="text-2xl font-bold">{title}</h3>
			<span class="italic">{subtitle}</span>
			<slot />
		</div>
	</div>
	<div class="mt-5 grid grid-cols-3 justify-items-center">
		<a
			class="px-10 py-5 transition duration-500 hover:scale-150 hover:text-bhm-copper"
			href={spotifyUrl}
			title="Spotify"
		>
			<Spotify />
		</a>
		<a
			class="px-10 py-5 transition duration-500 hover:scale-150 hover:text-bhm-copper"
			href={appleMusicUrl}
			title="Apple Music"
		>
			<AppleMusic />
		</a>
		<a
			class="px-10 py-5 transition duration-500 hover:scale-150 hover:text-bhm-copper"
			href={amazonUrl}
			title="Amazon Music"
		>
			<Amazon />
		</a>
	</div>
</article>
