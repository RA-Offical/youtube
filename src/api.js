import axios from "axios";
import { parseISO, formatDistanceToNow } from "date-fns";
import { numberFormatToSuffix } from "./helper";

async function getVideos() {
	const response = await axios.get(
		`${import.meta.env.VITE_BASE_URL}/videos`,
		{
			params: {
				part: "snippet,contentDetails,statistics",
				maxResults: 10,
				key: import.meta.env.VITE_API_KEY,
				chart: "mostPopular",
			},
			transformResponse: [
				async (rawData) => {
					const rawVideosData = await JSON.parse(rawData);

					const videosData = await Promise.all(
						// mapping through the raw data and returning a new array of objects
						rawVideosData.items.map(async (video) => {
							// getting the channel id to get information about channel
							const channelId = video.snippet.channelId;
							// making request to get channel information
							const channelResponse = await axios.get(
								`${
									import.meta.env.VITE_BASE_URL
								}/channels?part=snippet&id=${channelId}&key=AIzaSyDIU4_5ZST2kTuCyGWHtm6SqX9mdgSbeXw`
							);
							// getting the channel thumbnail
							const channelThumbnail =
								channelResponse.data.items[0].snippet.thumbnails
									.default.url;

							// parsing date to readable format
							const parsedDate = parseISO(
								video.snippet.publishedAt
							);
							const videoPublished = formatDistanceToNow(
								parsedDate,
								{ addSuffix: true }
							);

							const videoViews = numberFormatToSuffix(
								video.statistics.viewCount
							);

							return {
								id: video.id,
								videoURL: `https://www.youtube.com/watch?v=${video.id}`,
								videoTitle: video.snippet.title,
								videoThumbnail:
									video.snippet.thumbnails.standard.url,
								channelName: video.snippet.channelTitle,
								videoViews,
								videoPublished,
								channelThumbnail,
								channelId,
							};
						})
					);
					return videosData;
				},
			],
		}
	);

	return response.data;
}

export { getVideos };
