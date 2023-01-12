<script>
	import AlbumItem from "$lib/Components/AlbumItem.svelte";
</script>

<svelte:head>
	<title>Ben Hammond - Original Music</title>
</svelte:head>

<h2 class="text-3xl">Music</h2>
<h3 class="text-xl">Originals, Covers and More!</h3>

<section
	class="grid grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-2 2xl:grid-cols-4"
>
	<AlbumItem
		title="Gone (To California)"
		subtitle="Video and Single - 2017"
		src="/images/albumcovers/gone.jpg"
		spotifyUrl="https://open.spotify.com/album/0wO71kn47uK9AA5J4NqbN9"
		appleMusicUrl="https://music.apple.com/us/album/gone-to-california-single/1231607849"
		amazonUrl="https://www.amazon.com/dp/B071YQK9BL/ref=ap_ws_tlw_trk2"
	>
		<p>
			Featuring <a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://www.johnpatti.com">John Patti</a
			>. Video by
			<a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://joey-durango.com/">Joey Durango</a
			>. Song by Matt Gerhardt.
		</p>
	</AlbumItem>

	<AlbumItem
		title="Friction"
		subtitle="Studio Album - 2014"
		src="/images/albumcovers/friction.jpg"
		spotifyUrl="https://open.spotify.com/album/0wO71kn47uK9AA5J4NqbN9"
		appleMusicUrl="https://music.apple.com/us/album/friction/920576506"
		amazonUrl="https://www.amazon.com/Friction-Ben-Hammond/dp/B00NP82T0I/"
	>
		<p>
			Co-Produced with <a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://www.instagram.com/matthewfrostmusic/?hl=en">Matt Frost</a
			>. Full Band Originals and Solo, Live-Looped Covers ft.
			<a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://www.youtube.com/user/kindredsheeler/videos">Kindred</a
			> and many more.
		</p>
	</AlbumItem>

	<AlbumItem
		title="Solo at Stone Mt Arts Center"
		subtitle="Live Album and DVD - 2011"
		src="/images/albumcovers/solo.jpg"
		spotifyUrl="https://open.spotify.com/album/3DTF0fum9uhqGxOS2czdaf"
		appleMusicUrl="https://music.apple.com/us/album/solo-at-stone-mt-arts-center/417555127"
		amazonUrl="https://www.amazon.com/Solo-Stone-Mt-Arts-Center/dp/B004MFOCQW/"
	>
		<p>
			Recorded live, minutes from Ben's hometown in rural Maine. Features solo originals and cover
			songs. Video by Michael Dana.
		</p>
	</AlbumItem>

	<AlbumItem
		title="[Reasonably] Honest"
		subtitle="Studio Album - 2008"
		src="/images/albumcovers/reasonablyhonest.jpg"
		spotifyUrl="https://open.spotify.com/album/4P8v3P5so2Re7e2JcvuluA"
		appleMusicUrl="https://music.apple.com/us/album/reasonably-honest-extended-edition/350749973"
		amazonUrl="https://www.amazon.com/Reasonably-Honest-Ben-Hammond/dp/B0038AN416/"
	>
		<p>
			Co-Produced with <a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://mojitomastering.com/">Reuben Ghose</a
			>. Original songs ft.
			<a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://www.zachfinkelstein.com/">Zach Finkelstein</a
			>,
			<a
				class="text-bhm-copper-300 hover:bg-bhm-copper-700 hover:text-white"
				href="https://www.jonathanlindhorst.com/">Jon Lindhorst</a
			>, and more.
		</p>
	</AlbumItem>
</section>
