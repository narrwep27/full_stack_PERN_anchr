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
		<div className='Login'>
			<div className='login-form-container-div'>
				<div className='anchr-logo-image'>
					<img src='https://i.imgur.com/cC31e2t.jpg' alt='anchr.' />
				</div>
				<form onSubmit={handleSubmit}>
					<div className='login-form-div'>
						<input
							type='text'
							name='username'
							placeholder='Username'
							onChange={handleChange}
							className='login-form'
							required
						/>
						<br />
					</div>

					<div className='login-form-div'>
						<input
							type='password'
							name='password'
							placeholder='Password'
							onChange={handleChange}
							className='signup-form'
							required
						/>
						<br />
						<button onClick={props.authClick} className='login-form-button'>
							Log In
						</button>
						<Link to='/forgotpassword'>
							<span className='forgot-password'>Forgot password?</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
