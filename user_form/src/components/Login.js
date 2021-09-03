import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "./context";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);
  console.log(user);

  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    user.map((person) => {
      if (loginUserName === person.name && loginPassword === person.password) {
        history.push("/dashboard");
      } else {
        setMessage(
          "please input correct username and password else create a account"
        );
        setLoginPassword("");
        setLoginUserName("");
      }
      return 0;
    });
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="login_form">
        <h1 className="login_formHeading">Login Form</h1>
        <div className="login_formText">
          {" "}
          Please enter the Username and Password
        </div>

        <input
          type="text"
          name="username"
          value={loginUserName}
          required
          placeholder="UserName"
          onChange={(e) => setLoginUserName(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <div className ="login_formMessages">{message && <span>{message}</span>}</div>
        <div className="login_formButton">
          <button type="submit">Login</button>
          <Link className="login_formRegister" to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
