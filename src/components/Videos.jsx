import { Video } from "./";
import { useQuery } from "react-query";
import { getVideos } from "../api";
const Videos = () => {
	const {
		data: videosData,
		error,
		isLoading,
	} = useQuery("postsData", getVideos);

	if (isLoading) return <div>Fetching posts...</div>;
	if (error) return <div>An error occurred: {error.message}</div>;

	console.log(videosData);
	return (
		<div className="px-4 pt-6 grid gap-4  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{videosData.map((videoData) => {
				return <Video key={videoData.id} {...videoData} />;
			})}
		</div>
	);
};

export default Videos;
