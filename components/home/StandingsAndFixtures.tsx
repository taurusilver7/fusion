"use client";
import { Standing } from "@/types";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const StandingsAndFixtures = ({
	standingsData,
}: {
	standingsData: Standing[];
}) => {
	const menuItems = ["EPL", "La Liga", "BundesLiga", "Serie A", "Ligue 1"];
	const [activeTab, setActiveTab] = useState(0);
	const menuRef = useRef<HTMLDivElement>(null);

	console.log(standingsData);

	const scrollToTab = (index: number) => {
		const container = menuRef.current;
		if (container) {
			const tab = container.children[index] as HTMLElement;
			tab?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}
	};

	const handleTab = (index: number) => {
		setActiveTab(index);
		scrollToTab(index);
	};

	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			if (event.shiftKey) {
				event.preventDefault();
			}
		};

		const container = menuRef.current;
		if (container) {
			container.addEventListener("wheel", handleWheel, { passive: false });
		}

		return () => {
			if (container) {
				container.removeEventListener("wheel", handleWheel);
			}
		};
	}, []);
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
											: "text-gray-500/80 bg-black/60"
									}`}
									onClick={() => handleTab(i)}
									key={i}
								>
									{a}
								</button>
							))}
						</div>
						<div
							ref={menuRef}
							className="w-full flex overflow-x-hidden snap-x scrollbar-none scroll-smooth text-xs md:text-sm"
						>
							{standingsData.map((response, i) => (
								<div
									key={response?.league.id}
									className="flex-shrink-0 w-full snap-center flex justify-center items-center"
								>
									<div className="flex flex-col justify-between p-2 w-full">
										<div className="flex w-full p-1">
											<div className="w-1/12"></div>
											<div className="w-3/12"></div>
											<div className="w-6/12 flex justify-evenly">
												<div className="w-full text-center">M</div>
												<div className="w-full text-center">W</div>
												<div className="w-full text-center">D</div>
												<div className="w-full text-center">L</div>
												<div className="w-full text-center font-bold">
													P
												</div>
												<div className="w-full text-center">GF</div>
												<div className="w-full text-center">GA</div>
												<div className="w-full text-center">GD</div>
											</div>
											<div className="w-2/12 text-center">Form</div>
										</div>

										{response.league.standings[0].map((stand, j) => (
											<Link
												href={`/team/${stand.team.id}`}
												key={j + stand.team.name}
												className={`flex w-full p-1 hover:bg-red-800 ${
													j % 2 === 0 ? "bg-black/40" : ""
												}`}
											>
												<div className="w-1/12 flex justify-center items-center">
													{j + 1}
												</div>
												<div className="w-3/12 flex text-xs items-center">
													{stand.team.name}
												</div>
												<div className="w-6/12 flex justify-center items-center">
													<div className="w-full text-center">
														{stand.all.played}
													</div>
													<div className="w-full text-center">
														{stand.all.win}
													</div>
													<div className="w-full text-center">
														{stand.all.draw}
													</div>
													<div className="w-full text-center">
														{stand.all.lose}
													</div>
													<div className="w-full text-center font-bold">
														{stand.points}
													</div>
													<div className="w-full text-center">
														{stand.all.goals.for}
													</div>
													<div className="w-full text-center">
														{stand.all.goals.against}
													</div>
													<div className="w-full text-center">
														{stand.goalsDiff}
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center lg:w-2/5 pt-10 lg:pr-10 pb-10"></div>
		</div>
	);
};

export default StandingsAndFixtures;
