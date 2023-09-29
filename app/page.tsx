import StandingsAndFixtures from "@/components/home/StandingsAndFixtures";
import { Standing } from "@/types";
import getStandings from "@/utils/getStandings";

export const revalidate = 60;

export default async function Home() {
	const standingsData: Standing[] = await getStandings();

	// if (!standingsData?.length) {
	// 	return null;
	// }
	return (
		<div className="flex flex-col justify-center items-center w-full md:p-10">
			<StandingsAndFixtures standingsData={standingsData} />
		</div>
	);
}
