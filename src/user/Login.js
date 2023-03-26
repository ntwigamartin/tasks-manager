import React from "react";
import './User.css'

function Login() {

    return(
        <div className="register">
            <form onSubmit= "" >
            <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    required 
                    id="username" 
                    placeholder="johndoe" 
                    value="" 
                    onChange="" 
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    required 
                    id="email" 
                    placeholder="youremail@mail.com" 
                    value="" 
                    onChange="" 
                />
                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    required 
                    id="password" 
                    placeholder="****" 
                    value="" 
                    onChange=""
                />
                <button type="submit">Log In</button>
            </form>
            <button type="">Register</button>
        </div>
    )
}

export default Login;