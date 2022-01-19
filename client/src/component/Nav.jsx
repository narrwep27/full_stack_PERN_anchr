import { Link } from 'react-router-dom';

export default function Nav(props) {
<<<<<<< HEAD
	const logout = (e) => {
		props.setAuth(false);
		props.setUser(null);
		props.setSessions([]);
		localStorage.clear();
	};

	return (
		<div>
			<nav>
				<Link style={{ textDecoration: 'none', color: 'black' }} to='/home'>
					<span className='nav-bar-links'>Home</span>
				</Link>
				<Link style={{ textDecoration: 'none', color: 'black' }} to='/history'>
					<span className='nav-bar-links'>History</span>
				</Link>
				<Link style={{ textDecoration: 'none', color: 'black' }} to='/summary'>
					<span className='nav-bar-links'>Summary</span>
				</Link>
				<Link style={{ textDecoration: 'none', color: 'black' }} to='/about'>
					<span className='nav-bar-links'>About</span>
				</Link>
				<Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
					<span onClick={logout} className='nav-bar-links'>
						Log Out
					</span>
				</Link>
			</nav>
		</div>
	);
=======
  const logout = (e) => {
    props.setAuth(false);
    props.setUser(null);
    localStorage.clear();
  };

  return (
    <div>
      <nav>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <span className="nav-bar-links">Home</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/history">
          <span className="nav-bar-links">History</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/summary">
          <span className="nav-bar-links">Summary</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <span className="nav-bar-links">About</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <span onClick={logout} className="nav-bar-links">
            Log Out
          </span>
        </Link>
      </nav>
    </div>
  );
>>>>>>> 3a715428552b3ba8db64ce63702f4c075888d3f5
}
