import { ClosedSidebarGuide } from "./";
import ClosedSidebarData from "../data/ClosedSidebarData";
import { useState } from "react";

const ClosedSidebar = () => {
	const [closedSidebarData, setClosedSidebarData] =
		useState(ClosedSidebarData);

	const handleClick = (id) => {
		const newClosedSidebarData = closedSidebarData.map((item) => {
			return { ...item, isSelected: item.id === id };
		});

		setClosedSidebarData(newClosedSidebarData);
	};

	return (
		<div className="px-1">
			{closedSidebarData.map((item) => (
				<ClosedSidebarGuide
					key={item.id}
					{...item}
					handleClick={handleClick}
				/>
			))}
		</div>
	);
};

export default ClosedSidebar;
