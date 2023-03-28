import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './User.css'

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = {
        username: username,
        email: email,
        password: password
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://bing-todos.onrender.com/users', {
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
                    placeholder="johndoe" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)} 
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    required 
                    placeholder="youremail@mail.com" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                />
                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    required 
                    placeholder="****" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <button type="button"><Link to="/" >Already signedup? Login</Link></button>
        </div>
    )
}

export default Signup;