import { logo } from "../assets/icons";
import { profile_avatar } from "../assets/images";
import { Icon, Search } from "./";

const Header = () => {
	return (
		<header className="sticky top-0 z-10  flex items-center justify-between h-14 px-4 bg-white">
			{/* logo section */}

			<div className="shrink-0 flex items-center gap-4 mr-16">
				<button className="p-2  rounded-full hover:bg-gray-300">
					<Icon icon={"menu"} />
				</button>

				<div className="relative">
					<img src={logo} alt="Youtube" className="w-[90px]" />

					<span className="absolute -top-1.5 -right-4 text-[10px] text-gray-700">
						PK
					</span>
				</div>
			</div>

			{/* Search Component */}
			<Search />

			{/* right section */}
			<div className="shrink-0 flex gap-2 ml">
				<button className="p-2 rounded-full hover:bg-gray-300">
					<Icon icon={"create"} />
				</button>

				<button className="p-2 rounded-full hover:bg-gray-300">
					<Icon icon={"bell"} />
				</button>

				<button className="mx-3.5">
					<img
						src={profile_avatar}
						alt="Rashid Ameer"
						className="w-8 h-8 rounded-full"
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
