import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Updated to correct backend port (3000)
            const res = await axios.post("http://localhost:3000/login", { 
                email, 
                password 
            });
            
            // Store user data in localStorage
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("userEmail", email);
            
            setIsLoggedIn(true);
            navigate("/home");
        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Login failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="container">
                <h2>Login to RECIPEDIA</h2>
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                
                <p>New user? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;