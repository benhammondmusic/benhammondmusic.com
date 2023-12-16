import { json, type RequestHandler } from '@sveltejs/kit'
import { start_mongo } from "$db/mongo";


export const GET: RequestHandler = async () => {
	start_mongo().then(() => {
		console.log('Mongo connected!');
	}).catch(e => { console.error(e) })

	return json({ "status": 200, "data": "ok" });

}


