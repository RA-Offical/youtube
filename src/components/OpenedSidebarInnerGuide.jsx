import { Icon, Image } from ".";
import { useSidebarContext } from "../context/SidebarContext";

const OpenedSidebarInnerGuide = ({ props }) => {
	const { styles, canSwitchIcon, icon, iconFill, guideText, image, isSelected, id } = props;

	const { setSelectedGuide } = useSidebarContext();

	const handleClick = () => {
		setSelectedGuide(guideText);
	};

	return (
		<div title={guideText} className={`${styles}`} onClick={handleClick}>
			{image ? <Image image={image} /> : <Icon icon={canSwitchIcon ? iconFill : icon} />}
			<h3 className={`${isSelected ? "font-medium" : ""}`}>{guideText}</h3>
		</div>
	);
};

export default OpenedSidebarInnerGuide;
