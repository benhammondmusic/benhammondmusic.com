import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const songlistItemsStore = writable();

export type ListType = "byArtist" | "bySong";

export const listViewStore: Writable<ListType> = writable("byArtist")