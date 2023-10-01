"use client";

import { Fixture } from "@/types";
import moment from "moment";
import { useState } from "react";

type PageProps = {
	fixturesByTeamId: Fixture[];
	teamId: number;
};

const Fixtures = ({ fixturesByTeamId, teamId }: PageProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleItemCount, setVisibleItemCount] = useState(5);

	const handleShowMore = () => {
		setVisibleItemCount((prev) => prev + 5);
	};

	const today = moment().format("DD-MM-YYYY");

	const fixturesDone = fixturesByTeamId.filter((fixture) => {
		const fixtureDate = moment(fixture.fixture.date).format("DD-MM-YYYY");
		return fixtureDate < today;
	});
	const fixturesToday = fixturesByTeamId.filter((fixture) => {
		const fixtureDate = moment(fixture.fixture.date).format("DD-MM-YYYY");
		return fixtureDate === today;
	});

	const fixturesFuture = fixturesByTeamId.filter((fixture) => {
		const fixtureDate = moment(fixture.fixture.date).format("DD-MM-YYYY");
		return fixtureDate > today;
	});

	const firstItemsFixturesFuture = fixturesFuture.slice(0, 5);

	const prevItem = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
	};
	const nextItem = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === firstItemsFixturesFuture.length - 1
				? firstItemsFixturesFuture.length - 1
				: prevIndex + 1
		);
	};

	const getTranslateX = (index: number) => {
		return `-${index * 100}%`;
	};

	const reversedFixtureDoneData = [...fixturesDone].reverse();

	const firstItemsFixturesDone = reversedFixtureDoneData.slice(
		0,
		visibleItemCount
	);
	return (
		<div className="flex flex-col w-full justify-center items-center text-neutral-100">
			<div className="flex flex-col w-full justify-center items-center">
				<div className="flex w-full justify-center items-center p-2 bg-gradient-to-r from-red-800/80 to-red-800/30">
					Upcoming Matches
				</div>
				<div className="flex items-center justify-center relative overflow-hidden w-full">
					<button
						className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
						onClick={prevItem}
					>
            
          </button>
				</div>
			</div>
			Fixtures
		</div>
	);
};

export default Fixtures;
