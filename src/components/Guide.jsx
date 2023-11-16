/**
 * Guide Component
 *
 * @component
 *
 * @param {Object} props - The properties that define the Guide component.
 * @param {string} props.guideText - The text to be displayed in the Guide component.
 * @param {string} props.icon - The name of the icon to be displayed when the Guide component is not selected.
 * @param {string} props.iconFill - The name of the icon to be displayed when the Guide component is selected.
 * @param {boolean} props.isSelected - A boolean that determines whether the Guide component is currently selected.
 *
 * @returns {JSX.Element} The Guide component which includes an Icon component and a paragraph of text.
 *
 */
import Icon from "./Icon";

const Guide = ({ guideText, icon, iconFill, isSelected }) => {
	const switchIcon = Boolean(iconFill) && !isSelected;
	return (
		<div
			className={`flex items-center gap-5 h-10 rounded-xl px-3 cursor-pointer ${
				isSelected
					? "bg-gray-50 hover:bg-gray-200"
					: "bg-white hover:bg-gray-50"
			}`}
		>
			<Icon icon={switchIcon ? icon : iconFill} />
			<p className={`text-sm ${isSelected && "font-medium"}`}>
				{guideText}
			</p>
		</div>
	);
};

export default Guide;
