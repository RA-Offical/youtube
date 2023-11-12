import { Video } from "./";
import videosData from "../data/VideosData";

const Videos = () => {
	return (
		<div className="px-4 pt-6 grid gap-4 justify-items-start md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{videosData.map((videoData) => {
				return <Video key={videoData.id} {...videoData} />;
			})}
		</div>
	);
};

export default Videos;
