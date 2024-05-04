import { get_songlist, start_mongo } from "$db/mongo";
import { type RequestHandler, json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	return start_mongo()
		.then(() => {
			console.log("Mongo connected!");
			return get_songlist().then((items) => {
				return json({ status: 200, data: items });
			});
		})
		.catch((e) => {
			console.error(e);
			return json({ status: 500, data: e });
		});
};
