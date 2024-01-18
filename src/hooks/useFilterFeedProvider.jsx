import { useContext } from "react";
import { FilterFeedContext } from "../context/FilterFeedContext";

const useFilterFeedContext = () => useContext(FilterFeedContext);
export { useFilterFeedContext };
