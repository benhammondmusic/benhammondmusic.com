<script>
	// import NewTabArrow from '$lib/icons/NewTabArrow.svelte';
</script>

<footer class="bg-bhm-blue-800 p-5">
	<div>
		<div class="">
			<div class="">
				<a id="contact_section">&nbsp;</a>
				<!-- <div class="">Join the Mailing List</div> -->
			</div>
			<!-- Begin Mailchimp Signup Form -->
			<div id="mc_embed_signup">
				<form
					action="https://benhammondmusic.us6.list-manage.com/subscribe/post?u=24021f91024f3c0e90c50eaf3&amp;id=dc677a6554"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					class=""
				>
					<!-- above form need id="newsletter_form" ?? -->
					<div id="mc_embed_signup_scroll">
						<label for="mce-EMAIL">
							<p class="text-xs">Your Email Address:</p>
							<input
								type="email"
								value=""
								name="EMAIL"
								class="rounded-sm p-1 text-bhm-blue-900"
								id="mce-EMAIL"
								required={true}
							/>
						</label>
						<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div style="position: absolute; left: -5000px" aria-hidden="true">
							<input
								type="text"
								name="b_24021f91024f3c0e90c50eaf3_dc677a6554"
								tabindex="-1"
								value=""
							/>
						</div>

						<input
							type="submit"
							value="Join mailing list"
							name="subscribe"
							id="mc-embedded-subscribe"
							class="hover:bg-bhm-blue-400 hover:cursor-pointer rounded-sm px-5 py-1 bg-bhm-sky-600"
						/>
					</div>
				</form>
			</div>
			<!--End mc_embed_signup-->
		</div>

		<nav class="flex py-10">
			<div class="pr-20">
				<h3 class="text-2xl py-2">Listen</h3>
				<ul>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://open.spotify.com/artist/1q9zbsAcxs9fP7b9G8Y4Qk?si=GZE5O5EoSaCKM99kfeN79w"
							>Spotify</a
						>
					</li>
					<li>
						<a
							class="hover:text-bhm-sky"
							href="https://music.apple.com/us/artist/ben-hammond/164875823">Apple Music</a
						>
					</li>
					<li>
						<a class="hover:text-bhm-sky" href="https://www.youtube.com/benhammondmusicpage"
							>Youtube</a
						>
					</li>
					<li>
						<a class="hover:text-bhm-sky" href="https://www.amazon.com/Ben-Hammond/e/B001LH7NCY"
							>Amazon</a
						>
					</li>
					<li>
						<a class="hover:text-bhm-sky" href="https://deezer.page.link/WB4nhNoi7ZKLAniz7"
							>Deezer</a
						>
					</li>
				</ul>
			</div>

			<div class="pr-20">
				<div class="text-2xl py-2">Menu</div>
				<ul>
					<li><a class="hover:text-bhm-sky" href="index.html">Home</a></li>
					<li><a class="hover:text-bhm-sky" href="shows.html">Shows</a></li>
					<li><a class="hover:text-bhm-sky" href="music.html">Music</a></li>
					<li><a class="hover:text-bhm-sky" href="booking.html">Booking</a></li>
					<li><a class="hover:text-bhm-sky" href="contact.html">Contact</a></li>
				</ul>
			</div>

			<div class="pr-20">
				<div class="text-2xl py-2">More</div>
				<ul>
					<li><a class="hover:text-bhm-sky" href="https://blog.benhammond.tech">Tech Blog</a></li>
					<li>
						<a class="hover:text-bhm-sky" href="https://benhammond.tech">Developer Portfolio</a>
					</li>
					<li><a class="hover:text-bhm-sky" href="songlist.html">Song List</a></li>
					<li><a class="hover:text-bhm-sky" href="faq.html">FAQ</a></li>
					<li>
						<a class="hover:text-bhm-sky" href="mailto:hello@benhammondmusic.com">Email Me</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div>
		<span>
			<a class="hover:text-bhm-sky" href="https://benhammond.tech">benhammond.tech</a> ©
			<span id="currentYear">2023</span>
			<script>
				document.getElementById('currentYear').innerHTML = new Date().getFullYear();
			</script>
		</span>
	</div>
</footer>
