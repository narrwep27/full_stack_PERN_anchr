import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogInUser } from '../services/Auth';
import { LoadUserSessions } from '../services/Session';
import toast from 'react-hot-toast'

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
		if(logIn.username && logIn.password){
			const res = await LogInUser(logIn);
			props.setUser(res);
			setLogIn({});
			props.setAuth(true);
			getSessions(res.id);
			toast('Logged in successfully', { style: { background: 'white', color: 'black', border: '2px solid green', textAlign: 'center' } });
		}
		else{
			toast('Please make sure you enter your username and password', { style: { background: 'white', color: 'black', border: '2px solid green', textAlign: 'center' } });
		}
	};

	return (
		<div className='SignIn'>
			<div className='signin-left-side'></div>

			<div className='signin-right-side'>
				<div className='signin-form-container-div'>
					<div className='anchor-logo-image'>
						<img src='https://i.imgur.com/VSgadZa.png' alt='anchr.' />
					</div>

					<form onSubmit={handleSubmit}>
						<div className='signin-form-div'>
							<input
								type='text'
								name='username'
								placeholder='Username'
								onChange={handleChange}
								className='signin-form'
								required
							/>
							<br />
						</div>

						<div className='signin-form-div'>
							<input
								type='password'
								name='password'
								placeholder='Password'
								onChange={handleChange}
								className='signin-form'
								// required
							/>
						</div>

						<div className='signin-form-buttons-div'>
							<button onClick={props.authClick} className='signin-form-button'>
								Log In
							</button>
							<br />
							<span className='signin-text'>Forgot password?</span>
							<br />
							<span className='signin-text'>
								Don't have an account? Register <Link to='/signup'>here!</Link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
