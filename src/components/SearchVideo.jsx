function SearchVideo(props) {
	const {
		videoThumbnail,
		videoTitle,
		channelName,
		videoViews,
		videoPublished,
		isVerified,
		channelThumbnail,
		videoURL,
		channelURL,
		videoDescription,
	} = props;

	return (
		<div className="flex gap-4">
			<img className="rounded-xl w-[35%] aspect-video object-cover" src={videoThumbnail} alt="" />

			<div className="flex-auto overflow-hidden">
				<h2 className="text-lg">{videoTitle}</h2>

				<div className="text-gray-700 text-xs flex">
					<p>{videoViews} views</p>
					<p className="before:content-['•'] before:mx-1">{videoPublished}</p>
				</div>

				<div className="flex items-center gap-2 my-3.5">
					<img className="w-6 h-6 rounded-full" src={channelThumbnail} alt="Balls Deep" />
					<h3 className="text-xs text-gray-700 hover:text-dark-100">{channelName}</h3>
				</div>

				<p className="text-xs overflow-ellipsis overflow-hidden whitespace-nowrap text-gray-700">
					{videoDescription}
				</p>
			</div>
		</div>
	);
}
export default SearchVideo;
