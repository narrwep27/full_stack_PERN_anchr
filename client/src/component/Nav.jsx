import { Link } from "react-router-dom";

export default function Nav(props) {
  const logout = (e) => {
    props.setAuth(false);
    props.setUser(null);
    localStorage.clear();
  };

  return (
    <div className="Nav">
      <div class="nav-items-container">
        <span className="nav-items">
          <Link to="/">Home</Link>
        </span>
        <span className="nav-items">
          <Link to="/history">History</Link>
        </span>
        <span className="nav-items">
          <Link to="/summary">Summary</Link>
        </span>
        <span className="nav-items">
          <Link to="/about">About</Link>
        </span>
        <span className="nav-items" onClick={logout}>
          <Link to="/">Log Out</Link>
        </span>
      </div>
    </div>
  );
}
