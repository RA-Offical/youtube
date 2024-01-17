import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

export function useSearchContext() {
	return useContext(SearchContext);
}
