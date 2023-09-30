"use client";
import { GridLoader } from "react-spinners";

const Loader = ({ color }: { color: string }) => {
	return (
		<div>
			<GridLoader color={color} size={30} />
		</div>
	);
};

export default Loader;
