import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "./context";

const Register = () => {
  const history = useHistory();
  const { setUser, user } = useContext(AppContext);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    let error = "";
    switch (name) {
      case "regUserName":
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
      case "regPassword":
        error = value.length < 8 ? "Enter a valid password" : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "email":
        error = value.length<0?"enter a valid email id":"";
        setErrors({
          ...errors,
          [name]:error
        })
        break;
        case "gender":
          error= value.length<0?"select a gender":"";
          setErrors({
            ...errors,
            [name]:error
          })
          break;
      case "confirmPassword":
        error =
          formData.regPassword !== value
            ? "please enter same password as above"
            : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      default:
        setErrors("");
        break;
    }
  };
  console.log("errors are", errors);
  console.log("--------------------------------");

  console.log("form data value", formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors) {
      const updateUser = [...user, formData];
      setUser(updateUser);
      setFormData({});
      history.push("/login");
    }
  };
  // user.map((person)=>{
  //   console.log(person.regPassword);
  // })

  // console.log(user);
  // console.log("------------------------");
  // console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="regUserName">Enter a UserName</label>
          <input
            type="text"
            value={formData.firstName}
            required
            onChange={handleChange}
            name="regUserName"
          />
          <div>
            {("regUserName" in errors )? <span>{errors.regUserName}</span> : ""}
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
          <div>{("phNo" in errors )? <span>{errors.phNo}</span> : ""}</div>
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
          <label htmlFor="regPassword">Password</label>
          <input
            type="password"
            name="regPassword"
            value={formData.regPassword}
            required
            onChange={handleChange}
          />
          <div>
            {("regPassword" in errors) ? <span>{errors.regPassword}</span> : ""}
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
            {("confirmPassword" in errors) ? (
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
