import styled, { keyframes } from "styled-components";
const wobble = keyframes`

	0% { transform: translateX(0%)},
	15%{ transform: translateX(-5%) rotate(-5deg) },

	45% { transform: translateX(4.5%) rotate(-3deg)},

	75% { transform: translateX(-5%) rotate(-1deg) },
	100% { transform: translateX(0%)},
`;

const Wrapper = styled.nav`
	background: var(--grey-100);
	.nav-center {
		display: flex;
		width: var(--view-width);
		max-width: var(--view-max-width);
		margin: 0 auto;
		flex-direction: column;
		padding: 1.5rem 2rem;
	}
	.logo {
		font-size: clamp(1.5rem, 4vw, 3rem);
		color: var(--primary-800);
		font-weight: 700;
		text-transform: capitalize;
		letter-spacing: var(--letterSpacing);
	}
	.nav-items {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	.nav-link {
		text-decoration: none;
		color: var(--grey-900);
		padding: 0.4rem 0.4rem 0.4rem 0;
		transition: var(--transition);
		letter-spacing: var(--letterSpacing);
	}
	.nav-link:hover {
		color: var(--primary-500);
		text-decoration: underline;
		transition: var(--transition);

		animation: ${wobble} 0.5s ease-in;
	}
	.active {
		color: var(--primary-500);
	}
	// MEDIA QUERIES
	@media (min-width: 768px) {
		.nav-center {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		.nav-items {
			flex-direction: row;
			margin-top: 0;
		}
	}
`;

export default Wrapper;
