import styled from "styled-components";

const Wrapper = styled.article`
	background: var(--grey-100);
	box-shadow: var(--shadow-2);
	transition: var(--transition);
	border-radius: var(--borderRadius);
	display: grid;
	grid-template-rows: auto 1fr;
	div:hover {
		box-shadow: var(--shadow-4);
	}
	.img {
		height: 15rem;
		border-top-left-radius: var(--borderRadius);
		border-top-right-radius: var(--borderRadius);
	}
	.footer {
		position: relative;
		padding: 1.5rem;

		h4 {
			margin-bottom: 0.5rem;
			font-weight: 700;
		}
		h5 {
			margin-bottom: 0.5rem;
		}
		p {
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
		}
	}
	.btn:hover {
		animation: wobble 0.5s ease;
	}
`;
export default Wrapper;
