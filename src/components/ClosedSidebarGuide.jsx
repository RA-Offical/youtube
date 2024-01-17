import { useSidebarContext } from "../context/SidebarContext";
import Icon from "./Icon";

const ClosedSidebarGuide = ({ icon, iconFill, guideText, handleClick, id }) => {
	const { selectedGuide, setSelectedGuide } = useSidebarContext();
	const isSelected = selectedGuide === guideText;

	return (
		<div
			className={`w-16 py-4 flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50 rounded-xl`}
			onClick={() => setSelectedGuide(guideText)}>
			<Icon icon={isSelected ? iconFill : icon} />
			<h2 className="text-xsm">{guideText}</h2>
		</div>
	);
};

export default ClosedSidebarGuide;
