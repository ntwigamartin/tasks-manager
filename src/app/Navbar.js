import './Navbar.css'
import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <Link to='/tasks'><h3>Tasks Manager</h3></Link>
            <Link to="/" >Login</Link>
            <Link to="/signup" >Signup</Link>
            <Link to="/" >Logout</Link>
        </nav>
    )
}

export default Navbar;