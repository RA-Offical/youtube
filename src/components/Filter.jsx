import { memo } from "react";
import { useFilterFeedContext } from "../hooks/useFilterFeedProvider";

const Filter = ({ filterText, isSelected, filterFeedData, id, setFilterFeedData }) => {
	const { setFilterFeed } = useFilterFeedContext();

	const handleClick = () => {
		const newFilterFeedData = filterFeedData.map((filter) => {
			return { ...filter, isSelected: id === filter.id };
		});
		setFilterFeedData(newFilterFeedData);
		setFilterFeed(newFilterFeedData.find((filter) => filter.isSelected).filterText);
	};

	return (
		<div
			className={`flex-center h-8 px-3 whitespace-nowrap rounded-lg cursor-pointer text-sm font-medium  ${
				isSelected ? "bg-dark-200 text-white" : "bg-gray-50 hover:bg-gray-300"
			}`}
			onClick={handleClick}>
			{filterText}
		</div>
	);
};

export default memo(Filter);
