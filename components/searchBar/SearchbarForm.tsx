"use client";
import { Team } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export default function SearchbarForm({ teamsData }: { teamsData: Team[] }) {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [focusedIndex, setFocusedIndex] = useState<number>(-1);
	const [showFilteredBox, setShowFilteredBox] = useState<boolean>(false);

	const router = useRouter();
	const teamListRef = useRef<HTMLDivElement>(null);

	const filteredTeams = teamsData.filter((team) =>
		team.team.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	// console.log(filteredTeams);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		setFocusedIndex(-1);
		setShowFilteredBox(true);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "ArrowDown") {
			let length = 0;
			if (filteredTeams.length > 10) {
				length = 10;
			} else {
				length = filteredTeams.length;
			}
			setFocusedIndex((prev) => (prev < length - 1 ? prev - 1 : prev));
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
		} else if (event.key === "Enter") {
			if (focusedIndex !== -1) {
				const teamId = filteredTeams[focusedIndex].team.id;
				router.push(`/team/${teamId}`);
				setSearchTerm("");
			}
		}

		const handleTeamItem = () => {
			setSearchTerm("");
		};

		const handleOutsideClick = (event: MouseEvent) => {
			if (
				teamListRef.current &&
				!teamListRef.current.contains(event.target as Node)
			) {
				setShowFilteredBox(false);
			}
		};

		useEffect(() => {
			document.addEventListener("click", handleOutsideClick);
			return () => {
				document.removeEventListener("click", handleOutsideClick);
			};
		}, []);
		return (
			<div className="flex justify-center items-center w-full max-w-lg relative">
				<input
					type="text"
					placeholder="Search a team"
					onChange={handleSearch}
					onKeyDown={handleKeyDown}
					value={searchTerm}
					className="w-full bg-gradient-to-r from-neutral-100/60 to-black/25 outline-none bg-transparent p-2 border-neutral-100/60 border rounded-xl hover:border-blue-400 focus:border-blue-400 focus:from-blue-400/60 text-neutral-100 placeholder:text-neutral-100/70"
				/>

				{searchTerm && filteredTeams.length > 0 && showFilteredBox ? (
					<div
						ref={teamListRef}
						className="absolute top-full left-2 w-full max-w-md bg-black/80 z-20 flex flex-col"
					>
						{filteredTeams.slice(0, 10).map((standing, i) => (
							<Link
								href={`/team/${standing.team.id}`}
								key={standing.team.id}
								className={`p-2 text-neutral-100 ${
									i === focusedIndex ? "bg-neutral-100/40" : ""
								}`}
								onClick={() => handleTeamItem()}
							></Link>
						))}
					</div>
				) : null}
			</div>
		);
	};
}
