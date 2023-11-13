import { Icon } from "./";

const FilterFeedButton = ({ icon, handleClick, isVisible }) => {
	let stylesClasses =
		icon === "greaterThan"
			? "right-0 after:right-full after:bg-gradient-to-l"
			: "left-0 after:left-full after:bg-gradient-to-r";
	const visibility = isVisible ? ` !flex-center` : ` !hidden`;

	return (
		<div
			className={`${stylesClasses} ${visibility}  absolute top-0 h-full flex-center px-2 bg-white after:absolute after:top-0 after:w-full after:h-full after:pointer-events-none after:from-white after:from-20% after:to-transparent after:to-85%`}
		>
			<button
				className="w-10 h-10 flex-center rounded-full hover:bg-gray-300"
				onClick={handleClick}
			>
				<Icon icon={icon} />
			</button>
		</div>
	);
};

export default FilterFeedButton;
