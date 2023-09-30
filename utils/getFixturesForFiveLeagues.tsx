import { AllFixtures } from "@/types";
import getFixtures from "./getFixtures";
import moment from "moment";

export default async function getFixturesForFiveLeagues(): Promise<
	AllFixtures[]
> {
	try {
		const allFixturesByLeague = await getFixtures();

		const fixtureForFiveLeagues: AllFixtures[] = [];

		for (const league of allFixturesByLeague) {
			if (
				league.name === "EPL" ||
				league.name === "La Liga" ||
				league.name === "Serie A" ||
				league.name === "Ligue 1"
			) {
				fixtureForFiveLeagues.push(league);
			}
		}

		const filteredFixtures: AllFixtures[] = fixtureForFiveLeagues.filter(
			(league) => {
				league.fixtures = league.fixtures
					.filter((fixture) => {
						return moment(fixture.fixture.date).isAfter(
							moment().subtract(1, "day"),
							"day"
						);
					})
					.slice(0, 5);
				return league.fixtures.length > 0;
			}
		);
		return filteredFixtures;
	} catch (error: any) {
		console.error("Error occured while fetching fixtures", error);
		throw error;
	}
}
