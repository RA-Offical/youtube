import { FilterFeedCarasoul, Header, Sidebar, Videos } from "./components";
import { SidebarProvider } from "./context/sidebarContext";

function App() {
	return (
		<div>
			<Header />
			<div className="flex">
				<SidebarProvider>
					<Sidebar />
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
