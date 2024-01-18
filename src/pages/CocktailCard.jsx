import { Link } from "react-router-dom";
import Wrapper from "../assets/styles/CocktailCard";

const CocktailCard = ({ id, name, image, glass, instruction, isAlcoholic }) => {
	return (
		<Wrapper>
			<div className='img-container'>
				<img src={image} alt={name} className='img' />
			</div>
			<div className='footer'>
				<h4>{name}</h4>
				<h5>{glass}</h5>
				<p>{isAlcoholic}</p>
				<Link to={`/cocktail/${id}`} className='btn btn-hipster'>
					Details
				</Link>
			</div>
		</Wrapper>
	);
};

export default CocktailCard;
