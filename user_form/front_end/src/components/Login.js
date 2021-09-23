import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "./context";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);
  console.log(user);

  const [loginUser, setLoginUser] = useState([]);
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        loginUser
      );
      localStorage.setItem("token", response.data.token);
      if (response.data.success) {
        history.push("/dashboard");
      }
    } catch (error) {
      setErrors(error.response.data.msg);
    }
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="login_form">
        <h1 className="login_formHeading">Login Form</h1>
        <div className="login_formText">
          Please enter the Username and Password
        </div>

        <input
          type="text"
          name="username"
          value={loginUser.userName}
          required
          placeholder="UserName"
          onChange={handleChange}
        />

        <input
          type="password"
          value={loginUser.password}
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />

        <div className="login_formMessages">
          {errors && <span>{errors}</span>}
        </div>
        <div className="login_formButton">
          <button type="submit">Login</button>
          <Link className="login_formRegister" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
