import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from ".";
import { getVideoInformation } from "../utils/api";
import { useQuery } from "react-query";

const HomeVideo = ({ videoId }) => {
	const { data } = useQuery({
		queryKey: ["video", videoId],
		queryFn: () => getVideoInformation(videoId),
		enabled: !!videoId,
	});

	const {
		videoThumbnail,
		videoTitle,
		channelName,
		channelThumbnail,
		channelURL,
		isVerified,
		videoViews,
		videoPublished,
	} = data || {};

	return (
		<SkeletonTheme baseColor="#ccc" highlightColor="#e6e6e6">
			<div className=" py-2">
				{videoThumbnail ? (
					<img
						src={videoThumbnail}
						alt={videoTitle}
						className="rounded-xl w-full aspect-video object-cover"
					/>
				) : (
					<Skeleton className="rounded-xl aspect-video" inline={true} />
				)}
				<div className="grid gap-3 grid-cols-[36px_1fr] mt-3 cursor-pointer">
					<img src={channelThumbnail} alt={channelName} className="rounded-full" />

					<div className="cursor-pointer">
						<h2 className="text-dark-100 font-medium text-base line-clamp-2 mb-1">{videoTitle}</h2>

						<div className="flex gap-2 items-center mb-px text-sm">
							<p
								href={channelURL}
								target="_blank"
								className="text-gray-700 opacity-90 hover:opacity-100">
								{channelName}
							</p>
							{isVerified && (
								<Icon icon={"tick"} dimenStyle="w-4 h-4" appearanceStyle="text-gray-700" />
							)}
						</div>

						{videoViews && (
							<div className="text-gray-700 text-sm flex">
								<p>{videoViews} views</p>
								<p className="before:content-['•'] before:mx-1">{videoPublished}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default HomeVideo;
