import { useState } from "react";
import { LogInUser } from "../services/Auth";

export default function LogIn(props) {
  const [logIn, setLogIn] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setLogIn({ ...logIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await LogInUser(logIn);
    props.setUser(res);
    setLogIn({});
    props.setAuth(true);
    props.getSessions(res.id);
    props.history.push("/home");
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
