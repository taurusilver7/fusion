import "server-only";
import { Standing } from "@/types";
import moment from "moment";

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

	const standings: Standing[] = [];

	const leagues = [
		{ name: "EPL", id: 39 },
		{ name: "La Liga", id: 140 },
		{ name: "BundesLiga", id: 78 },
		{ name: "Serie A", id: 135 },
		{ name: "Liguel", id: 61 },
	];

	for (const league of leagues) {
		let url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${year}&league=${league.id}`;
		await fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				const standing = data.response[0];
				if (standing) {
					standings.push(standing);
				}
			})
			.catch((err) => {
				console.error(`Error fetching ${league.name} standing ${err}`);
			});
	}

	return standings;
}

export default getStandings;
