import { useContext, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

const Login = ({
  userName,
  setUserName,
  password,
  setPassword,
  message,
  setMessage,
  regUserName,
  setLogin,
  regPassword,
}) => {
  const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, regUserName, password, regPassword);

    if (userName !== regUserName && password!==regPassword) {
      setMessage("Enter the valid userName else create a account");
    }
    else{
    setLogin(true);
    history.push("/dashboard");
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        {message? (<span>{message}</span>):null}
        <br />
        <button type="submit">Sign In</button>

        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};
export default Login;
