import { Video } from "./";
import axios from "axios";
import { useQuery } from "react-query";

const Videos = () => {
	const getVideos = async () => {
		const response = await axios.get(
			"https://youtube.googleapis.com/youtube/v3/videos",
			{
				params: {
					part: "snippet,contentDetails,statistics",
					maxResults: 10,
					key: "AIzaSyDIU4_5ZST2kTuCyGWHtm6SqX9mdgSbeXw",
					chart: "mostPopular",
				},
				transformResponse: [
					async (data) => {
						const jsonData = JSON.parse(data);
						const videos = await Promise.all(
							jsonData.items.map(async (video) => {
								const channelId = video.snippet.channelId;
								const channelResponse = await axios.get(
									`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyDIU4_5ZST2kTuCyGWHtm6SqX9mdgSbeXw`
								);
								const channelThumbnail =
									channelResponse.data.items[0].snippet
										.thumbnails.default.url;
								return {
									id: video.id,
									videoURL: `https://www.youtube.com/watch?v=${video.id}`,
									videoTitle: video.snippet.title,
									videoThumbnail:
										video.snippet.thumbnails.standard.url,
									channelName: video.snippet.channelTitle,
									videoViews: video.statistics.viewCount,
									videoPublished: video.snippet.publishedAt,
									channelThumbnail,
									channelId,
								};
							})
						);
						return videos;
					},
				],
			}
		);

		return response.data;
	};

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
