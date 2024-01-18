import notFoundImg from "../assets/Not-Found.svg";
import Wrapper, { ErrorWrapper } from "../assets/styles/CocktailList";
import CocktailCard from "../pages/CocktailCard";
const CocktailList = ({ cockTailList }) => {
	if (!cockTailList) {
		return (
			<ErrorWrapper>
				<img src={notFoundImg} alt='not found' className='errorImg' />
				<h3>Opp's.. No Cocktails matched your search criteria</h3>
			</ErrorWrapper>
		);
	}
	const formattedCockTailList = cockTailList.map((item) => {
		const {
			idDrink,
			strDrink,
			strDrinkThumb,
			strGlass,
			strInstructions,
			strAlcoholic,
		} = item;

		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			glass: strGlass,
			instruction: strInstructions,
			isAlcoholic: strAlcoholic,
		};
	});
	return (
		<Wrapper>
			{formattedCockTailList.map((item) => {
				return <CocktailCard key={item.id} {...item} />;
			})}
		</Wrapper>
	);
};
export default CocktailList;
