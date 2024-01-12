import { Video } from "./";
import { useQuery, useInfiniteQuery } from "react-query";
import { getVideos } from "../utils/api";

const Videos = () => {
	// using useInfiniteQuery hook
	const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
		useInfiniteQuery({
			queryKey: ["videos"],
			getNextPageParam: (prevData) => prevData.nextPageToken,
			queryFn: ({ pageParam = "" }) => getVideos(pageParam),
		});

	// show the loading state
	if (isLoading) return <div>Fetching posts...</div>;

	// show the error state
	if (error) return <div>An error occurred: {error.message}</div>;

	return (
		<div className="px-4 pt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{data.pages
				.flatMap((data) => data.videos)
				.map((video) => {
					return <Video key={video.id} {...video} />;
				})}

			<button onClick={() => fetchNextPage()}>
				{isFetchingNextPage ? "loading" : "Load more"}
			</button>
		</div>
	);
};

export default Videos;
