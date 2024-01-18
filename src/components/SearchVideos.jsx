import { SearchVideo } from "./";

function SearchVideos({ videos, containerRef }) {
	return (
		<div className="space-y-4 py-6 px-4" ref={containerRef}>
			{videos.pages
				.flatMap((page) => page.videoIds)
				.map((id) => {
					return <SearchVideo key={id} videoId={id} />;
				})}
		</div>
	);
}
export default SearchVideos;
