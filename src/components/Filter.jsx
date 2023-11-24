import { memo } from "react";

const Filter = ({
	filterText,
	isSelected,
	filterFeedData,
	id,
	setFilterFeedData,
}) => {
	const handleClick = () => {
		const newFilterFeedData = filterFeedData.map((filter) => {
			return { ...filter, isSelected: id === filter.id };
		});
		setFilterFeedData(newFilterFeedData);
	};

	return (
		<div
			className={`flex-center h-8 px-3 whitespace-nowrap rounded-lg cursor-pointer text-sm font-medium  ${
				isSelected
					? "bg-dark-200 text-white"
					: "bg-gray-50 hover:bg-gray-300"
			}`}
			onClick={handleClick}
		>
			{filterText}
		</div>
	);
};

export default memo(Filter);
