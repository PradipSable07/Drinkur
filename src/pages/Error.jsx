import Wrapper from "../assets/styles/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img404 from "../assets/404-Error.svg";
const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status == 404) {
		return (
			<Wrapper>
				<div>
					<img src={img404} alt='404 not found' />
					<h3>Ohh!</h3>
					<p>We can't seem to find page you are looking for</p>
					<Link to='/'>Back to Home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h1>Something Happened</h1>
		</Wrapper>
	);
};

export default Error;
