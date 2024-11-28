# BenHammondMusic (SvelteKit)

[![Netlify Status](https://api.netlify.com/api/v1/badges/94c78b60-60ad-43a3-b858-77ff688e9ba5/deploy-status)](https://app.netlify.com/sites/benhammondmusicdotcom/deploys)

Codebase for [benhammondmusic.com](https://benhammondmusic.com), Songbuilder && Developer in Denver, CO.

![extra](https://user-images.githubusercontent.com/41567007/148659609-62e761b9-4c78-44a9-8668-bfdd0295933b.jpg)

## TO DO

- [x] LAUNCH!
- [x] add links in Nav and Footer to `/songlist`
- [x] get songlist display working for by artist and by song title
- [x] get songlist search function working
- [x] get data-viz playground page production ready
- [x] link from footer nav (probably not header nav)
- [ ] delay CountUp until on screen (not on load)
- [ ] make NowPlaying component full screen on smaller widths
- [ ] add "USES" page, music equipment, instruments, software/apps/tools/ add links for private consultation
- [ ] add other musicians mini-bios, links etc
- [ ] add lyrics for original songs? chord charts?
- [ ] add unit tests for helper functions
- [ ] add e2e playwright tests for some routes
- [x] add shows widget from BandsInTown

## BHM - Design Guide

### Why rebuild benhammondmusic.com ?

- I kept hearing great things about Svelte and Sveltekit and wanted to mess around with it in a low-stakes way
- My music site was built with simple hard-coded HTML and CSS, along with double-scoops of copy-pasted jQuery plugins; since I'm using React daily in [my work](https://healthequitytracker.org) it's painful and annoying to go back to a componentless structure
- I was already able to save myself $12 a month simply moving my site from Hostgator to Netlify (and using a real CI/CD process via GitHub/Netlify instead of just dumping raw files onto the server via FTP like I've done since 2005)
- My career transition from full-time musician to full-time software engineer has given me the space to slow down on gig promotion, and some flexibility in disrupting my website / online presence

### COLORS

These are the base-colors used to generate tailwind color pallettes via [tailwindshades.com](https://www.tailwindshades.com/)

- bhm-rust: #c87136
- bhm-sky: #8899bb
- bhm-gray: #343a40
- bhm-blue: #336699

### VOICE

- 1st person, conversational but professional

From [benhammondmusic.tech](https://benhammondmusic.tech)
