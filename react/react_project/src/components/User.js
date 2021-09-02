import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";

const User = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regUserName, setRegUserName] = useState("");
  const [gender, setGender] = useState(null);
  const [phNo, setPhnNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <BrowserRouter>
        <Switch>
          {!login ? (
            <>
              <Route path="/login">
                <Login
                  userName={userName}
                  password={loginPassword}
                  setUserName={setUserName}
                  setPassword={setLoginPassword}
                  message={message}
                  setMessage={setMessage}
                  regUserName={regUserName}
                  setLogin={setLogin}
                  regPassword={regPassword}
                />
              </Route>
              <Route path="/register">
                <Register
                  message={message}
                  setMessage={setMessage}
                  regUserName={regUserName}
                  setRegUserName={setRegUserName}
                  setGender={setGender}
                  setPhnNo={setPhnNo}
                  phNo={phNo}
                  gender={gender}
                  email={email}
                  setEmail={setEmail}
                  regPassword={regPassword}
                  setRegPassword={setRegPassword}
                />
              </Route>
            </>
          ) : (
            <>
              <Route path="/dashboard">
                <Dashboard userName={userName} />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default User;
