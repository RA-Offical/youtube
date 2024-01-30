import {useContext} from "react";
import {SidebarContext} from "../context/SidebarContext.jsx";

export const useSidebarContext = () => {
    return useContext(SidebarContext);
};
