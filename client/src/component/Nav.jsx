import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
          <span>Home</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/history">
          <span>History</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/summary">
          <span>Summary</span>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <span>Log Out</span>
        </Link>
      </nav>
    </div>
  );
}
