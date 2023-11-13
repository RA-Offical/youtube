import { FilterFeedCarasoul, Header, Sidebar, Videos } from "./components";

function App() {
	return (
		<div>
			<Header />

			<div className="flex">
				<Sidebar />
				<main className="overflow-hidden">
					<FilterFeedCarasoul />
					<Videos />
				</main>
			</div>
		</div>
	);
}

export default App;
