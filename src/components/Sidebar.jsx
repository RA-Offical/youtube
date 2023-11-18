import { useState } from "react";
import { OpenedSidebar, ClosedSidebar } from ".";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return isOpen ? <OpenedSidebar /> : <ClosedSidebar />;
};

export default Sidebar;
