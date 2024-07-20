import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from "./firebase";
import React from 'react';
import './loginstyle.css';
import Signinwithgoogle from './signinwithgoogle';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    const checklogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            navigate("/profile"); // Navigate to profile page after successful login
        } catch (error) {
            setError("Invalid email or password");
            setEmail("");
            setPassword("");
            console.error("Error logging in:", error.message);
        }
    };

    return (
        <>
            <div className="logincontainer">
                <h2>Login</h2>
                <div>
                    <form onSubmit={checklogin}>
                        <label>Username</label>
                        <input 
                            type="email" 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <br />
                        <label>Password</label>
                        <input 
                            type="password" 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button type="submit">Login</button>
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
                <p>Don't have an account? <Link to="/signup">Register here</Link></p>
                <Signinwithgoogle />
            </div>
        </>
    );
}

export default Login;
