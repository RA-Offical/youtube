import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SharedYoutube from "./pages/SharedYoutube";
import SearchVideoResults from "./pages/SearchVideoResults";
import { useSearchContext } from "./hooks/useSearchContext";
function App() {
	const { searchQuery } = useSearchContext();

	return (
		<Routes>
			<Route path="/" element={<SharedYoutube />}>
				<Route index element={<Home />} />
				<Route
					path="/results"
					element={searchQuery ? <SearchVideoResults /> : <Navigate to={"/"} />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
