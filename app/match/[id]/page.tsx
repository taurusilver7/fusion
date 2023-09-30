import React from "react";

type PageProps = {
	params: {
		id: string;
	};
};

const MatchPage = ({ params }: PageProps) => {
	return (
		<div className="flex justify-center items-center text-neutral-100">
			{params.id}
		</div>
	);
};

export default MatchPage;
