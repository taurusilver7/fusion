import { Fixture } from "@/types";
import getFixtures from "./getFixtures";
import "server-only";
import moment from "moment";

export default async function getFixturesByTeamId(
	id: number
): Promise<Fixture[]> {
	try {
		const allFixturesByLeague = await getFixtures();

		const fixturesByTeamId: Fixture[] = [];

		for (const league of allFixturesByLeague) {
			for (const fixture of league.fixtures) {
				if (fixture.teams.home.id === id || fixture.teams.away.id === id) {
					fixturesByTeamId.push(fixture);
				}
			}
		}

		const fixturesByTeamSorted: Fixture[] = fixturesByTeamId.sort((a, b) => {
			const time1 = moment(a.fixture.date);
			const time2 = moment(b.fixture.date);

			if (time1.isBefore(time2)) {
				return -1;
			} else if (time1.isAfter(time2)) {
				return 1;
			} else {
				return 0;
			}
		});
		return fixturesByTeamSorted;
	} catch (error: any) {
		console.error(
			`An error occured while fetching fixtures by Team Id: ${error}`
		);
		throw error;
	}
}
