import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedYoutube from "./pages/SharedYoutube";
import SearchVideoResults from "./pages/SearchVideoResults";
function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedYoutube />}>
				<Route index element={<Home />} />
				<Route path="/results" element={<SearchVideoResults />} />
			</Route>
		</Routes>
	);
}

export default App;
