import { Video } from "./";
import { useInfiniteQuery } from "react-query";
import { getVideos } from "../utils/api";
import { useEffect, useRef } from "react";

const Videos = () => {
	// using useInfiniteQuery hook
	const { data, error, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
		queryKey: ["videos"],
		getNextPageParam: (prevData) => prevData.nextPageToken,
		queryFn: ({ pageParam = "" }) => getVideos(pageParam),
	});

	// using useRef hook
	const containerRef = useRef(null);

	// using useEffect hook

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					fetchNextPage();
					console.log(entries[0]);
				}
			},
			{
				root: null,
				rootMargin: "200px",
			}
		);

		if (containerRef.current) {
			const lastChild = containerRef.current.lastElementChild;
			if (lastChild) {
				observer.observe(lastChild);
			}
		}

		return () => {
			if (containerRef.current) {
				const lastChild = containerRef.current.lastElementChild;
				if (lastChild) {
					observer.unobserve(lastChild);
				}
			}
		};
	}, [isLoading, isFetchingNextPage]);

	// show the loading state
	if (isLoading) return <div>Fetching posts...</div>;

	// show the error state
	if (error) return <div>An error occurred: {error.message}</div>;

	return (
		<div
			ref={containerRef}
			className="px-4 pt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
