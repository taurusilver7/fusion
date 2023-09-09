import React from "react";
import SearchbarForm from "./SearchbarForm";

const Searchbar = () => {
	return (
		<div className="flex justify-center items-center p-3 w-full bg-black/40">
			<div className="w-1/6 flex justify-center items-center text-neutral-100">
				<a href={"/"} className="flex justify-center items-center">
               <img src="/logo.png" alt="logo" className="w-10 object-cover rounded-full" />
               <div className="px-2 md:block hidden font-bold text-xl">Fusion</div>
            </a>
			</div>

			<div className="w-4/6 justify-center">
            {/* Search input form */}
            <SearchbarForm />
         </div>
		</div>
	);
};

export default Searchbar;
