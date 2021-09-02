import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "./context";

const Register = () => {
  const history = useHistory();

  const { setUser, user } = useContext(AppContext);

  const [regUserName, setRegUserName] = useState("");
  const [phNo, setPhNo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log("---------------");

    if (password !== confirmPassword) {
      setMessage("password does not match please renter the password");
      setPassword("")
      setConfirmPassword("")
    } else {
      const updateUser = [
        ...user,
        {
          name: regUserName,
          phNo,
          email,
          gender,
          password,
        },
      ];
      setUser(updateUser);
      history.push("/login");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="regUserName">Enter a UserName</label>
          <input
            type="text"
            value={regUserName}
            required
            onChange={(e) => setRegUserName(e.target.value)}
            name="regUserName"
          />
        </div>
        <div>
          <label htmlFor="phNo">Enter the Phone number</label>
          <input
            type="number"
            name="phNo"
            value={phNo}
            required
            onChange={(e) => setPhNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Enter the Email id</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Choose a gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </div>
        <div>
          <label htmlFor="regPassword">Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            name="regPassword"
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div>{message ? <span>{message}</span> : null}</div>
      </form>
    </div>
  );
};

export default Register;
