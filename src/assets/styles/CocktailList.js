import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;

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
export const ErrorWrapper = styled.div`
	min-height: 100dvh;
	text-align: center;

	.errorImg {
		width: 90dvh;
		max-width: 20.5rem;
	}
`;

export default Wrapper;
