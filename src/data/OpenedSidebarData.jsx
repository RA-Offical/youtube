import { channel_avatar_1 } from "../assets/images";
import { channel_avatar_2 } from "../assets/images";
import { FeedTitle, OpenedSidebarGuideCategoryTitle } from "../components";
export default [
	{
		id: 1,
		GuideHeading: "",
		nestedGuide: [
			{
				id: 1,
				GuideHeading: "",
				guideItems: [
					{
						id: 1,
						icon: "home",
						iconFill: "home-fill",
						guideText: "Home",
					},
					{
						id: 2,
						icon: "shorts",
						iconFill: "shorts-fill",
						guideText: "Shorts",
					},
					{
						id: 3,
						icon: "subscription",
						iconFill: "subscription-fill",
						guideText: "Subscriptions",
					},
				],
			},
			{
				id: 2,
				GuideHeading: function () {
					return <FeedTitle />;
				},
				guideItems: [
					{
						id: 1,
						icon: "channel",
						iconFill: "channel-fill",
						guideText: "Channel",
					},
					{
						id: 2,
						icon: "history",
						iconFill: "history-fill",
						guideText: "History",
					},
					{
						id: 3,
						icon: "video",
						guideText: "Your Videos",
						link: "https://www.instagram.com",
					},
					{
						id: 4,
						icon: "watchlater",
						iconFill: "watchlater-fill",
						guideText: "WatchLater",
					},
				],
			},
		],
	},

	{
		id: 11,
		GuideHeading: function () {
			return <OpenedSidebarGuideCategoryTitle text={"Subscriptions"} />;
		},
		guideItems: [
			{
				id: 1,
				image: channel_avatar_1,
				guideText: "Sk Well-Wisher Techno",
			},
			{
				id: 2,
				image: channel_avatar_2,
				guideText: "Deadly Vines",
			},
			{
				id: 3,
				icon: "add",
				guideText: "Browse Channel",
				link: "https://www.instagram.com",
			},
		],
	},
	{
		id: 15,
		GuideHeading: function () {
			return <OpenedSidebarGuideCategoryTitle text={"Explore"} />;
		},
		guideItems: [
			{
				id: 1,
				icon: "trending",
				iconFill: "trending-fill",
				guideText: "Trending",
			},
			{
				id: 2,
				icon: "music",
				iconFill: "music-fill",
				guideText: "Music",
			},
			{
				id: 3,
				icon: "gaming",
				iconFill: "gaming-fill",
				guideText: "Gaming",
			},
			{
				id: 4,
				icon: "news",
				iconFill: "news-fill",
				guideText: "News",
			},
			{
				id: 5,
				icon: "sports",
				iconFill: "sports-fill",
				guideText: "Sports",
			},
		],
	},
	{
		id: 21,
		GuideHeading: function () {
			return (
				<OpenedSidebarGuideCategoryTitle text={"More from Youtube"} />
			);
		},
		guideItems: [
			{
				id: 1,
				icon: "youtube-premuim",
				guideText: "Youtube Premuim",
			},
			{
				id: 2,
				icon: "youtube-studio",
				guideText: "Youtube Studio",
				link: "https://www.instagram.com",
			},
			{
				id: 3,
				icon: "youtube-music",
				guideText: "Youtube Music",
				link: "https://www.instagram.com",
			},
			{
				id: 4,
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
				id: 1,
				icon: "settings",
				guideText: "Settings",
				link: "https://www.instagram.com",
			},
			{
				id: 2,
				icon: "reportHistory",
				guideText: "Report History",
			},
			{
				id: 3,
				icon: "help",
				guideText: "Help",
			},
			{
				id: 4,
				icon: "feedback",
				guideText: "Feedback",
			},
		],
	},
];
