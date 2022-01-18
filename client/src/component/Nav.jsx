import { Link } from "react-router-dom";

export default function Nav(props) {
  const logout = (e) => {
    props.setAuth(false)
    props.setUser(null)
    props.setSessions([]);
    localStorage.clear()
  };

  return (
    <div>
      <nav>
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
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
}
