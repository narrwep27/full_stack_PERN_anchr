import { useState } from "react";
import { LogInUser } from "../services/Auth";
import { LoadUserSessions } from "../services/Session";

export default function LogIn(props) {
  const [logIn, setLogIn] = useState({ username: "", password: "" });
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
    console.log(res);
    props.setUser(res);
    setLogIn({});
    props.setAuth(true);
    getSessions(res.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-div">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="signup-form" required />
          <br />
        </div>

        <div className="signup-form-div">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="signup-form" required />
          <br />
        </div>

        <button onClick={props.authClick} className="signup-form-button">
          Log In
        </button>
      </form>
      <button onClick={() => props.history.push("/signup")} className="signup-form-button">
        Sign up
      </button>
    </div>
  );
}
