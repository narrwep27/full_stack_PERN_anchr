import { Link } from 'react-router-dom';

export default function Nav(props) {
	const logout = (e) => {
		props.setAuth(false);
		props.setUser(null);
		localStorage.clear();
	};

	return (
		<div className='Nav'>
			<div className='nav-items-container'>
				<span className='nav-items'>
					<Link to='/'>HOME</Link>
				</span>
				<span className='nav-items'>
					<Link to='/history'>HISTORY</Link>
				</span>
				<span className='nav-items'>
					<Link to='/summary'>SUMMARY</Link>
				</span>
				<span className='nav-items'>
					<Link to='/about'>ABOUT</Link>
				</span>
			</div>

			<div className='nav-items-logout'>
				<Link to='/'>
					<button className='logout-btn' onClick={logout}>
						LOGOUT
					</button>
				</Link>
			</div>
		</div>
	);
}
