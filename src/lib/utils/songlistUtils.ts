
type Key =0 | 1 | 2 | 3 | 4 |5 |6 |7 |8 |9|10|11
type Mode=0|1


export interface Song {
	name: string, 
	popularity: number,
	era: string,
	artists: string[],
	danceability: number,
	energy: number,
	key: Key,
	mode: Mode,
	speechiness: number,
	acousticness: number,
	instrumentalness: number,
	liveness: number,
	valence: number,
	tempo: number,
	id: string,
	duration_ms: number,
	time_signature: number,
	album: {release_date: string}
}

export type Feature = keyof Song


const keyMap: Record<Key, string> = {
			0: "C",
			1: "C♯",
			2: "D",
			3: "E♭",
			4: "E",
			5: "F",
			6: "F♯",
			7: "G",
			8: "A♭",
			9: "A",
			10: "B♭",
			11: "B",
		};

		const modeMap: Record<Mode, string> = {
			0: "Major",
			1: "minor",
		};

		export type ValueCount = {
			"value": string,
			"count": number
		}

	export function getArtistCounts(data: Song[]){

		const allArtists = data
		.map((song)=>song.artists).flat()

		const valueCounts: ValueCount[] = []
	
		allArtists.forEach((artist)=>{
			const artistCount = valueCounts.find((artistCount)=>artistCount.value === artist)

		

			if (artistCount) {
				artistCount.count += 1
			} 
			else {
				valueCounts.push({
					value: artist,
					count: 1
				})
			}

		})


		return valueCounts.filter((artistCount)=>artistCount.count > 4).sort((a,b)=>b.count - a.count)


		
	}

		

	export function getKeySigsCounts(data: Song[]) {

		const keySigCounts: {[keySig:string]: number} ={}

		for (const song of data) {
			const keySig = `${keyMap[song.key]} ${modeMap[song.mode]}`;
			keySigCounts[keySig] = keySigCounts[keySig] ? keySigCounts[keySig] + 1 : 1;
		}

		return keySigCounts
	}


	export function getMostCommonKeySigs(data: Song[]) {

		const keySigCounts = getKeySigsCounts(data)

		for (const song of data) {
			const keySig = `${keyMap[song.key]} ${modeMap[song.mode]}`;
			keySigCounts[keySig] = keySigCounts[keySig] ? keySigCounts[keySig] + 1 : 1;
		}

		const highestCount = Math.max(...(Object.values(keySigCounts) as number[]));

		const mostCommonKeySigs = Object.entries(keySigCounts)
			.filter(([, count]) => count === highestCount)
			.map(([keySig,]) => keySig);

		return mostCommonKeySigs;
	}

	export function getAverageOfProperty(data: Song[], feature: Feature) {

		const preciseAverage = data.map((song) => song[feature] as number).reduce((a, b) => a + b) / data.length;
		return Math.round(preciseAverage * 100) / 100;
	}

	export function asPct(floatVal: number) {
		return Math.round(floatVal * 100) + "%";
	}



	export function getLowestItems(data: Song[]){
		const sortedData = data.sort((a,b)=> a.popularity - b.popularity).map((song)=>`${song.name} by ${song.artists.join(", ")}`)

		return sortedData
	}



		// let song: any;
	// let yearDistribution: any = [];

	// async function getPlayListYears() {
	// 	const fetchedYearList = await fetch(`${PUBLIC_BASE_URL}/api/songlist-metadata`).then((res) =>
	// 		res.json(),
	// 	);

	// 	const yearsScaffold = Array.from({ length: 75 }, (_, i) => i + 1950);

	// 	yearsScaffold.forEach((year: number) => {
	// 		const count = fetchedYearList.data.filter(
	// 			(fetchedYear: string) => parseInt(fetchedYear) === year,
	// 		).length;
	// 		yearDistribution.push({
	// 			year,
	// 			count,
	// 		});
	// 	});
	// }