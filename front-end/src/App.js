import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,BrowserRouter as Router} from "react-router-dom";
import Articles from './components/Articles'
import Article from './components/Article'
import  Register from './components/register'
import  Login from './components/Login'
import Header from './components/Header'
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
          <Route exact path ="/Article/:id" component={Article}>
            <Header/>
            <Article/>
          </Route>
          </div>
          
          </Router>
  )
}
export default App;

