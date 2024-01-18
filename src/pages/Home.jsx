import { FilterFeedCarasoul, HomeVideos } from "../components";
import { FilterFeedProvider } from "../context/FilterFeedContext";

function Home() {
	return (
		<FilterFeedProvider>
			<FilterFeedCarasoul />
			<HomeVideos />
		</FilterFeedProvider>
	);
}

export default Home;
