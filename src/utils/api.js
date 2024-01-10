import axios from "axios";
import { parseISO, formatDistanceToNow } from "date-fns";
import { numberFormatToSuffix } from "./helper";

// BASE URL
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const APIs = {
	getVideos: `${BASE_URL}/videos`,
	getChannelInfo: `${BASE_URL}/channels`,
	getVideoURL: (videoId) => `https://www.youtube.com/watch?v=${videoId}`,
	getChannelURL: (channelCustomURL) => `https://www.youtube.com/${channelCustomURL}`,
};

async function getVideos() {
	const response = await axios.get(APIs.getVideos, {
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
						const channelResponse = await axios.get(APIs.getChannelInfo, {
							params: {
								key: import.meta.env.VITE_API_KEY,
								part: "snippet",
								id: channelId,
							},
						});
						// getting the channel thumbnail
						const channelThumbnail = channelResponse.data.items[0].snippet.thumbnails.default.url;
						const channelURL = APIs.getChannelURL(channelResponse.data.items[0].snippet.customUrl);
						// parsing date to readable format
						const parsedDate = parseISO(video.snippet.publishedAt);
						const videoPublished = formatDistanceToNow(parsedDate, { addSuffix: true });

						const videoViews = numberFormatToSuffix(video.statistics.viewCount);

						return {
							id: video.id,
							videoURL: APIs.getVideoURL(video.id),
							videoTitle: video.snippet.title,
							videoThumbnail: video.snippet.thumbnails.standard.url,
							channelName: video.snippet.channelTitle,
							videoViews,
							videoPublished,
							channelThumbnail,
							channelId,
							channelURL,
						};
					})
				);
				return videosData;
			},
		],
	});

	return response.data;
}

export { getVideos };
