import React, { useState} from "react";

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Link,
  } from "react-router-dom";


const Login=() => {
    const [login, setValues] = useState({
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        console.log(e);
        setValues({
          ...login,
          [e.target.name]: e.target.value,
        });
      };
        return (
            <div>
                <form className="from_login">
                <h1>Login</h1>
                    <section>
                        <input 
                        type='email'
                        name='email'
                        placeholder="Enter your Email"
                        onChange={handleChange}
                         ></input>
                    </section>
                    <section>
                        <input 
                        type='password'
                        name='password' 
                        placeholder="Enter your Password"
                        onChange={handleChange}
                        ></input>
                    </section>
                    <section>
                        <button type='submit'>Login</button>
                    </section>
                    <section>
                        <Link to='/Register'>Register</Link>
                    </section>
                </form>
            </div>
        )
    }


export default Login
