import { GuideCategory } from ".";
import sidebarData from "../data/SidebarData";

const Sidebar = () => {
	console.log(sidebarData);
	return (
		<div className="shrink-0 w-[270px] sticky top-14 self-start sidebar-height overflow-auto scrollbar">
			{sidebarData.map((guideCategory) => {
				return (
					<GuideCategory key={guideCategory.id} {...guideCategory} />
				);
			})}
		</div>
	);
};

export default Sidebar;
