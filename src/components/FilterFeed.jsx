import { memo } from "react";
import filterFeedData from "../data/FilterFeedData";
import { Filter } from "./";

const FilterFeed = ({ slideRef, handleScroll }) => {
	return (
		<div
			ref={slideRef}
			onScroll={handleScroll}
			className="flex gap-3 overflow-auto hide-scroll scroll-smooth"
		>
			{filterFeedData.map((filter) => {
				return <Filter key={filter.id} {...filter} />;
			})}
		</div>
	);
};

export default memo(FilterFeed);
