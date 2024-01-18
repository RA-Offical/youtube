import { useEffect, useState } from "react";
import { OpenedSidebar, ClosedSidebar } from ".";

const Sidebar = ({ isSidebarOpen }) => {
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1280);

	function handleResize() {
		setIsLargeScreen(window.innerWidth > 1280);
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isLargeScreen && isSidebarOpen ? <OpenedSidebar /> : <ClosedSidebar />;
};

export default Sidebar;
