import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError("");
    };

    const validateForm = () => {
        const { email, password } = formData;
        
        if (!email || !password) {
            return "Please fill in all fields";
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Please enter a valid email address";
        }
        
        return null;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError("");

        try {
            console.log('Attempting login with:', { email: formData.email });
            
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });
            
            console.log('Login successful:', response.data);
            
            // Store authentication data
            const { token, user } = response.data;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(user));
            
            setIsLoggedIn(true);
            navigate("/home");
        } catch (error) {
            console.error("Login error:", error);
            console.error("Error response:", error.response?.data);
            
            if (error.response) {
                // Server responded with error status
                const errorMessage = error.response.data?.message || "Login failed";
                setError(errorMessage);
                console.log("Server error message:", errorMessage);
            } else if (error.request) {
                // Request was made but no response received
                setError("Cannot connect to server. Please check if the server is running.");
            } else {
                // Something else happened
                setError("Login failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="container">
            <h2>Login to RECIPEDIA</h2>
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    autoComplete="current-password"
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
    );
};


export default Login;