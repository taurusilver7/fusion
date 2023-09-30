import { Fixture } from "@/types";
import React from "react";
import FixtureItem from "./FixtureItem";

type PageProps = {
	fixtureData: Fixture[];
};

const FixturesByLeague = ({ fixtureData }: PageProps) => {
	if (fixtureData?.length > 0) {
		return fixtureData.slice(0, 4).map((match, i) => <FixtureItem match={match} index={i} key={match.fixture.id} />);
	}
};

export default FixturesByLeague;
