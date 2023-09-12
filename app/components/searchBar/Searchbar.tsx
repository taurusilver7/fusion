import React from "react";
import getTeams from "../../utils/getTeams";
import { Team } from "@/types";
import SearchbarForm from "./SearchbarForm";

export default async function Searchbar() {
	let teamsData: Team[] = await getTeams();

	return (
		<div className="flex justify-center items-center p-3 w-full bg-black/40">
			<div className="w-1/6 flex justify-center items-center text-neutral-100">
				<a href={"/"} className="flex justify-center items-center">
					<img
						src="/logo.png"
						alt="logo"
						className="w-12 object-cover rounded-full"
					/>
					<div className="px-2 md:block hidden font-bold text-xl text-orange-500">
						Fusion
					</div>
				</a>
			</div>

			<div className="w-4/6 justify-center">
				{/* Search input form */}
				<SearchbarForm teamsData={teamsData} />
			</div>
		</div>
	);
}
