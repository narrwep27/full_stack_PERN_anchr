import { Link } from "react-router-dom";

export default function Nav(props) {
  const logout = (e) => {
    props.setAuth(false);
    props.setUser(null);
    props.setSessions([]);
    localStorage.clear();
  };

  return (
    <div className="Nav">
      <nav>
        <div class='nav-items-container'>
        <ul>
            <li className='nav-items'>
              <Link to="/home">Home</Link>
            </li>
            <li className='nav-items'>
              <Link to="/history">History</Link>
            </li>
            <li className='nav-items'>
              <Link to="/summary">Summary</Link>
            </li>
            <li className='nav-items'>
              <Link to="/about">About</Link>
            </li>
            </ul>
            </div>

            <div className='nav-items-container'>
            <Link to="/">
              Log Out
            </Link>
          
          </div>
      </nav>
    </div>
  );
}
