import { channel_2, thumbnail_1 } from "../assets/images";

function SearchVideo() {
	return (
		<div className="flex gap-4">
			<img
				className="rounded-xl w-[35%]"
				src={thumbnail_1}
				alt="Abstract & Logic - They Know (What is What)"
			/>

			<div className="flex-auto">
				<h2 className="text-lg">Abstract & Logic - They Know (What is What)</h2>

				<div className="text-gray-700 text-xs flex">
					<p>681K views</p>
					<p className="before:content-['•'] before:mx-1">9 hours ago</p>
				</div>

				<div className="flex items-center gap-2 my-3.5">
					<img className="w-6 h-6 rounded-full" src={channel_2} alt="Balls Deep" />
					<h3 className="text-xs text-gray-700 hover:text-dark-100">Balls Deep</h3>
				</div>

				<p className="text-xs line-clamp-2 text-gray-700">
					Abstract & Logic smash it again with this track titled 'What is What' - their remix of
					SecondCity has so far reached well over the
				</p>
			</div>
		</div>
	);
}
export default SearchVideo;
