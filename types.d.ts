type Standing = {
	league: League;
};

type League = {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string;
	season: number;
	standings: [Team[]];
};

type Team = {
	rank: number;
	team: {
		id: number;
		name: string;
		logo: string;
	};
	points: number;
	goalsDiff: number;
	group: string;
	form: string;
	status: string;
	description: string;
	all: Games;
	home: Games;
	away: Games;
};

type Games = {
	played: number;
	win: number;
	draw: number;
	lose: number;
	goals: {
		for: number;
		against: number;
	};
};

// Fixtures
type FixtureInfo = {
	id: number;
	referee: string;
	timezone: string;
	date: string;
	timestamp: number;
	periods: {
		first: number;
		second: number;
	};
	venue: {
		id: number;
		name: string;
		city: string;
	};
	status: {
		long: string;
		short: string;
		elapsed: number;
	};
};

type LeagueFixtures = {
	id: number;
	name: string;
	country: string;
	flag: string;
	logo: string;
	season: string;
	round: string;
};

type Teams = {
	home: {
		id: number;
		name: string;
		logo: string;
		winner: boolean;
	};
	away: {
		id: number;
		name: string;
		logo: string;
		winner: boolean;
	};
};

type Goals = {
	home: number,
	away: number,
}

export { Standing, Team };
