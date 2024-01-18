import { NavLink } from "react-router-dom";
import Wrapper from "../assets/styles/Navbar";
const Navbar = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<span className='logo'>DrinKur🥴:)</span>
				<div className='nav-items'>
					<NavLink to='/' className='nav-link'>
						Home
					</NavLink>
					<NavLink to='about' className='nav-link'>
						About
					</NavLink>
					<NavLink to='newsletter' className='nav-link'>
						NewsLetter
					</NavLink>
				</div>
			</div>
		</Wrapper>
	);
};
export default Navbar;
