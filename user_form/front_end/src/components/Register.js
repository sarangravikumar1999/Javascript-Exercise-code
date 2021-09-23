import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { AppContext } from "./context";

const Register = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({});
  const [serverError, setServerError] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    let error = "";
    switch (name) {
      case "username":
        error =
          value.length < 5 || value.length > 20
            ? "Enter a valid user name"
            : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "phNo":
        error = value.length !== 10 ? "Enter a valid Phone Number" : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "password":
        error = value.length < 8 ? "Enter a valid password" : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "email":
        error = value.length < 0 ? "enter a valid email id" : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "gender":
        error = value.length < 0 ? "select a gender" : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "confirmPassword":
        error =
          formData.password !== value
            ? "please enter same password as above"
            : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      default:
        setErrors([]);
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = axios.post(
        "http://localhost:4000/api/users/register",
        formData
      );
      console.log(await response);
      if ((await response).data.success) {
        history.push("/login");
      }
    } catch (error) {
      setServerError(error.response.data.errors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {serverError.map((err) => {
          return <div>{err.msg}</div>;
        })}

        <div>
          <label htmlFor="username">Enter a UserName</label>
          <input
            type="text"
            value={formData.firstName}
            required
            onChange={handleChange}
            name="username"
          />
          <div>
            {"username" in errors ? <span>{errors.username}</span> : ""}
          </div>
        </div>
        <div>
          <label htmlFor="phNo">Enter the Phone number</label>
          <input
            type="number"
            name="phNo"
            value={formData.phNo}
            maxLength="10"
            required
            onChange={handleChange}
          />
          <div>{"phNo" in errors ? <span>{errors.phNo}</span> : ""}</div>
        </div>
        <div>
          <label htmlFor="email">Enter the Email id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Choose a gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
          <div>
            {"password" in errors ? <span>{errors.password}</span> : ""}
          </div>
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div>
            {"confirmPassword" in errors ? (
              <span>{errors.confirmPassword}</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
