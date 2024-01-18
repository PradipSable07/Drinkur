import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/styles/CocktailPage";
import { useQuery } from "@tanstack/react-query";
const singleCocktailUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleDrinkQuery = (id) => {
	return {
		queryKey: ["cocktail", id],
		queryFn: async () => {
			const { data } = await axios.get(`${singleCocktailUrl}${id}`);
			return data;
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const { id } = params;
		await queryClient.ensureQueryData(singleDrinkQuery(id));
		return { id };
	};
const Cocktail = () => {
	const { id } = useLoaderData();

	const { data } = useQuery(singleDrinkQuery(id));
	if (!data) return <Navigate to='/' />;
	const singleDrink = data.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb: image,
		strGlass: glass,
		strAlcoholic: isAlcoholic,
		strCategory: category,
		strInstructions: instructions,
	} = singleDrink;
	const Ingredients = Object.keys(singleDrink)
		.filter(
			(key) => key.startsWith("strIngredient") && singleDrink[key] !== null
		)
		.map((key) => singleDrink[key]);

	return (
		<Wrapper>
			<header>
				<Link to='/' className='btn'>
					Home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className='drink'>
				<img src={image} alt={name} className='img' />
				<div className='drink-info'>
					<p>
						{" "}
						<span className='drink-data'>Category:</span>
						{category}
					</p>
					<p>
						<span className='drink-data'>info:</span> {isAlcoholic}
					</p>
					<p>
						{" "}
						<span className='drink-data'>Name:</span>
						{name}
					</p>
					<p>
						{" "}
						<span className='drink-data'>Glass:</span>
						{glass}
					</p>
					<p>
						{" "}
						<span className='drink-data'>Glass:</span>
						{Ingredients.map((ingredient, index) => {
							return (
								<span className='ing' key={index}>
									{ingredient}
									{index < Ingredients.length - 1 ? "," : "."}
								</span>
							);
						})}
					</p>
					<p>
						{" "}
						<span className='drink-data'>Instructions:</span>
						{instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Cocktail;
