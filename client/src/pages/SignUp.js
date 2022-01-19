import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

export default function SignUp (props) {
	const [values, setValues] = useState({})

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = await RegisterUser(values)
		setValues({})
		props.history.push('/')
	}

	return (
		<div className='SignUp'>
			<div className='signup-form-container-div'>
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
							type='password'
							name='password'
							placeholder='Password'
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
					<button className='signup-form-button'>Sign up</button>
				</form>
			</div>
		</div>
	);
}
