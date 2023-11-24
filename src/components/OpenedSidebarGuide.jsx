import { useSidebarContext } from "../context/sidebarContext";
import { OpenedSidebarInnerGuide, OpenedSidebarOuterGuide } from ".";

const OpenedSidebarGuide = (props) => {
	const { iconFill, link, guideText } = props;
	const { selectedGuide } = useSidebarContext();

	const isSelected = selectedGuide === guideText;
	const canSwitchIcon = Boolean(iconFill) && isSelected;

	const styles = `flex items-center gap-5 h-10 rounded-xl px-3 cursor-pointer text-sm ${
		!link && isSelected
			? "bg-gray-50 hover:bg-gray-200"
			: "bg-white hover:bg-gray-50"
	}`;

	if (link) {
		return <OpenedSidebarOuterGuide props={{ ...props, styles }} />;
	}

	return (
		<OpenedSidebarInnerGuide
			props={{ ...props, styles, isSelected, canSwitchIcon }}
		/>
	);
};

export default OpenedSidebarGuide;
