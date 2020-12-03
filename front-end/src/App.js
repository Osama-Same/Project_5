import React from "react";

import './App.css';
import {Route,BrowserRouter as Router} from "react-router-dom";
import Articles from './components/Articles'
import  Register from './components/register'
import  Login from './components/Login'
import Header from './components/Header'
// Class component

const App = () => {
  return (
    
      <Router>
        <div>
          <button>Start</button>
        </div>
      <div>
        <Route exact path="/Register">
          <Register />
        </Route>
        </div>
      <div>
        <Route exact path="/Login">
          <Header />
          <Login />
        </Route>
        </div>
      <div>
        <Route exact path="/Articles">
          <Header />
          <Articles />
        </Route>
        </div>
        </Router>
      
        
    
  )
}
export default App;

