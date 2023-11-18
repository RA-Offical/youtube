import Icon from "./Icon";

const FeedTitle = () => {
	return (
		<div className="flex items-center  gap-2 px-3 h-10 cursor-pointer hover:bg-gray-50 rounded-xl">
			<span className="font-medium text-dark-100">You</span>
			<Icon icon={"greaterThan"} dimenStyle="w-4 h-4" />
		</div>
	);
};

export default FeedTitle;
