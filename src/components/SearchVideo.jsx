import { useQuery } from "react-query";
import { getVideoInformation } from "../utils/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SearchVideo({ videoId }) {
	const { data } = useQuery({
		queryKey: ["video", videoId],
		queryFn: () => getVideoInformation(videoId),
	});

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
	} = data || {};

	return (
		<SkeletonTheme baseColor="#ccc" highlightColor="#e6e6e6">
			<div className="grid grid-cols-[35%_1fr] gap-4 items-start">
				{videoThumbnail ? (
					<img
						className="rounded-xl w-full aspect-video object-cover"
						src={videoThumbnail}
						alt=""
					/>
				) : (
					<Skeleton inline={true} className="rounded-xl w-full aspect-video object-cover" />
				)}

				<div className="grid grid-cols-[35%_1fr]-auto overflow-hidden">
					<h2 className="text-lg">{videoTitle || <Skeleton inline={true} />}</h2>

					{videoViews ? (
						<div className="text-gray-700 text-xs flex">
							<p>{videoViews} views</p>
							<p className="before:content-['•'] before:mx-1">{videoPublished}</p>
						</div>
					) : (
						<Skeleton inline={true} count={0.7} />
					)}

					<div className="flex items-center gap-2 my-3.5">
						{channelThumbnail ? (
							<img className="w-6 h-6 rounded-full" src={channelThumbnail} alt="Balls Deep" />
						) : (
							<Skeleton inline={true} circle={true} width={24} height={24} />
						)}
						<h3 className="text-xs text-gray-700 hover:text-dark-100 flex-1">
							{channelName || <Skeleton inline={true} count={0.3} />}
						</h3>
					</div>

					<p className="text-xs overflow-ellipsis overflow-hidden whitespace-nowrap text-gray-700">
						{videoDescription}
					</p>
				</div>
			</div>
		</SkeletonTheme>
	);
}
export default SearchVideo;
