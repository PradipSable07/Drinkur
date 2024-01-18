import styled from "styled-components";

export const Wrapper = styled.div`
	margin-bottom: 6rem;
	.form {
		background: var(--grey-100);
		display: grid;
		grid-template-columns: 1fr auto;

		.form-input {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			outline: none;
		}

		.btn {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
`;
