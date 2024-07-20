import './signupstyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const storeval = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully");
            navigate("/profile");
            

        } catch (error) {
            setError("Error signing up: " + error.message);
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <>
            <div className="signupcontainer">
                <h2>Signup</h2>
                <div>
                    <form onSubmit={storeval}>
                        <label>Username</label>
                        <input 
                            type="email" 
                            value={email} 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            required 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Confirm Password</label>
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            required 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label>Date of birth</label>
                        <input 
                            type="date" 
                            value={dob} 
                            required 
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <label>Enter Mobile</label>
                        <input 
                            type="number" 
                            value={mobile} 
                            required 
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <div className='gender'>
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="Male" 
                                    required 
                                    onChange={(e) => setGender(e.target.value)}
                                    aria-label="Male"
                                />
                                Male
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="Female" 
                                    required 
                                    onChange={(e) => setGender(e.target.value)}
                                    aria-label="Female"
                                />
                                Female
                            </label>
                        </div>
                        <button type="submit">Sign up</button>
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </>
    );
}

export default Signup;
