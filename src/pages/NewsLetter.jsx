import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsLetterUrl = "https://course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const response = await axios.post(newsLetterUrl, data);
		toast.success(response.data.msg);

		return redirect("/");
	} catch (error) {
		toast.error(error?.response.data.msg);
		return error;
	}
};
const NewsLetter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<Form className='form' method='POST'>
			<h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
				Our Newsletter
			</h4>
			{/* name */}
			<div className='form-row'>
				<label htmlFor='name' className='form-label'>
					First name
				</label>
				<input
					type='text'
					className='form-input'
					id='name'
					name='name'
					placeholder='Enter first name'
					defaultValue='Pradip'
				/>
			</div>
			{/* lastName */}
			<div className='form-row'>
				<label htmlFor='lastName' className='form-label'>
					Last name
				</label>
				<input
					type='text'
					className='form-input'
					id='lastName'
					name='lastName'
					placeholder='Enter last name'
					defaultValue='Sable'
				/>
			</div>
			{/* name */}
			<div className='form-row'>
				<label htmlFor='email' className='form-label'>
					Email
				</label>
				<input
					type='email'
					className='form-input'
					id='email'
					name='email'
					placeholder='Enter email'
					defaultValue='test@test.com'
					required
				/>
			</div>
			<button type='submit' className='btn btn-block' disabled={isSubmitting}>
				{isSubmitting ? "Subscribing..." : "Subscribe"}
			</button>
		</Form>
	);
};

export default NewsLetter;
