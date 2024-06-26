<script lang="ts">
import { arc, interpolatePlasma, pie, quantize } from "d3";

export let data;
const width = 1000; // the outer width of the chart, in pixels
const height = width + 200; // the outer height of the chart, in pixels
const percent = false; // format values as percentages (true/false)
const fontSize = 10; // the font size of the x and y values
const strokeWidth = 0.1; // the width of stroke separating wedges
const strokeLinejoin = "round"; // line join style of stroke separating wedges
const outerRadius = Math.min(width, height) * 0.5 - 280; // the outer radius of the circle, in pixels
const innerRadius = 100; // the inner radius of the chart, in pixels
const labelPosition = 2; // the position of the label offset from center
const labelRadius = innerRadius * labelPosition + outerRadius * 0.3; // center radius of labels
const strokeColorWOR = "white"; //stroke color when inner radius is greater than 0
const strokeColorWIR = "yellow"; //stroke color when inner radius is 0
const stroke = innerRadius > 0 ? strokeColorWIR : strokeColorWOR; // stroke separating widths
const padAngle = 5 / outerRadius; // angular separation between wedges

const x = Object.keys(data[0])[0]; // given d in data, returns the (ordinal) x-value
const y = Object.keys(data[0])[1]; // given d in data, returns the (quantitative) y-value
const xVals = data.map((el: { [x: string]: any }) => el[x]);
let yVals = data.map((el: { [x: string]: any }) => Number(el[y]));
if (percent) {
	const total = yVals.reduce((a: any, b: any) => a + b, 0);
	yVals = yVals.map((el: number) => el / total);
}
const iVals = data.map((el: any, i: any) => i);

// colors can be adjusted manually by creating a color array which length matches length of data set.
let colors: any[] = quantize(
	(t) => interpolatePlasma(t * 0.7 + 0.3),
	xVals.length,
);

// let artist = "";

$: selectedArtist = "";

const wedges: any[] = pie()
	.padAngle(padAngle)
	.sort(null)
	.value((i) => yVals[i as number])(iVals);

const arcPath = arc().innerRadius(innerRadius).outerRadius(outerRadius);

const arcLabel = arc().innerRadius(labelRadius).outerRadius(labelRadius);

function handleArtistClick(eTarget: EventTarget | null) {
	const targetEl = eTarget as HTMLElement;
	selectedArtist = targetEl.textContent ?? "";
}
</script>

<b>{selectedArtist}</b>

<svg
	{width}
	{height}
	viewBox="{-width / 2} {-height / 2} {width} {height}"
>
	{#each wedges as wedge, i}
		{@const wedgeAngle = (wedge.startAngle + wedge.endAngle) / 2}

		<path
			fill={colors[i]}
			d={arcPath(wedge)}
			{stroke}
			stroke-width={strokeWidth}
			stroke-linejoin={strokeLinejoin}
		/>
		<g
			text-anchor={wedge.startAngle < Math.PI ? "start" : "end"}
			transform="translate({arcLabel.centroid(wedge)})"
		>
			<text
				on:click={(e) => handleArtistClick(e.target)}
				on:keydown={(e) => handleArtistClick(e.target)}
				transform={wedge.startAngle < Math.PI
					? `rotate(${(wedgeAngle / 2 / Math.PI) * 360 - 90})`
					: `rotate(${(wedgeAngle / 2 / Math.PI) * 360 + 90})`}
				font-size={yVals[i] / 1.5 + fontSize}
				fill="white"
			>
				<tspan font-weight="bold">{xVals[i]}</tspan>
			</text>
		</g>
	{/each}
	<g
		fill="#fff"
		transform="matrix(.02 0 0 -.02 -75 25)"
		><path
			d="m2400 3685v-1165h60 60v1105 1105h28c27 0 31-9 401-927 205-511 377-932 382-937 5-6 9 413 9 987v997h-60-60l-2-689-3-690-204 507c-113 279-238 589-279 690l-74 182h-129-129z"
		/><path
			d="m3400 3744v-1105l-26 3c-26 3-44 46-395 918-203 503-373 924-378 935-6 13-10-343-10-977l-1-998h60 60l2 680 3 680 274-680 274-680h129 128v1165 1165h-60-60z"
		/><path
			d="m50 4781v-61h258c293 0 363-10 450-62 84-51 134-125 168-249 23-81 26-345 5-429-31-124-116-249-192-280-16-7-29-15-29-19s16-15 36-26c86-46 153-145 185-275 9-35 14-111 14-210 0-165-13-238-57-330-44-90-143-165-250-190-24-5-166-10-315-10h-273v-60-60h283c312 0 361 7 468 61 84 42 153 113 194 202 53 112 67 176 72 342 8 230-22 371-104 493l-42 63 35 49c86 120 118 263 111 494-5 182-24 268-82 371-36 65-120 152-175 180-109 56-125 59-452 63l-308 4z"
		/><path d="m1230 3680v-1160h485 485v60 60h-425-425v1040 1040h425 425v60 60h-485-485z" /><path
			d="m50 3680v-980h60 60v980 980h-60-60z"
		/><path
			d="m230 4186v-476h158c177 0 255 11 322 45 123 63 175 190 174 435 0 256-60 382-210 440-52 20-82 24-251 28l-193 4zm392 334c44-13 102-74 119-127 20-65 23-310 5-384-34-133-90-169-272-177l-124-5v352 351h118c64 0 133-5 154-10z"
		/><path d="m1420 4185v-475h390 390v60 60h-330-330v350 350h330 330v65 65h-390-390z" /><path
			d="m230 3175v-477l193 4c224 6 270 16 342 80 86 76 120 186 119 393 0 260-61 387-214 447-47 18-82 22-247 26l-193 4zm399 329c50-21 76-48 103-107 21-48 23-65 23-227 0-168-1-177-26-231-44-94-104-119-285-119h-94v357 356l121-7c70-4 137-13 158-22z"
		/><path
			d="m1420 3175v-475h390 390v60 60h-330-330v350 350l328 2 327 3 3 63 3 62h-391-390z"
		/><path
			d="m6650 2419c-221-19-377-160-442-398-18-65-22-112-26-338l-4-262-48-3-49-3 122-202c67-111 126-201 132-199 5 1 65 93 132 204l123 202h-55-55v168c0 300 24 418 96 482 45 39 103 54 187 47 81-7 121-28 159-82 49-71 58-134 58-402 0-134 3-243 8-243 4 0 31 41 60 90l52 89v158c0 233-25 324-111 418-63 68-122 89-254 90-98 0-116-3-166-26-64-30-120-84-148-143-45-93-53-149-58-433l-6-272 52-3 51-3-61-100c-34-55-63-101-64-103-2-2-114 180-123 200-2 5 17 8 41 8h45l4 288c4 281 4 288 31 365 31 90 60 138 113 189 112 107 336 134 490 58 161-79 234-250 234-551v-129l58-93 57-92 3 215c3 238-7 344-44 461-35 110-93 192-183 257-114 81-227 106-411 91z"
		/><path
			d="m7440 1265v-1165h60 60v1100 1100h29c27 0 32-6 59-72 16-40 184-455 372-923 188-467 346-854 351-859 5-6 9 394 9 987v997h-60-60l-2-691-3-691-106 263c-58 145-184 456-279 692l-172 427h-129-129z"
		/><path
			d="m8440 1324v-1105l-27 3c-25 3-42 42-400 928-205 509-375 930-377 935-2 6-5-439-5-987l-1-998h60 60v683l1 682 85-210c47-115 171-423 276-683l190-472h129 129v1165 1165h-60-60z"
		/><path d="m70 1260v-1160h60 60v1160 1160h-60-60z" /><path
			d="m260 1855v-565h340 340v565 565h-60-60v-505-505h-220-220v505 505h-60-60z"
		/><path d="m1000 1260v-1160h65 65v1160 1160h-65-65z" /><path
			d="m1926 2403c-2-10-122-526-266-1148-144-621-263-1138-266-1147-5-16 2-18 58-18h63l234 1013c129 556 243 1049 254 1095 18 79 20 82 47 82 25 0 31-5 39-37 6-21 116-497 246-1058s240-1037 246-1057l10-38h59c41 0 60 4 60 13 0 6-120 531-267 1165l-267 1152h-122c-108 0-123-2-128-17z"
		/><path
			d="m2840 1260v-1160h60 60v1101 1100l27-3c27-3 28-6 303-960 151-527 277-958 280-958s129 432 280 960l275 960h28 27v-1100-1100h60 60v1160 1160h-135-134l-11-37c-6-21-109-382-229-803-121-421-222-758-225-750-6 15-456 1580-456 1587 0 2-61 3-135 3h-135z"
		/><path
			d="m4530 1260v-1160h60 60v1100 1100h28 27l274-953c150-523 277-956 282-961 4-5 11 2 14 15s126 445 274 959c266 931 267 935 294 938l27 3v-1100-1101h60 60v1160 1160h-134-134l-228-804c-126-442-230-803-231-802s-97 333-213 736c-116 404-220 765-231 803l-20 67h-134-135z"
		/><path
			d="m8780 2361v-61h248c136 0 275-5 310-10 194-32 304-136 359-340 16-59 18-124 18-695 0-583-1-635-19-700-52-197-166-303-358-335-35-5-174-10-310-10h-248v-60-60h253c138 0 284 5 322 10 276 39 438 220 475 530 14 115 13 1140-1 1255-32 265-157 437-368 507-61 20-91 22-373 26l-308 4z"
		/><path d="m8780 1255v-975h60 60v975 975h-60-60z" /><path
			d="m8960 1255v-977l208 4c186 4 213 6 264 26 106 42 172 133 203 279 22 105 22 1232-1 1340-28 138-81 216-182 265l-66 33-213 3-213 3zm438 832c43-23 89-88 110-156 15-50 17-117 17-676 0-686 0-683-65-773-48-67-74-75-237-80l-143-4v857 857l143-4c110-3 149-8 175-21z"
		/><path
			d="m1911 1522c-74-317-136-583-139-589-3-10 56-13 278-13 263 0 281 1 276 18-7 22-266 1150-266 1157 0 3-3 5-7 5-5 0-68-260-142-578zm258-454c1-16-11-18-119-18-66 0-120 3-120 6 0 8 98 430 112 479 10 39 12 32 69-205 32-135 58-253 58-262z"
		/><path
			d="m3020 1057v-957h60 60l2 531 3 531 144-499c79-274 148-513 153-531l9-32h118 118l93 322c51 178 122 420 156 538l63 215v-537l1-538h60 60v957c0 561-4 953-9 947-5-5-127-424-272-931-145-508-266-923-269-923s-124 415-269 923c-145 507-268 926-272 932-5 5-9-415-9-948z"
		/><path
			d="m4710 1055v-955h60 60l2 535 3 535 154-535 155-535h117 117l16 53c9 28 77 267 153 529l138 477 3-529 2-530h60 60v957c0 526-3 953-7 949s-127-427-274-939l-266-932-15 50c-8 28-129 449-269 937s-257 888-261 888c-5 0-8-430-8-955z"
		/><path
			d="m7011 1221c-66-110-121-202-121-205s21-6 46-6h46l-4-208-3-207-33-68c-27-54-42-72-79-94-40-23-57-27-127-27-133 0-188 41-228 166-15 49-21 106-26 261l-7 198-59-96-58-96 6-102c12-180 41-277 106-351 128-146 431-134 544 22 69 94 79 147 84 420l4 242h-46-45l60 100c33 55 64 100 68 100s35-45 69-100l61-100h-48-49l-5-232c-4-177-9-248-22-293-40-143-113-236-225-289-61-29-72-31-185-31-114 0-123 2-187 32-164 77-234 211-245 468l-5 130-56 95c-69 115-66 122-59-170 5-231 17-292 74-407 60-124 201-235 331-262 76-16 228-14 297 4 146 37 267 133 328 258 55 113 69 192 74 425l6 212h48c27 0 49 2 49 5 0 10-244 405-250 405-4 0-62-90-129-199z"
		/><path d="m260 665v-565h60 60v505 505h220 220v-505-505h60 60v565 565h-340-340z" /><path
			d="m1755 848c-2-7-41-170-85-363-45-192-83-360-87-373-5-21-3-22 59-22h65l74 325 74 325h198c108 0 197-2 197-5 0-7 139-604 146-627 4-15 17-18 65-18 32 0 59 3 59 8 0 4-39 177-87 385l-87 377h-293c-226 0-295-3-298-12z"
		/></g
	><g
		><text
			font-size={18}
			fill="white"
			transform="matrix(1 0 0 1 -70 50)">artists with multiple songs</text
		>
		<text
			font-size={18}
			fill="white"
			transform="matrix(1 0 0 1 -70 65)">in my repertoire</text
		>
	</g>
</svg>
