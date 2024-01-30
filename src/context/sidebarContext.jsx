import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import OpenSidebarData from "../data/OpenedSidebarData";
import { useState } from "react";
import ClosedSidebarData from "../data/ClosedSidebarData";
// creating context
const SidebarContext = createContext();



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


// exporting SidebarContext
export const useSidebarContext = () => {
	return useContext(SidebarContext);
};

// export SidebarContext and SidebarProvider
export default SidebarProvider;


