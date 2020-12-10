import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = (props) => {
  const [values, setValues] = useState([]);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [name, SetName] = useState("");
  const [age, SetAge] = useState(0);
  const [errors, setErrors] = useState({});

  const validation = () => {
    let errors = {};

    if (!email === "") {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email Address";
    }

    if (!password === "") {
      errors.password = "Password Required";
    } else if (password.length < 3) {
      errors.password = "Incorrect Password";
    }
    if (!name === "") {
      errors.name = "name Required";
    } else if (name.length < 3) {
      errors.name = "Incorrect name";
    }
    if (age <= 16) {
      errors.age = "age Required";
    } else if (age <= 16) {
      errors.age = "Incorrect age";
    }

    return errors;
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    setErrors(validation());
    const data = {
      email: email,
      password: password,
      name: name,
      age: age,
    };
    axios
      .post("http://localhost:5000/CreateNewUser", data)
      .then((response) => {
        console.log("response", response);
        const newArray = [...values];
        newArray.push(response.data);
        setValues(newArray);
        props.history.push("/Articles");
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  return (
    <div>
      <form onClick={handleSubmit1} className="Login">
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            required="true"
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
          ></input>
          {errors.email && <p className="input-error"> {errors.email} </p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
          ></input>
          {errors.password && (
            <p className="input-error"> {errors.password} </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            placeholder="Name"
            onChange={(e) => {
              SetName(e.target.value);
            }}
          ></input>
          {errors.name && <p className="input-error"> {errors.name} </p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAge1">Age</label>
          <input
            onChange={(e) => {
              SetAge(e.target.value);
            }}
            type="number"
            className="form-control"
            id="exampleInputAge1"
            aria-describedby="emailHelp"
            placeholder="Age"
          ></input>

          {errors.age && <p className="input-error"> {errors.age} </p>}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
