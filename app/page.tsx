import StandingsAndFixtures from "@/components/home/StandingsAndFixtures";
import { Standing } from "@/types";
import getStandings from "@/utils/getStandings";

export default async function Home() {
	const standingsData: Standing[] = await getStandings();
	return (
		<div className="flex flex-col justify-center items-center w-full md:p-10">
			<StandingsAndFixtures standingsData={standingsData} />
		</div>
	);
}
