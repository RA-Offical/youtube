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

// Function to fetch channel info
async function fetchChannelInfo(channelId) {
	const channelResponse = await axios.get(APIs.getChannelInfo, {
		params: {
			key: import.meta.env.VITE_API_KEY,
			part: "snippet",
			id: channelId,
		},
	});
	return channelResponse.data.items[0];
}

// Function to transform video data
async function transformVideoData(video, pageToken) {
	const channelId = video.snippet.channelId;
	const channelData = await fetchChannelInfo(channelId);
	const channelThumbnail = channelData.snippet.thumbnails.default.url;
	const channelURL = APIs.getChannelURL(channelData.snippet.customUrl);
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
}

// function to get videos from youtube api
async function getVideos(nextPageToken) {
	const response = await axios.get(APIs.getVideos, {
		params: {
			part: "snippet,contentDetails,statistics",
			maxResults: 10,
			key: import.meta.env.VITE_API_KEY,
			chart: "mostPopular",
			pageToken: nextPageToken,
		},
	});

	const newNextPageToken = response.data.nextPageToken;

	const videos = await Promise.all(
		response.data.items.map(async (video) => {
			return transformVideoData(video, nextPageToken);
		})
	);

	return { nextPageToken: newNextPageToken, videos };
}

export { getVideos };
