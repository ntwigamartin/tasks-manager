import './Navbar.css'
import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <h3>Tasks Manager</h3>
            <Link to="/login" >Login</Link>
            <Link to="/signup" >Signup</Link>
            <Link to="/" >Logout</Link>
        </nav>
    )
}

export default Navbar;