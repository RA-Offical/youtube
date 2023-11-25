import { Icon } from "./";

const Video = (props) => {
	const {
		videoThumbnail,
		videoTitle,
		channelName,
		videoViews,
		videoPublished,
		isVerified,
		channelThumbnail,
	} = props;
	return (
		<div className=" py-2">
			<img
				src={videoThumbnail}
				alt={videoTitle}
				className="rounded-xl w-full aspect-[16/9] object-cover"
			/>
			<div className="grid gap-3 grid-cols-[36px_1fr] mt-3">
				<img
					src={channelThumbnail}
					alt={channelName}
					className="rounded-full"
				/>

				<div className="">
					<h2 className="text-dark-100 font-medium text-base line-clamp-2 mb-1">
						{videoTitle}
					</h2>

					<div className="flex gap-2 items-center mb-px text-sm">
						<p className="text-gray-700 opacity-90 hover:opacity-100 cursor-pointer">
							{channelName}
						</p>
						{isVerified && (
							<Icon
								icon={"tick"}
								dimenStyle="w-4 h-4"
								appearanceStyle="text-gray-700"
							/>
						)}
					</div>

					<div className="text-gray-700 text-sm flex">
						<p>{videoViews} views</p>
						<p className="before:content-['•'] before:mx-1">
							{videoPublished}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
