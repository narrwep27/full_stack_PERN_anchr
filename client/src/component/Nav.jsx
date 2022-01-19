import { Link } from 'react-router-dom';

export default function Nav(props) {
	const logout = (e) => {
		props.setAuth(false);
		props.setUser(null);
		localStorage.clear();
	};

	return (
		<div className='Nav'>
			<nav>
				<div className='nav-items-container'>
					<span className='nav-items'>
						<Link to='/home'>Home</Link>
					</span>
					<span className='nav-items'>
						<Link to='/history'>History</Link>
					</span>
					<span className='nav-items'>
						<Link to='/summary'>Summary</Link>
					</span>
					<span className='nav-items'>
						<Link to='/about'>About</Link>
					</span>

					<span className='nav-items'>
						<Link to='/'>Log Out</Link>
					</span>
				</div>
			</nav>
		</div>
	);
}
