import { FilterFeed, FilterFeedButton } from ".";
import { useCallback, useRef, useState } from "react";

const FilterFeedCarasoul = () => {
	const slideRef = useRef(null);
	const [filterScroll, setFilterScroll] = useState(0);

	// function for handling click
	const handleButtonClick = (direction) => {
		if (!slideRef.current) return;

		const filterFeedSlideObj = slideRef.current;
		const scrollChange = direction * (filterFeedSlideObj.clientWidth - 150);

		filterFeedSlideObj.scrollLeft += scrollChange;
		setFilterScroll(filterFeedSlideObj.scrollLeft);
	};

	// function for handling scroll
	const handleScroll = useCallback((e) => {
		setFilterScroll(e.target.scrollLeft);
	}, []);

	// variables for controlling left or

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
			<FilterFeed handleScroll={handleScroll} slideRef={slideRef} />

			{/* button for moving right */}
			<FilterFeedButton
				icon={"greaterThan"}
				handleClick={() => handleButtonClick(1)}
				isVisible={isRightVisible}
			/>
		</div>
	);
};

export default FilterFeedCarasoul;
