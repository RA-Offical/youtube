import { HomeVideo } from ".";
import { useInfiniteQuery } from "react-query";
import { getVideos } from "../utils/api";
import { useEffect, useRef } from "react";
import useLoadVideoObserver from "../hooks/useLoadVideoObserver";
import Spinner from "./Spinner";

const HomeVideos = () => {
	// using useInfiniteQuery hook
	const { data, error, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
		queryKey: ["videos"],
		getNextPageParam: (prevData) => prevData.nextPageToken,
		queryFn: ({ pageParam = "" }) => getVideos(pageParam),
	});

	// using useLoadVideoObserver hook
	const { containerRef } = useLoadVideoObserver({
		dependencyArray: [isLoading, isFetchingNextPage],
		loader: fetchNextPage,
	});

	// show the loading state
	if (isLoading) return <div>Fetching posts...</div>;

	// show the error state
	if (error) return <div>An error occurred: {error.message}</div>;

	return (
		<div>
			{/* videos grid */}
			<div
				ref={containerRef}
				className="px-4 py-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{data.pages
					.flatMap((data) => data.videos)
					.map((video) => {
						return <HomeVideo key={video.id} {...video} />;
					})}
			</div>

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
