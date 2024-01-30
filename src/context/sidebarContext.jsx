import dataOpenedSidebar from "../data/OpenedSidebarData";
import dataClosedSidebar from "../data/ClosedSidebarData";
import PropTypes from "prop-types";
import {useState, createContext, useEffect} from "react";
// creating context
export const SidebarContext = createContext();

// sidebar provider
const SidebarProvider = ({ children }) => {
	const [selectedGuide, setSelectedGuide] = useState("Home");
	const [openedSidebarData, setOpenedSidebarData] = useState([]);
	const [closedSidebarData, setClosedSidebarData] = useState([]);

	useEffect(() => {
		setOpenedSidebarData(dataOpenedSidebar)
		setClosedSidebarData(dataClosedSidebar)
	}, []);

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


