

import { MongoClient } from 'mongodb';
import { MONGODB_ATLAS_URL } from '$env/static/private';

const client = new MongoClient(MONGODB_ATLAS_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export async function get_songlist() {
	const db = client.db("bhm");
	const collection = db.collection("songlist");
	const items = collection.find().toArray();
	return items;
}

