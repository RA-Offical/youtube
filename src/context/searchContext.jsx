import { useState, useContext, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
			{children}
		</SearchContext.Provider>
	);
}

export { SearchContext, SearchProvider };

export default SearchProvider;
