/*
import { MongoClient, ServerApiVersion } from 'mongodb'
import { MONGODB_ATLAS_PASSWORD } from '$env/static/private';


const uri = `mongodb+srv://benjaminhammond:${MONGODB_ATLAS_PASSWORD}@cluster0.pezuhtt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

export async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}

 */

import { MongoClient } from 'mongodb';
import { MONGODB_ATLAS_URL } from '$env/static/private';

const client = new MongoClient(MONGODB_ATLAS_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()