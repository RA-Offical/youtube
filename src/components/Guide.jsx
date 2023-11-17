import { InnerGuide, OuterGuide } from "./";

const Guide = (props) => {
	const { iconFill, isSelected, link } = props;
	const canSwitchIcon = Boolean(iconFill) && isSelected;

	const styles = `flex items-center gap-5 h-10 rounded-xl px-3 cursor-pointer text-sm ${
		!link && isSelected
			? "bg-gray-50 hover:bg-gray-200"
			: "bg-white hover:bg-gray-50"
	}`;

	if (link) {
		return <OuterGuide props={{ ...props, styles }} />;
	}

	return <InnerGuide props={{ ...props, styles, canSwitchIcon }} />;
};

export default Guide;
