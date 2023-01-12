<script lang="ts">
	export let title: string = "";
	export let subtitle: string = "";
	export let src: string;
	export let spotifyUrl: string;
	export let appleMusicUrl: string;
	export let amazonUrl: string;
</script>

<article class="flex flex-col items-center">
	<img
		alt="album cover"
		{src}
	/>
	<div class="max-w-xs">
		<h3>{title}</h3>
		<span>{subtitle}</span>
		<slot />
		<span>
			<a
				href={spotifyUrl}
				title="Spotify"
				><i
					class="fa fa-spotify"
					aria-hidden="true"
				/></a
			>
			<a
				href={appleMusicUrl}
				title="Apple Music"
				><i
					class="fa fa-apple"
					aria-hidden="true"
				/></a
			>
			<a
				href={amazonUrl}
				title="Amazon Music"
				><i
					class="fa fa-amazon"
					aria-hidden="true"
				/></a
			>
		</span>
	</div>
</article>
