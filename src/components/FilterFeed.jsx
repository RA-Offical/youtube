import { memo, useState } from "react";
import FilterFeedData from "../data/FilterFeedData";
import { Filter } from "./";

const FilterFeed = ({ slideRef, handleScroll }) => {
	const [filterFeedData, setFilterFeedData] = useState(FilterFeedData);

	return (
		<div
			ref={slideRef}
			onScroll={handleScroll}
			className="flex gap-3 overflow-auto hide-scroll scroll-smooth">
			{filterFeedData.map((filter) => {
				return (
					<Filter
						key={filter.id}
						{...filter}
						filterFeedData={filterFeedData}
						setFilterFeedData={setFilterFeedData}
					/>
				);
			})}
		</div>
	);
};

export default memo(FilterFeed);
