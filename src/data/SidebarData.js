import { channel_avatar_1 } from "../assets/images";
import { channel_avatar_2 } from "../assets/images";

export default () => [
	{
		id: 1,
		GuideHeading: "",
		guideItems: [
			{
				id: 1,
				icon: "home",
				iconFill: "home-fill",
				title: "Home",
				isSelected: true,
			},
			{
				id: 2,
				icon: "shorts",
				iconFill: "shorts-fill",
				title: "Shorts",
				isSelected: false,
			},
			{
				id: 3,
				icon: "subscription",
				iconFill: "subscription-fill",
				title: "Shorts",
				isSelected: false,
			},
		],
	},
	{
		id: 2,
		GuideHeading: "",
		guideItems: [
			{
				id: 1,
				icon: "channel",
				iconFill: "channel-fill",
				title: "Channel",
				isSelected: false,
			},
			{
				id: 2,
				icon: "history",
				iconFill: "history-fill",
				title: "history",
				isSelected: false,
			},
			{
				id: 3,
				icon: "video",
				title: "Your Videos",
				link: "https://www.instagram.com",
				isSelected: false,
			},
			{
				id: 4,
				icon: "watchlater",
				iconFill: "watchlater-fill",
				title: "WatchLater",

				isSelected: false,
			},
		],
	},
	{
		id: 3,
		GuideHeading: "",
		guideItems: [
			{
				id: 1,
				image: { channel_avatar_1 },
				title: "Sk Well-Wisher Techno",
				isSelected: false,
			},
			{
				id: 2,
				image: { channel_avatar_2 },
				title: "Deadly Vines",
				isSelected: false,
			},
			{
				id: 3,
				icon: "add",
				title: "Browse Channel",
				link: "https://www.instagram.com",
				isSelected: false,
			},
		],
	},
	{
		id: 4,
		GuideHeading: "",
		guideItems: [
			{
				id: 1,
				icon: "trending",
				iconFill: "trending-fill",
				title: "trending",
				isSelected: false,
			},
			{
				id: 2,
				icon: "music",
				iconFill: "music-fill",
				title: "Music",
				isSelected: false,
			},
			{
				id: 3,
				icon: "gaming",
				iconFill: "gaming-fill",
				title: "Gaming",
				isSelected: false,
			},
			{
				id: 4,
				icon: "news",
				iconFill: "news-fill",
				title: "News",
				isSelected: false,
			},
			{
				id: 5,
				icon: "news",
				iconFill: "news-fill",
				title: "News",
				isSelected: false,
			},
			{
				id: 6,
				icon: "sports",
				iconFill: "sportss-fill",
				title: "News",
				isSelected: false,
			},
		],
	},
	{
		id: 5,
		GuideHeading: "",
		guideItems: [
			{
				id: 1,
				icon: "youtube-premium",
				title: "Youtube Premium",
				isSelected: false,
			},
			{
				id: 2,
				icon: "youtube-studio",
				title: "Youtube Studio",
				isSelected: false,
			},
			{
				id: 3,
				icon: "youtube-music",
				title: "Youtube Music",
				isSelected: false,
			},
			{
				id: 4,
				icon: "youtube-kids",
				title: "Youtube Kids",
				isSelected: false,
			},
		],
	},
	{
		id: 6,
		GuideHeading: "",
		guideItems: [
			{
				id: 1,
				icon: "settings",
				title: "Settings",
				link: "https://www.instagram.com",
			},
			{
				id: 2,
				icon: "reportHistory",
				title: "Report History",
				isSelected: false,
			},
			{
				id: 3,
				icon: "help",
				title: "Help",
				isSelected: false,
			},
			{
				id: 4,
				icon: "feedback",
				title: "Feedback",
				isSelected: false,
			},
		],
	},
];
