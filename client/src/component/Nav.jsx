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
        <div classaName="nav-div">
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
            <Link to="/">
              <li  className='nav-items' onClick={logout}>Log Out</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
