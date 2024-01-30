import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SearchProvider from "./context/SearchContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={queryClient}>
				<SearchProvider>
<SidebarProvider>
	<App />

</SidebarProvider>				</SearchProvider>
			</QueryClientProvider>
		</Router>
	</React.StrictMode>
);
