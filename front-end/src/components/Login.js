import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();

  const [errors, setErrors] = useState({});

  const validation = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid Email Address";
    }

    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 3) {
      errors.password = "Incorrect Password";
    }
    

    return errors;
  };
  
  const handleChange = (e) => {
    console.log(e);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    
    axios
      .post("http://localhost:5000/Login", values )
      .then((result) => {
        console.log(result.data);
        debugger
        let logedIn = true;
        if (result.data === "Success login") {
          
          logedIn = true;
          localStorage.setItem("token", result.data);
          history.push("/Articles");
        } else {
          logedIn = false;
          setErrors({ ...errors, validation: "Invalid Email or Password" });
        }
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  return (
    <form className="Login" >
      <div className="form-group">
        <h1>Login</h1>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        {errors.email && <p className="input-error"> {errors.email} </p>}
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
        />
        {errors.password && <p className="input-error"> {errors.password} </p>}
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="form-group" >
        <Link to="/Register">Register</Link>
      </div>
    </form>
  );
};

export default Login;
