import { SearchVideo } from "./";

function SearchVideos({ videos, containerRef }) {
	return (
		<div className="space-y-4 py-6 px-4" ref={containerRef}>
			{videos.pages
				.flatMap((page) => page.videos)
				.map((video) => {
					return <SearchVideo key={video.id} {...video} />;
				})}
		</div>
	);
}
export default SearchVideos;
