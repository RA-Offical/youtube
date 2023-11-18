import Icon from "./Icon";

const ClosedSidebarGuide = ({
	icon,
	iconFill,
	isSelected,
	text,
	handleClick,
	id,
}) => {
	return (
		<div
			className={`w-16 py-4 flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50 rounded-xl`}
			onClick={() => handleClick(id)}
		>
			<Icon icon={isSelected ? iconFill : icon} />
			<h2 className="text-xsm">{text}</h2>
		</div>
	);
};

export default ClosedSidebarGuide;
