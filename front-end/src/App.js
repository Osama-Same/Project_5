import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,BrowserRouter as Router} from "react-router-dom";
import Articles from './components/Articles'
import  Register from './components/register'
import  Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
// Class component

const App = () => {
 
  return (
          <Router>
           <div> 
          <Route exact path="/Login">
            <Login />
          </Route>
          </div>
          <div>
          <Route exact path="/Register"><Register />
          </Route>
          </div>
          <div>
          <Route exact path ="/Articles">
            <Header/>
            <Articles/>
          </Route>
          </div>
          <div>
          <Route exact path ="/Home">
            <Header/>
            <Home/>
          </Route>
          </div>
          <div>
          <Route exact path ="/About">
            <Header/>
            <About/>
          </Route>
          </div>
          <div>
          <Route exact path ="/Contact">
            <Header/>
            <Contact/>
          </Route>
          </div>
           

          </Router>
  )
}
export default App;

