import React from "react";
import {Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="nav justify-content-center">
          <li className="nav-link">
            <Link className="nav-link" to="/Articles">
              Articles
            </Link>
          </li>
        </ul>
        <nav>
          <ul>
            <li>
              <Link to="/Login">
                LogOut
              </Link>
            </li>
          </ul>
        </nav>
        
      </nav>
    </div>
  );
};

export default Header;
