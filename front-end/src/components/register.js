import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
const Register = () => {
  const [values, setValues] = useState([]);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [name, SetName] = useState("");
  const [age, SetAge] = useState(0);
  const [errors, setErrors] = useState("");
  let history = useHistory();

  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    SetPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    SetName(e.target.value);
  };
  const handleAgeChange = (e) => {
    SetAge(e.target.value);
  };
  const handleSubmit1 = () => {
    setErrors("");
    if (email.length < "" && !/\S+@\S+\.\S+/.test(email)) {
      setErrors("Email required");
      return;
    } else if (password.length < 3) {
      setErrors("password is required !");
      return;
    }else if (name.length === "") {
      setErrors("name Required");
      return;
    }else if (age <= 16) {
      setErrors("age Required");
      return;
    }
    axios
      .post("http://localhost:5000/CreateNewUser", {
        email: email,
        password: password,
        name: name,
        age: age,
      })
      .then((result) => {
        if (!result.data.errors) {
          
          history.push("/Login");
        } else {
          setErrors("Server Error!");
        }
      });
  };

  return (
    <div className="container">
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            onChange={handleEmailChange}
          ></input>
          {errors.length > "" && (
            <small className="text-muted" id="passwordHelpInline">
              {errors.email}Email required
            </small>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handlePasswordChange}
        ></input>
        {errors.length > 0 && (
          <small className="text-muted" id="passwordHelpInline">
            {errors.password}password is required !
          </small>
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
          onChange={handleNameChange}
        ></input>
        {errors.length && (
          <small className="text-muted" id="passwordHelpInline">
            {errors.name}name Required
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputAge1">Age</label>
        <input
          onChange={handleAgeChange}
          type="number"
          className="form-control"
          id="exampleInputAge1"
          aria-describedby="emailHelp"
          placeholder="Age"
        ></input>
        {errors && (
          <small className="text-muted" id="passwordHelpInline">
            {errors.age}Age Required
          </small>
        )}
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit1}
        >
          Register
        </button>
      </div>
      <div className="form-group">
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
