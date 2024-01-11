import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedYoutube from "./pages/SharedYoutube";
function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedYoutube />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
