import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home/Home";
import ErrorBoundary from "./utils/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary>
				<Home />
			</ErrorBoundary>
		</QueryClientProvider>
	);
}

export default App;
