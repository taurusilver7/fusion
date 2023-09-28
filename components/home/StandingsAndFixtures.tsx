"use client"
import { Standing } from '@/types';
import React from 'react'

const StandingsAndFixtures = ({standingsData}: {standingsData: Standing[]}) => {
  return (
		<div className="flex flex-col justify-center items-center md:p-10 bg-gradient-to-br from-red-800/75 to-red-800/20 lg:flex-row">
			<div className="flex justify-center items-center lg:w-3/5 md:p-10 py-5">
				<div>
					<div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default StandingsAndFixtures