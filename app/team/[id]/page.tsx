import React from "react";

type PageProps = {
	params: {
		id: string;
	};
};

const TeamPage = ({ params }: PageProps) => {
	if (true) {
		return (
			<div className="flex w-full justify-center items-center py-5">
				<div className="flex max-w-7xl p-5 w-full md:flex-row justify-center items-center text-neutral-100">
					Teams Not Available
				</div>
			</div>
		);
	}
	return (
		<div className="flex justify-center items-center text-neutral-100">
			{params.id}
		</div>
	);
};

export default TeamPage;
