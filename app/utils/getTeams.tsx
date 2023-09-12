import "server-only";
import { Standing, Team } from "@/types";
import getStandings from "./getStandings";

export default async function getTeams(): Promise<Team[]> {
	try {
		const standings: Standing[] = await getStandings();
		// const standings: Standing[] = getStandingsSample();

		const teams: Team[] = [];

		for (const league of standings) {
			for (const standing of league.league.standings) {
				if (Array.isArray(standing)) {
					for (const team of standing) {
						teams.push(team);
					}
				} else {
					console.log("Invalid standing data!");
					throw Error;
				}
			}
		}

		return teams;
	} catch (error) {
		console.error("Fetching teams failed", error);
		throw error;
	}
}
