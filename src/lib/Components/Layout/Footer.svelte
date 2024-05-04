<script>
import LinkArrow from "$lib/Components/LinkArrow.svelte";
// import NewTabArrow from '$lib/icons/NewTabArrow.svelte';
import MailingListForm from "$lib/Components/MailingListForm.svelte";
import EmailIcon from "../EmailIcon.svelte";
import RecentlyPlayed from "../RecentlyPlayed.svelte";
</script>

<footer class=" w-full bg-bhm-blue-800 pb-20">
	<!-- lg:h-[24rem] lg:justify-center xl:h-[32rem] 2xl:h-[40rem] -->
	<section
		class="xs:h-48 md:h-92 mx-auto flex h-32 w-full max-w-7xl flex-col items-end justify-end bg-contain bg-top bg-no-repeat sm:h-56 lg:h-[28rem]"
		style="background-image: url(/images/BenSkyline.jpg)"
	>
		<div>
			<MailingListForm />
		</div>
	</section>

	<RecentlyPlayed />

	<div class="mx-auto w-full max-w-7xl">
		<nav
			class="grid grid-cols-1 justify-between px-10 py-10 pb-10 [@media(min-width:320px)]:grid-cols-3"
		>
			<div class="py-2">
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
					<li>
						<a
							class="hover:text-bhm-sky"
							href="/songlist">Songlist</a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="/playground">Playground</a
						>
					</li>
				</ul>
			</div>

			<div class="py-2">
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

			<div class="py-2">
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
							href="https://benhammond.tech">Dev Portfolio<LinkArrow /></a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="mailto:hello@benhammondmusic.com">Email Me<EmailIcon /></a
						>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="mx-auto flex w-full max-w-7xl justify-center p-5 sm:justify-start">
		<p>
			<span>
				<a
					class="hover:text-bhm-sky"
					href="https://benhammond.tech">benhammond.tech</a
				>
				©
				<span id="currentYear">2023</span>
				<script>
					document.getElementById("currentYear").innerHTML = new Date().getFullYear();
				</script>
				-
				<a
					class="hover:text-bhm-sky"
					href="https://github.com/benhammondmusic/benhammondmusic.com">Edit on GitHub</a
				>
			</span>
		</p>
	</div>
</footer>
