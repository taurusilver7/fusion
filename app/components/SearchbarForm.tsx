import { Team } from "@/types";
import React, { useState } from "react";

const SearchbarForm = ({ teamsData }: { teamsData: Team[] }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [focusedIndex, setFocusedIndex] = useState<number>(-1);
	const [showFilteredBox, setShowFilteredBox] = useState<boolean>(false);

	const filteredTeams = teamsData.filter((team) =>
		team.team.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		setFocusedIndex(-1);
		setShowFilteredBox(true);
	};
	return (
		<div className="flex justify-center items-center w-full max-w-lg relative">
			<input
				type="text"
				placeholder="Search a team"
				onChange={handleSearch}
				value={searchTerm}
				className="w-full bg-gradient-to-r from-neutral-100/60 to-black/20 outline-none bg-transparent p-2 border-neutral-100 border-[1px] rounded-xl hover:border-blue-400 focus:border-blue-400 focus:from-blue-400/60 text-neutral-100 placeholder:text-neutral-100/70"
			/>
		</div>
	);
};

export default SearchbarForm;
