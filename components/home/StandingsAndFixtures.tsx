"use client";
import { Standing } from "@/types";
import React, { useState } from "react";

const StandingsAndFixtures = ({
	standingsData,
}: {
	standingsData: Standing[];
}) => {
	const [activeTab, setActiveTab] = useState(0);
	const menuItems = ["EPL", "La Liga", "BundesLiga", "Serie A", "Ligue 1"];
	return (
		<div className="flex flex-col w-full max-w-7xl justify-center items-center md:p-10 bg-gradient-to-br from-red-600/75 to-red-800/20 lg:flex-row">
			<div className="flex justify-center items-center lg:w-3/5 md:p-10 py-5">
				<div className="flex flex-col justify-center items-center bg-gradient-to-b from-black/40 w-full text-neutral-100 rounded-3xl">
					<div className="w-full flex flex-col items-center justify-center">
						<div className="p-2 px-4 font-bold">STANDING</div>
						<div className="flex justify-center w-full">
							{menuItems.map((a, i) => (
								<button
									className={`w-full p-4 rounded-t-lg md:text-base font-bold text-xs ${
										i === activeTab
											? "text-neutral-100"
											: "text-gray-700 bg-black/70"
									}`}
									key={i}
								>
									{a}
								</button>
							))}
						</div>
						<div className="w-full flex overflow-x-hidden snap-x scrollbar-none scroll-smooth text-xs md:text-sm"></div>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center lg:w-2/5 pt-10 lg:pr-10 pb-10"></div>
		</div>
	);
};

export default StandingsAndFixtures;
