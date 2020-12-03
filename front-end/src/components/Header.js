import React, { Component } from 'react'
import { Link} from "react-router-dom";
const Header =()=>{


        return (
            <div>
                <nav>
                    <ul>
                        <li>
                               <Link to="/Login">
                               Login
                                </Link>
                        
                        </li>
                        <li>
                               <Link to="/Articles">
                               Articles
                                </Link>
                        
                        </li>
                    </ul>
                </nav>
            </div>
        
    
        )

}

export default Header
