import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './User.css'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const body = {
        username: username,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://bing-todos.onrender.com/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    };


    return(
        <div className="register">
            <form onSubmit={handleSubmit} >
            <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    required 
                    id="username" 
                    placeholder="johndoe" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)} 
                />
                                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    required 
                    id="password" 
                    placeholder="****" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                />
                <button type="submit">Log In</button>
            </form>
            <button type=""><Link to="/signup" >Not a user? Register</Link></button>
        </div>
    )
}

export default Login;