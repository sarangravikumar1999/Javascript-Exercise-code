import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "./context";

const Login = () => {

    const history = useHistory();
    const {user} = useContext(AppContext);
    console.log(user);
    
  
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message,setMessage]= useState("")

  const handleSubmit = (e)=>{
        e.preventDefault();
        user.map(person=>{
            if(loginUserName===person.name && loginPassword===person.password){
                history.push("/dashboard");
            }
            else{
                setMessage("please input correct username and password else create a account");
                setLoginPassword("");
                setLoginUserName("");
               
            }
            return 0;
        })
        
    }

  return (
    <div>
      <form onSubmit  ={handleSubmit}>
        <div>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            name="username"
            value={loginUserName}
            required
            onChange={(e) => setLoginUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div>
            {message && <span>{message}</span>}
        </div>
        <div>
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
