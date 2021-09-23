import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { AppContext } from "./components/context";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AppContext.Provider value={{ user, setUser }}>
            <Route path="/login">
              <Login  />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </AppContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
