import PropTypes from "prop-types";
import { useState, createContext } from "react";

// creating context
export const SearchContext = createContext();

function SearchProvider({ children }) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
			{children}
		</SearchContext.Provider>
	);
}

SearchProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export default SearchProvider;
