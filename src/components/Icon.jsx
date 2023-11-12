import { sprite } from "../assets/icons";

const Icon = ({
	dimenStyle = "w-6 h-6",
	appearanceStyle = "text-dark-200",
	icon,
}) => {
	return (
		<svg className={`${dimenStyle} ${appearanceStyle}`}>
			<use xlinkHref={`${sprite}#${icon}`}></use>
		</svg>
	);
};

export default Icon;
