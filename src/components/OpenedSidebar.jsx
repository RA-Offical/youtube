import { OpenedSidebarGuideCategory } from ".";
import { useSidebarContext } from "../context/sidebarContext";

const OpenedSidebar = () => {
	// getting sidebar data from sidebar context
	const { openedSidebarData } = useSidebarContext();

	return (
		<div className="shrink-0 w-[250px] sticky top-14 self-start sidebar-height overflow-auto scrollbar">
			{openedSidebarData.map((guideCategory) => {
				return <OpenedSidebarGuideCategory key={guideCategory.id} {...guideCategory} />;
			})}
		</div>
	);
};

export default OpenedSidebar;
