import { Standing } from "@/types";
import moment from "moment";
import React from "react";

async function getStandings(): Promise<Standing[]> {
	const currentTime = moment();
	const month = currentTime.month();
	let year;

	if (month < 6) {
		year = currentTime.year() - 1;
	} else {
		year = currentTime.year();
	}

	const API_KEY: string = process.env.API_KEY as string;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": API_KEY,
			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	};
}

export default getStandings;
