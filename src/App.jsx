import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	Cocktail,
	Error,
	Home,
	Landing,
	NewsLetter,
	SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				loader: landingLoader(queryClient),
				errorElement: <SinglePageError />,
				element: <Landing />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "newsletter",
				element: <NewsLetter />,
				action: newsLetterAction,
			},
			{
				path: "cocktail/:id",
				element: <Cocktail />,
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader(queryClient),
			},
		],
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
