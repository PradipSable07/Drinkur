import { Form, useNavigation } from "react-router-dom";
import { Wrapper } from "../assets/styles/SearchForm";

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<Wrapper>
			<Form className='form'>
				<input
					type='search'
					name='search'
					id='search'
					className='form-input'
					defaultValue={searchTerm}
				/>
				<button type='submit' className='btn btn-block' disabled={isSubmitting}>
					{isSubmitting ? "Searching..." : "Search"}
				</button>
			</Form>
		</Wrapper>
	);
};
export default SearchForm;
