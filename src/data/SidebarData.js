import { channel_avatar_1 } from "../assets/images";
import { channel_avatar_2 } from "../assets/images";
export default [
	{
		id: 1,
		GuideHeading: "",
		nestedGuide: [
			{
				id: 2,
				GuideHeading: "",
				guideItems: [
					{
						id: 3,
						icon: "home",
						iconFill: "home-fill",
						guideText: "Home",
						isSelected: true,
					},
					{
						id: 4,
						icon: "shorts",
						iconFill: "shorts-fill",
						guideText: "Shorts",
						isSelected: false,
					},
					{
						id: 5,
						icon: "subscription",
						iconFill: "subscription-fill",
						guideText: "Shorts",
						isSelected: false,
					},
				],
			},
			{
				id: 6,
				GuideHeading: "You >",
				guideItems: [
					{
						id: 7,
						icon: "channel",
						iconFill: "channel-fill",
						guideText: "Channel",
						isSelected: false,
					},
					{
						id: 8,
						icon: "history",
						iconFill: "history-fill",
						guideText: "History",
						isSelected: false,
					},
					{
						id: 9,
						icon: "video",
						guideText: "Your Videos",
						link: "https://www.instagram.com",
					},
					{
						id: 10,
						icon: "watchlater",
						iconFill: "watchlater-fill",
						guideText: "WatchLater",
						isSelected: false,
					},
				],
			},
		],
	},

	{
		id: 11,
		GuideHeading: "Subscriptions",
		guideItems: [
			{
				id: 12,
				image: channel_avatar_1,
				guideText: "Sk Well-Wisher Techno",
				isSelected: false,
			},
			{
				id: 13,
				image: channel_avatar_2,
				guideText: "Deadly Vines",
				isSelected: false,
			},
			{
				id: 14,
				icon: "add",
				guideText: "Browse Channel",
				link: "https://www.instagram.com",
				isSelected: false,
			},
		],
	},
	{
		id: 15,
		GuideHeading: "Explore",
		guideItems: [
			{
				id: 16,
				icon: "trending",
				iconFill: "trending-fill",
				guideText: "Trending",
				isSelected: false,
			},
			{
				id: 17,
				icon: "music",
				iconFill: "music-fill",
				guideText: "Music",
				isSelected: false,
			},
			{
				id: 18,
				icon: "gaming",
				iconFill: "gaming-fill",
				guideText: "Gaming",
				isSelected: false,
			},
			{
				id: 19,
				icon: "news",
				iconFill: "news-fill",
				guideText: "News",
				isSelected: false,
			},

			{
				id: 20,
				icon: "sports",
				iconFill: "sports-fill",
				guideText: "Sports",
				isSelected: false,
			},
		],
	},
	{
		id: 21,
		GuideHeading: "More from Youtube",
		guideItems: [
			{
				id: 22,
				icon: "youtube-premuim",
				guideText: "Youtube Premuim",
				isSelected: false,
			},
			{
				id: 23,
				icon: "youtube-studio",
				guideText: "Youtube Studio",
				link: "https://www.instagram.com",
			},
			{
				id: 24,
				icon: "youtube-music",
				guideText: "Youtube Music",
				link: "https://www.instagram.com",
			},
			{
				id: 25,
				icon: "youtube-kids",
				guideText: "Youtube Kids",
				link: "https://www.instagram.com",
			},
		],
	},
	{
		id: 26,
		GuideHeading: "",
		guideItems: [
			{
				id: 27,
				icon: "settings",
				guideText: "Settings",
				link: "https://www.instagram.com",
			},
			{
				id: 28,
				icon: "reportHistory",
				guideText: "Report History",
				isSelected: false,
			},
			{
				id: 29,
				icon: "help",
				guideText: "Help",
				isSelected: false,
			},
			{
				id: 30,
				icon: "feedback",
				guideText: "Feedback",
				isSelected: false,
			},
		],
	},
];
