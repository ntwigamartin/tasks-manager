import React, { useState } from "react";
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
        console.log(body)
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
            <button type="">Already signedup? Login</button>
        </div>
    )
}

export default Signup;