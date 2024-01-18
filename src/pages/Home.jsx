import { FilterFeedCarasoul, HomeVideos } from "../components";
import SearchVideos from "../components/SearchVideos";
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
