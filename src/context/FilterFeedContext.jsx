import { createContext, useState } from "react";

// creating context
const FilterFeedContext = createContext();

function FilterFeedProvider({ children }) {
	const [filterFeed, setFilterFeed] = useState("all");

	return (
		<FilterFeedContext.Provider value={{ filterFeed, setFilterFeed }}>
			{children}
		</FilterFeedContext.Provider>
	);
}
export { FilterFeedContext, FilterFeedProvider };
