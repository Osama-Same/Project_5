import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Register =()=>{
   const [register,SetRegister]=useState([])
   const [email,SetEmail]=useState("")
    const [password, SetPassword] = useState("");
    const [name, SetName] = useState("");
    const [age, SetAge] = useState(0); 
   
  const handleSubmit = () => {
    const data ={
        email:email,
        password:password,
        name:name,
        age:age
      }
  axios
  .post("http://localhost:5000/CreateNewUser",data)
  .then((response) => {
    console.log("response", response);
    const newArray = [...register];
    newArray.push(response.data);
    SetRegister(newArray);
  })
  .catch((err) => {
    console.log("RESULT: ", err);
  });
  
};
    
        return (
            <div>
                <form onClick={handleSubmit} className="from_login">
                <h1>Register</h1>
                    <section>
                        <input 
                        type='email'
                        name='email'
                        placeholder="Enter your Email"
                        onChange={(e) => {SetEmail(e.target.value)}}
                         ></input>
                    </section>
                    <section>
                        <input 
                        type='password'
                        name='password' 
                        placeholder="Enter your Password"
                        onChange={(e) => {SetPassword(e.target.value)}}
                        ></input>
                    </section>
                    <section>
                        <input 
                        type='text'
                        name='text' 
                        placeholder="Enter your name"
                        onChange={(e) => {SetName(e.target.value)}}
                        ></input>
                    </section>
                    <section>
                        <input 
                        type='number'
                        name='number' 
                        placeholder="Enter your Age"
                        onChange={(e) => {SetAge(e.target.value)}}
                        ></input>
                    </section>
                    <section>
                        <Link to="/Login">
                        <button type='submit'>Register</button>
                        </Link>
                    </section>
                    
                </form>
            </div>
        )
    }


export default Register
