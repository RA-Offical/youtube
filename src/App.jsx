import { FilterFeed, Header, Sidebar, Videos } from "./components";

function App() {
	return (
		<div>
			<Header />

			<div className="flex">
				<Sidebar />
				<main className="overflow-hidden">
					<FilterFeed />
					<Videos />
				</main>
			</div>
		</div>
	);
}

export default App;
