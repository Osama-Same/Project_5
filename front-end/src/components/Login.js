import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import validate from "./Errors";

const Login = () => {
  const [values, setValues] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  let history = useHistory();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const clearForm = () => {
    setPassword("");
    setEmail("");
    setError("");
  };

  const submit = (e) => {
    e.preventDefault();
    setError(validate(values));
    axios
      .post("http://localhost:5000/Login", { email, password })
        .then((result) => {
          console.log(result.data);
          if (!result.data.error) { 
            localStorage.setItem("token", result.data);
            history.push("/Articles");
          } else {
            setError({ ...error, validation: "Invalid Email or Password" });
          }
        })
        .catch((err) => {
          console.log("RESULT: ", err);
        });
  };
  return (
    <form className="Login">
      <div className="form-group">
        <div className="h4">
          <h4>Login</h4>
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
            onChange={handleEmailChange}
          />
           {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-group" style={{ marginTop: "20px" }}>
          <label id="I2" htmlFor="password">
            password
          </label>
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            aria-describedby="passwordHelpInline"
          ></input>
          {error.password &&
              <small className="text-muted" id="passwordHelpInline" style={{ marginTop: "10px" }}>
                {error.password}
              </small>}
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <button
            id="B1"
            style={{ width: "100%" }}
            type="button"
            className="btn btn-primary"
            onClick={submit}
          >
            Login
          </button>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <button
            id="B2"
            style={{ width: "100%" }}
            type="button"
            className="btn btn-danger"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "blue",
          cursor: "pointer",
        }}
      ></div>
      <div className="col-md-6">
        <Link to="/Register">SignUp</Link>
      </div>
    </form>
  );
};

export default Login;
