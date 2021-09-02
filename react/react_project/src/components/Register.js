import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Register = ({
  setRegUserName,
  regUserName,
  setGender,
  setEmail,
  email,
  setPhnNo,
  phNo,
  setRegPassword,
  regPassword,
  message,
  setMessage,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regPassword !== confirmPassword) {
      setMessage("enter the correct password");
    } else {
      setMessage("user registered successfully");
      history.push("/login");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input
            type="text"
            value={regUserName}
            required
            onChange={(e) => setRegUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="number"
            maxLength="10"
            value={phNo}
            required
            onChange={(e) => setPhnNo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender
          <input
            type="radio"
            defaultChecked
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
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            onChange={(e) => setRegPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password
          <input
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
        {message && <span>{message}</span>}
      </form>
    </div>
  );
};

export default Register;
