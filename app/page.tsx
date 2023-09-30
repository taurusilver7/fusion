import StandingsAndFixtures from "@/components/home/StandingsAndFixtures";
import { AllFixtures, Standing } from "@/types";
import getFixturesForFiveLeagues from "@/utils/getFixturesForFiveLeagues";
import getStandings from "@/utils/getStandings";

export const revalidate = 60;

export default async function Home() {
	const standingsData: Standing[] = await getStandings();
	const filteredFixtures: AllFixtures[] = await getFixturesForFiveLeagues();

	// if (!standingsData?.length) {
	// 	return null;
	// }
	return (
		<div className="flex flex-col justify-center items-center w-full md:p-10">
			<StandingsAndFixtures
				standingsData={standingsData}
				filteredFixtures={filteredFixtures}
			/>
		</div>
	);
}
