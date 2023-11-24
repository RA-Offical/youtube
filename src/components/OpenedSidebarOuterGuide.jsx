import { Icon } from ".";

const OpenedSidebarOuterGuide = ({ props }) => {
	const { styles, link, icon, guideText } = props;

	return (
		<a href={link} target="_blank" className={styles}>
			<Icon icon={icon} />
			<h3>{guideText}</h3>
		</a>
	);
};

export default OpenedSidebarOuterGuide;
