import { Icon, Image } from ".";
import { useSidebarContext } from "../context/sidebarContext";

const InnerGuide = ({ props }) => {
	const {
		styles,
		canSwitchIcon,
		icon,
		iconFill,
		guideText,
		image,
		isSelected,
		id,
	} = props;

	const { toggleGuideSelection } = useSidebarContext();

	const handleClick = () => {
		if (Boolean(iconFill)) toggleGuideSelection(id);
	};

	return (
		<div title={guideText} className={`${styles}`} onClick={handleClick}>
			{image ? (
				<Image image={image} />
			) : (
				<Icon icon={canSwitchIcon ? iconFill : icon} />
			)}
			<h3 className={`${isSelected && "font-medium"}`}>{guideText}</h3>
		</div>
	);
};

export default InnerGuide;
