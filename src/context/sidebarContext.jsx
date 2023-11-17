import { createContext, useContext, useReducer } from "react";
import SidebarData from "../data/SidebarData";
import sidebarReducer from "../reducer/sidebarReducer";

// creating context
const SidebarContext = createContext();

// initial state
const initialState = [...SidebarData];

// sidebar provider
const SidebarProvider = ({ children }) => {
	const [state, dispatch] = useReducer(sidebarReducer, initialState);

	const toggleGuideSelection = (guideId) => {
		dispatch({
			type: "CHANGE_GUIDE_SELECTION",
			payload: { guideId },
		});
	};

	return (
		<SidebarContext.Provider
			value={{
				sidebarData: state,
				toggleGuideSelection,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};

// exporting SidebarContext
export const useSidebarContext = () => {
	return useContext(SidebarContext);
};

// export SidebarContext and SidebarProvider
export { SidebarContext, SidebarProvider };
