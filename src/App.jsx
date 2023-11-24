import { useState } from "react";
import { FilterFeedCarasoul, Header, Sidebar, Videos } from "./components";
import { SidebarProvider } from "./context/sidebarContext";
function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div>
			<Header
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<div className="flex">
				<SidebarProvider>
					<Sidebar isSidebarOpen={isSidebarOpen} />
				</SidebarProvider>

				<main className="overflow-clip">
					<FilterFeedCarasoul />
					<Videos />
				</main>
			</div>
		</div>
	);
}

export default App;
