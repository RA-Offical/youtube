import { HomeVideo } from ".";
import { useInfiniteQuery } from "react-query";
import { getSearchVideos, getVideosIds } from "../utils/api";
import { useEffect, useRef } from "react";
import useLoadVideoObserver from "../hooks/useLoadVideoObserver";
import Spinner from "./Spinner";
import { useFilterFeedContext } from "../hooks/useFilterFeedProvider";
import { is } from "date-fns/locale";

const HomeVideos = () => {
	//using useFilterFeedContext hook
	const { filterFeed } = useFilterFeedContext();

	// using useInfiniteQuery hook
	const { data, error, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
		queryKey: ["videos", filterFeed],
		getNextPageParam: (prevData) => prevData.nextPageToken,
		queryFn: ({ pageParam = "" }) => {
			if (filterFeed !== "all") {
				return getSearchVideos(filterFeed, pageParam);
			}
			return getVideosIds(pageParam);
		},
	});

	// using useLoadVideoObserver hook
	const { containerRef } = useLoadVideoObserver({
		dependencyArray: [isLoading, isFetchingNextPage],
		loader: fetchNextPage,
	});

	// show the loading state
	// if (isLoading) return <div>Fetching posts...</div>;

	// show the error state
	if (error) return <div>An error occurred: {error.message}</div>;

	return (
		<div>
			{/* videos grid */}
			{data && (
				<div
					ref={containerRef}
					className="px-4 py-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
					{data.pages
						.flatMap((data) => data.videoIds)
						.map((id) => {
							return <HomeVideo key={id} videoId={id} />;
						})}

					{isLoading ||
						(isFetchingNextPage && (
							<>
								<HomeVideo />
								<HomeVideo />
								<HomeVideo />
								<HomeVideo />
								<HomeVideo />
								<HomeVideo />
								<HomeVideo />
							</>
						))}
				</div>
			)}

			{/* spinner */}
			{isFetchingNextPage && (
				<div className="flex justify-center mt-4 pb-6">
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default HomeVideos;
