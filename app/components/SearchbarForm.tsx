import React from "react";

const SearchbarForm = () => {
	return (
		<div className="flex justify-center items-center w-full max-w-lg relative">
			<input
				type="text"
				placeholder="Search a team"
				className="w-full bg-gradient-to-r from-neutral-100/60 to-black/20 outline-none bg-transparent p-2 border-neutral-100 border-[1px] rounded-xl hover:border-blue-400 focus:border-blue-400 focus:from-blue-400/60 text-neutral-100 placeholder:text-neutral-100/70"
			/>
		</div>
	);
};

export default SearchbarForm;
