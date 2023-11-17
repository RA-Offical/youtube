import { GuideCategory } from ".";
import { useSidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
	// getting sidebar data from sidebar context
	const { sidebarData } = useSidebarContext();

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
