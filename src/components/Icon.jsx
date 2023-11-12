import { sprite } from "../assets/icons";

const Icon = ({ icon }) => {
	return (
		<svg className="w-6 h-6 text-dark-200">
			<use xlinkHref={`${sprite}#${icon}`}></use>
		</svg>
	);
};

export default Icon;
