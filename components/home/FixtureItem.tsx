"use client";
import { Fixture } from "@/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LocalTime from "../LocalTime";

type PageProps = {
	match: Fixture;
	index: number;
};

const FixtureItem = ({ match, index }: PageProps) => {
	const today = moment();
	const matchDate = moment(match.fixture.date);

	return today.isBefore(matchDate) ? (
		<Link
			href={`/match/${match.fixture.id}`}
			key={match.fixture.id}
			className={`flex w-full p-2 justify-center items-center h-36 hover:bg-red-800/50 ${
				index % 2 === 0 ? "bg-black/40" : ""
			} animated-div`}
		>
			<div className="w-1/3 flex flex-col justify-center gap-2 items-center text-center">
				<Image
					src={match.teams.home.logo}
					alt="homeLogo"
					width={70}
					height={70}
				/>
				{match.teams.home.name}
			</div>

			<div className="w-1/3 flex flex-col justify-center items-center h-full">
				<div className="h-1/3 text-xs text-center">
					<LocalTime fixture={match} />
				</div>
				<div className="h-1/3 text-center text-lg pt-2">vs</div>
				<div className="h-1/3"></div>
			</div>

			<div className="w-1/3 flex flex-col justify-center gap-2 items-center text-center">
				<Image
					src={match.teams.away.logo}
					alt="homeLogo"
					width={70}
					height={70}
				/>
				{match.teams.away.name}
			</div>
		</Link>
	) : null;
};

export default FixtureItem;
