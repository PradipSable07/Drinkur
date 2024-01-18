import styled from "styled-components";

const Wrapper = styled.div`
	min-height: 100dvh;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		width: 90dvw;
		max-width: 15.5rem;
		display: block;
		margin-bottom: 2rem;
	}
	h3 {
		margin-bottom: 1rem;
	}
	a {
		color: var(--primary-500);
		text-transform: capitalize;
	}
	p {
		line-height: 0.5;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		color: var(--grey-500);
	}
`;
export default Wrapper;
