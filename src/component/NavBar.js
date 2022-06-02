import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar