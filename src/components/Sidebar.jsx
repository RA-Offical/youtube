import { useState } from "react";
import { OpenedSidebar, ClosedSidebar } from ".";

const Sidebar = ({ isSidebarOpen }) => {
	return isSidebarOpen ? <OpenedSidebar /> : <ClosedSidebar />;
};

export default Sidebar;
