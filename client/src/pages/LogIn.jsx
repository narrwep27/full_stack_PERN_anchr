import { useState } from "react";

export default function LogIn(props) {
  const [logIn, setLogIn] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUserAuth(true);
  };

  const handleChange = (e) => {
    setLogIn({ ...logIn, [e.target.name]: e.target.value });
  };

  const testClick = () => {
    props.history.push("/signup");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-div">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="signup-form" />
          <br />
        </div>

        <div className="signup-form-div">
          <input type="text" name="password" placeholder="Password" onChange={handleChange} className="signup-form" />
          <br />
        </div>
        <button onClick={props.authClick} className="signup-form-button">
          Log In
        </button>
      </form>
      <button onClick={testClick} className="signup-form-button">
        Sign up
      </button>
    </div>
  );
}
