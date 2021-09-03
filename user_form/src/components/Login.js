import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "./context";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);
  console.log(user);


  const [loginUser,setLoginUser] = useState([]);
  const [message, setMessage] = useState("");


  const handleChange = (event)=>{
      const {name,value} = event.target;
      setLoginUser({
        ...loginUser,
        [name]:value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    user.map((person) => {
      if (loginUser.userName === person.regUserName && loginUser.password === person.regPassword) {
        history.push("/dashboard");
      } else {
        setMessage(
          "please input correct username and password else create a account"
        );

      }
      return 0;
    });
  };
  console.log(loginUser.userName);

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
          name="userName"
          value={loginUser.userName}
          required
          placeholder="UserName"
          onChange ={handleChange}
          // onChange={(e) => setLoginUserName(e.target.value)}
        />

        <input
          type="password"
          value={loginUser.password}
          placeholder="Password"
          required
          name="password"
          onChange ={handleChange}
          // onChange={(e) => setLoginPassword(e.target.value)}
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
