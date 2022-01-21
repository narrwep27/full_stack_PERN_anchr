import { useState } from 'react';
import { RegisterUser } from '../services/Auth';

export default function SignUp(props) {
	const [values, setValues] = useState({});

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await RegisterUser(values);
		setValues({});
		props.history.push('/');
	};

	return (
		<div className='SignUp'>
			<div className='signup-left-side'>
				<div className='signup-form-container-div'>
					<div className='anchor-logo-image'>
						<img src='https://i.imgur.com/VSgadZa.png' alt='anchr.' />
					</div>
					<span className='signup-text'>Let's get to know each other!</span>
					<form onSubmit={handleSubmit}>
						<div className='signup-form-div'>
							<input
								type='text'
								name='email'
								placeholder='Email Address'
								onChange={handleChange}
								className='signup-form'
							/>
							<br />
						</div>

						<div className='signup-form-div'>
							<input
								type='text'
								name='username'
								placeholder='Username'
								onChange={handleChange}
								className='signup-form'
							/>
							<br />
						</div>

						<div className='signup-form-div'>
							<input
								type='password'
								name='password'
								placeholder='Password'
								onChange={handleChange}
								className='signup-form'
							/>
							<br />
							<button className='signup-form-button'>Sign up</button>
							<button
								className='signup-form-cancel-button'
								onClick={() => {
									props.history.push('/');
								}}>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className='signup-right-side'></div>
		</div>
	);
}
