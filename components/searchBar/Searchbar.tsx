import React from "react";
import getTeams from "../../utils/getTeams";
import { Team } from "@/types";
import SearchForm from "./SearchForm";

export default async function Searchbar() {
	let teamsData: Team[] = await getTeams();
	// console.log(teamsData);

	return (
		<div className="flex justify-center items-center p-3 w-full bg-black/40">
			<div className="w-1/6 flex justify-center items-center text-neutral-100">
				<a href={"/"} className="flex justify-center items-center">
					<img
						src="/logo.png"
						alt="logo"
						className="w-12 object-cover rounded-full"
					/>
					<div className="px-2 md:block hidden font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-orange-600">
						Fusion
					</div>
				</a>
			</div>

			<div className="w-4/6 justify-center items-center flex">
				{/* Search input form */}
				<SearchForm teamsData={teamsData} />
			</div>
			<div className="w-1/6" />
		</div>
	);
}
