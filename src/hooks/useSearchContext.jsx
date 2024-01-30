import { useContext } from "react";
import { SearchContext } from "../context/SearchContext.jsx";

export function useSearchContext() {
	return useContext(SearchContext);
}
