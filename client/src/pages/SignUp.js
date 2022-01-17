import React from 'react';

export default function SignUp (props) {

	const testClick = () => {
		props.history.push('/')
	}
	return (
		<div className='SignUp'>
			<div className='signup-form-container-div'>
				<form>
					<div className='signup-form-div'>
						<input
							type='text'
							// value={}
							name='username'
							placeholder='Username'
							// onChange={}
							className='signup-form'
						/>
						<br />
					</div>

					<div className='signup-form-div'>
						<input
							type='password'
							// value={}
							name='password'
							placeholder='Password'
							// onChange={}
							className='signup-form'
						/>
						<br />
					</div>

					{/* <div className='signup-form-div'>
						<input
							type='text'
							// value={}
							name='confirm-password'
							placeholder='Confirm Password'
							// onChange={}
							className='signup-form'
						/>
						<br />
					</div> */}

					<div className='signup-form-div'>
						<input
							type='text'
							// value={}
							name='email'
							placeholder='Email Address'
							// onChange={}
							className='signup-form'
						/>
						<br />
					</div>
					<button onClick={testClick} className='signup-form-button'>Sign up</button>
				</form>
			</div>
		</div>
	);
}
