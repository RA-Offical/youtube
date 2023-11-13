import filterFeedData from "../data/FilterFeedData";
import { Filter, FilterFeedButton } from "./";
import { useRef, useState } from "react";

const FilterFeed = () => {
	const slideRef = useRef(null);
	const [filterScroll, setFilterScroll] = useState(0);

	const handleButtonClick = (direction) => {
		if (!slideRef.current) return;

		const filterFeedSlideObj = slideRef.current;
		const scrollChange = direction * (filterFeedSlideObj.clientWidth - 150);

		filterFeedSlideObj.scrollLeft += scrollChange;
		setFilterScroll(filterFeedSlideObj.scrollLeft);
	};

	const handleScroll = (e) => {
		setFilterScroll(e.target.scrollLeft);
	};

	const isLeftVisible = !(filterScroll === 0);
	const isRightVisible = !(
		slideRef?.current?.clientWidth + filterScroll ===
		slideRef?.current?.scrollWidth
	);

	return (
		<div className="flex px-4 py-3 relative">
			{/* button for moving left */}
			<FilterFeedButton
				icon={"lessThan"}
				handleClick={() => handleButtonClick(-1)}
				isVisible={isLeftVisible}
			/>

			{/* rendring filter feed */}
			<div
				ref={slideRef}
				onScroll={handleScroll}
				className="flex gap-3 overflow-auto hide-scroll scroll-smooth"
			>
				{filterFeedData.map((filter) => {
					return <Filter key={filter.id} {...filter} />;
				})}
			</div>

			{/* button for moving right */}
			<FilterFeedButton
				icon={"greaterThan"}
				handleClick={() => handleButtonClick(1)}
				isVisible={isRightVisible}
			/>
		</div>
	);
};

export default FilterFeed;
