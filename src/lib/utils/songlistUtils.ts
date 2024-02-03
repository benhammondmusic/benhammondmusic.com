// import { PUBLIC_BASE_URL } from "$env/static/public";

type Key = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type Mode = 0 | 1;

export interface Artist {
	name: string;
	id: string;
	genres: string[];
}

export interface Album {
	release_date: string;
}

export interface Song {
	name: string;
	popularity: number;
	era: string;
	artists: Artist[];
	danceability: number;
	energy: number;
	key: Key;
	mode: Mode;
	acousticness: number;
	valence: number;
	tempo: number;
	id: string;
	time_signature: number;
	album: Album;
}

export type Feature = keyof Song;

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
	value: string;
	count: number;
};

function getAllArtists(data: Song[]) {
	return data
		.map((song) => song.artists.map((artist) => artist.name))
		.flat()
		.map((artist) => artist.split(" And The ")[0]);
}

export function getArtistCounts(data: Song[]) {
	const allArtists = getAllArtists(data);
	const valueCounts: ValueCount[] = [];
	allArtists.forEach((artist) => {
		const artistCount = valueCounts.find((artistCount) => artistCount.value === artist);
		if (artistCount) {
			artistCount.count += 1;
		} else {
			valueCounts.push({
				value: artist,
				count: 1,
			});
		}
	});
	return valueCounts
		.filter((artistCount) => artistCount.count > 1)
		.sort((a, b) => b.count - a.count);
}

export function getGenreCounts(data: Song[]) {
	const allGenres = data
		.map((song: Song) => song.artists)
		.flat()
		.map((artist: Artist) => artist.genres)
		.flat();
	const valueCounts: ValueCount[] = [];
	allGenres.forEach((genre: string) => {
		const genreCount = valueCounts.find((genreCount) => genreCount.value === genre);
		if (genreCount) {
			genreCount.count += 1;
		} else {
			valueCounts.push({
				value: genre,
				count: 1,
			});
		}
	});
	return valueCounts.filter((genreCount) => genreCount.count > 1).sort((a, b) => b.count - a.count);
}

export function getKeySigsCounts(data: Song[]) {
	const keySigCounts: { [keySig: string]: number } = {};
	for (const song of data) {
		const keySig = `${keyMap[song.key]} ${modeMap[song.mode]}`;
		keySigCounts[keySig] = keySigCounts[keySig] ? keySigCounts[keySig] + 1 : 1;
	}
	return keySigCounts;
}

export function getMostCommonKeySigs(data: Song[]) {
	const keySigCounts = getKeySigsCounts(data);
	for (const song of data) {
		const keySig = `${keyMap[song.key]} ${modeMap[song.mode]}`;
		keySigCounts[keySig] = keySigCounts[keySig] ? keySigCounts[keySig] + 1 : 1;
	}
	const highestCount = Math.max(...(Object.values(keySigCounts) as number[]));
	const mostCommonKeySigs = Object.entries(keySigCounts)
		.filter(([, count]) => count === highestCount)
		.map(([keySig]) => keySig);
	return mostCommonKeySigs;
}

export function getAverageOfProperty(data: Song[], feature: Feature) {
	const preciseAverage =
		data.map((song) => song[feature] as number).reduce((a, b) => a + b) / data.length;
	return Math.round(preciseAverage * 100) / 100;
}
export function asPct(floatVal: number) {
	return Math.round(floatVal * 100) + "%";
}

export function getLowestItems(data: Song[]) {
	const sortedData = data
		.sort((a, b) => a.popularity - b.popularity)
		.map((song) => `${song.name} by ${song.artists.join(", ")}`);
	return sortedData;
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

export function getEra(release_date: string) {
	const year: number = parseInt(release_date.substring(0, 4));
	if (year < 1960) return "Early 20th Century";
	if (year < 1970) return "60's";
	if (year < 1980) return "70's";
	if (year < 1990) return "80's";
	if (year < 2000) return "90's";
	if (year < 2010) return "2000's";
	return "2010's and Today";
}

export function roundNearestIncrementOfN(x: number, n?: number) {
	n = n || 5;
	return Math.ceil(x / n) * n;
}

export const tempoMarkings: [number, string][] = [
	[50, "Lento"],
	[73, "Adagio"],
	[86, "Andante"],
	[109, "Moderato"],
	[132, "Allegro"],
	[150, "Vivace"],
	[180, "Presto"],
	[220, "Prestissimo"],
];

export function getTempoBucket(tempo: number) {
	for (const [maxTempo, bucket] of tempoMarkings) {
		if (tempo <= maxTempo) return bucket;
	}
	return "Weird Tempo";
}

export function getTempoDistributions(songs: Song[]) {
	const tempoDistributions: Record<string, number> = { Lento: 0 };

	for (const song of songs) {
		const tempoBucket = getTempoBucket(song.tempo);
		if (tempoDistributions[tempoBucket]) {
			tempoDistributions[tempoBucket] += 1;
		} else {
			tempoDistributions[tempoBucket] = 1;
		}
	}
	return tempoDistributions;
}

export function getDurationFromBpm(bpm: number | string) {
	if (typeof bpm === "string") return 60 / parseInt(bpm);

	return 60 / bpm;
}
