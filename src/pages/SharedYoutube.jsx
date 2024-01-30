import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarProvider from "../context/SidebarContext";
import { Header, Sidebar } from "../components";

function SharedYoutube() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div>
			<Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
			<div className="flex">
				<SidebarProvider>
					<Sidebar isSidebarOpen={isSidebarOpen} />
				</SidebarProvider>

				<main className="overflow-clip">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
export default SharedYoutube;
