<script>
	// import NewTabArrow from '$lib/icons/NewTabArrow.svelte';
	import MailingListForm from '$lib/Components/MailingListForm.svelte';
	import LinkArrow from '$lib/Components/LinkArrow.svelte';
</script>

<footer class="bg-bhm-blue-800 w-full ">
	<section
		class="w-full bg-cover bg-center h-48 sm:h-56 md:h-72 lg:h-[24rem] xl:h-[32rem] 2xl:h-[40rem] flex flex-col items-end justify-end lg:justify-center"
		style="background-image: url(/images/BenSkyline.jpg)"
	>
		<div>
			<MailingListForm />
		</div>
	</section>
	<div class="p-10">
		<nav class="flex py-10">
			<div class="pr-20">
				<div class="text-2xl py-2">Menu</div>
				<ul>
					<li><a class="hover:text-bhm-sky" href="/">Home</a></li>
					<li><a class="hover:text-bhm-sky" href="/music">Music</a></li>
					<li><a class="hover:text-bhm-sky" href="/booking">Booking</a></li>
				</ul>
			</div>

			<div class="pr-20">
				<h3 class="text-2xl py-2">Listen</h3>
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
						<a class="hover:text-bhm-sky" href="https://www.youtube.com/benhammondmusicpage"
							>Youtube<LinkArrow /></a
						>
					</li>
				</ul>
			</div>

			<div class="pr-20">
				<div class="text-2xl py-2">More</div>
				<ul>
					<li>
						<a class="hover:text-bhm-sky" href="https://blog.benhammond.tech"
							>Tech Blog<LinkArrow /></a
						>
					</li>
					<li>
						<a class="hover:text-bhm-sky" href="https://benhammond.tech"
							>Developer Portfolio<LinkArrow /></a
						>
					</li>
					<li>
						<a class="hover:text-bhm-sky" href="mailto:hello@benhammondmusic.com">Email Me</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="p-5">
		<span>
			<a class="hover:text-bhm-sky" href="https://benhammond.tech">benhammond.tech</a> ©
			<span id="currentYear">2023</span>
			<script>
				document.getElementById('currentYear').innerHTML = new Date().getFullYear();
			</script>
		</span>
	</div>
</footer>
