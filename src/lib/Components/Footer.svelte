<script>
	// import NewTabArrow from '$lib/icons/NewTabArrow.svelte';
	import MailingListForm from "$lib/Components/MailingListForm.svelte";
	import LinkArrow from "$lib/Components/LinkArrow.svelte";
	import RecentlyPlayed from "./RecentlyPlayed.svelte";
</script>

<footer class="mb-20 w-full bg-bhm-blue-800">
	<section
		class="flex h-48 w-full flex-col items-end justify-end bg-cover bg-center sm:h-56 md:h-72 lg:h-[24rem] lg:justify-center xl:h-[32rem] 2xl:h-[40rem]"
		style="background-image: url(/images/BenSkyline.jpg)"
	>
		<div>
			<MailingListForm />
		</div>
	</section>

	<RecentlyPlayed />

	<div class="p-10">
		<nav class="flex py-10">
			<div class="pr-20">
				<div class="py-2 text-2xl">Menu</div>
				<ul>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="/">Home</a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="/music">Music</a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="/booking">Booking</a
						>
					</li>
				</ul>
			</div>

			<div class="pr-20">
				<h3 class="py-2 text-2xl">Listen</h3>
				<ul>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://open.spotify.com/artist/1q9zbsAcxs9fP7b9G8Y4Qk?si=GZE5O5EoSaCKM99kfeN79w"
							>Spotify<LinkArrow /></a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://music.apple.com/us/artist/ben-hammond/164875823"
							>Apple Music<LinkArrow /></a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://www.youtube.com/benhammondmusicpage">Youtube<LinkArrow /></a
						>
					</li>
				</ul>
			</div>

			<div class="pr-20">
				<div class="py-2 text-2xl">More</div>
				<ul>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://blog.benhammond.tech">Tech Blog<LinkArrow /></a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://benhammond.tech">Developer Portfolio<LinkArrow /></a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="mailto:hello@benhammondmusic.com">Email Me</a
						>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="p-5">
		<span>
			<a
				class="hover:text-bhm-sky"
				href="https://benhammond.tech">benhammond.tech</a
			>
			©
			<span id="currentYear">2023</span>
			<script>
				document.getElementById("currentYear").innerHTML = new Date().getFullYear();
			</script>.
			<a
				class="hover:text-bhm-sky"
				href="https://github.com/benhammondmusic/benhammondmusic.com">Edit on GitHub</a
			>
		</span>
	</div>
</footer>
