import dataOpenedSidebar from "../data/OpenedSidebarData";
import dataClosedSidebar from "../data/ClosedSidebarData";
import PropTypes from "prop-types";
import {useState, createContext} from "react";
// creating context
export const SidebarContext = createContext();

// sidebar provider
function SidebarProvider({ children }) {
	const [selectedGuide, setSelectedGuide] = useState("Home");
	const [openedSidebarData, setOpenedSidebarData] = useState(dataOpenedSidebar);
	const [closedSidebarData, setClosedSidebarData] = useState(dataClosedSidebar);

	return (
		<SidebarContext.Provider
			value={{
				openedSidebarData,
				setOpenedSidebarData,
				closedSidebarData,
				setClosedSidebarData,
				selectedGuide,
				setSelectedGuide,
			}}>
			{children}
		</SidebarContext.Provider>
	);
}

// defining props for SearchProvider
SidebarProvider.propTypes = {
	children: PropTypes.node.isRequired
}
// export SidebarProvider
export default SidebarProvider;


