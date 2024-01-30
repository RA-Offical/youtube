import PropTypes from "prop-types";
import { useState } from "react";
import { createContext } from "react";
import OpenSidebarData from "../data/OpenedSidebarData";
import ClosedSidebarData from "../data/ClosedSidebarData";
// creating context
export const SidebarContext = createContext();

// sidebar provider
const SidebarProvider = ({ children }) => {
	const [selectedGuide, setSelectedGuide] = useState("Home");
	const [openedSidebarData, setOpenedSidebarData] = useState(OpenSidebarData);
	const [closedSidebarData, setClosedSidebarData] = useState(ClosedSidebarData);

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
};

// defining props for SearchProvider
SidebarProvider.propTypes = {
	children: PropTypes.node.isRequired
}
// export SidebarContext and SidebarProvider
export default SidebarProvider;


