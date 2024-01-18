import { useRouteError } from "react-router-dom";
import noDataImg from "../assets/No-Data.svg";
import Wrapper from "../assets/styles/SingleErrorPage";
const SinglePageError = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<Wrapper>
			{" "}
			<img src={noDataImg} alt='No Data Found' />
			<h3>{error.message}</h3>
		</Wrapper>
	);
};
export default SinglePageError;
