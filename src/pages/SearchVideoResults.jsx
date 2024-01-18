import { useInfiniteQuery } from "react-query";
import { SearchVideos } from "../components";
import Spinner from "../components/Spinner";
import { getSearchVideosIds } from "../utils/api";
import useLoadVideoObserver from "../hooks/useLoadVideoObserver";
import { useSearchContext } from "../hooks/useSearchContext";
import { useEffect } from "react";

function SearchVideoResults() {
	// useSearchContext() is a custom hook that returns the value of the SearchContext
	const { searchQuery } = useSearchContext();
	// using infinite react query to fetch the search result
	const { data, isLoading, error, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ["searchVideos", searchQuery],
		getNextPageParam: (prevData) => prevData.nextPageToken,
		enabled: !!searchQuery,
		queryFn: ({ pageParam = "" }) => getSearchVideosIds(searchQuery, pageParam),
	});

	// using custom hook to load more videos when the user scrolls to the bottom of the page
	const { containerRef } = useLoadVideoObserver({
		dependencyArray: [isLoading, isFetchingNextPage],
		loader: fetchNextPage,
	});

	// if data is loading show the spinner
	if (isLoading) return <p>Loading...</p>;
	// if there is an error show the error message
	if (error) return <p>Something went wrong...</p>;

	return (
		<div>
			{/* rendering the search videos */}
			<SearchVideos videos={data} containerRef={containerRef} />

			{/* rendering the spinner */}
			<div className="flex justify-center py-6 mt-4">
				<Spinner />
			</div>
		</div>
	);
}
export default SearchVideoResults;
