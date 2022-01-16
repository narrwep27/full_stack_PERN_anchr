import React from 'react';

export default function SignIn(props) {
	return (
		<div className='SignIn'>
			<div className='signin-form-container-div'>
				<img
					src='https://i.imgur.com/RTg27Tc.png'
					alt='Please sign in!'
					className='anchr-signin-image'
				/>
				<form>
					{/* Add onSubmit to Form */}

					<div className='signin-form-div'>
						<input
							type='text'
							// value={}
							name='username'
							placeholder='Username'
							// onChange={}
							className='signin-form'
						/>
						<br />
					</div>

					<div className='signin-form-div'>
						<input
							type='password'
							// value={}
							name='password'
							placeholder='Password'
							// onChange={}
							className='signin-form'
						/>
						<br />
					</div>

					<button onClick={props.authClick} className='signin-form-button'>
						Sign in
					</button>
				</form>
				<div className='forgot-password'>Forgot password?</div>
			</div>
		</div>
	);
}
