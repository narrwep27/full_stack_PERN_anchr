import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogInUser } from '../services/Auth';
import { LoadUserSessions } from '../services/Session';

export default function LogIn(props) {
	const [logIn, setLogIn] = useState({ username: '', password: '' });
	const [sessions, setSessions] = useState([]);

	const handleChange = (e) => {
		setLogIn({ ...logIn, [e.target.name]: e.target.value });
	};

	const getSessions = async (id) => {
		const userSessions = await LoadUserSessions(id);
		setSessions(userSessions);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await LogInUser(logIn);
		props.setUser(res);
		setLogIn({});
		props.setAuth(true);
		getSessions(res.id);
	};

	return (
		<div className='SignUp'>
			<div className='signup-form-container-div'>
				<div className='anchor-logo-image'>
					<img src='https://i.imgur.com/cC31e2t.jpg' alt='anchr.' />
				</div>

				<form className='sign-up-form' onSubmit={handleSubmit}>
					<div className='signup-form-div'>
						<input
							type='text'
							name='username'
							placeholder='Username'
							onChange={handleChange}
							className='signup-form'
							required
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
							required
						/>
						<br />
					</div>
				</form>
				<div className='login-button-div'>
					<button onClick={props.authClick} className='signup-form-button'>
						Log In
					</button>
					<br />
					<span className='forgot-password-text'>Forgot password?</span>
					<br />
					<span className='signup-here-text'>
						Don't have an account? Register <Link to='/signup'>here!</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
