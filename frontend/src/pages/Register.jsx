import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Register = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        address: "",
        phone: ""
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
    };

    const validateForm = () => {
        const { username, email, password, age, gender, address, phone } = formData;
        
        if (!username || !email || !password || !age || !gender || !address || !phone) {
            return "Please fill in all fields";
        }
        
        if (password.length < 6) {
            return "Password must be at least 6 characters long";
        }
        
        if (isNaN(age) || age < 1 || age > 120) {
            return "Please enter a valid age";
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Please enter a valid email address";
        }
        
        return null;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Updated to correct backend port (3000) and send all required fields
            const response = await axios.post("http://localhost:3000/register", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                age: parseInt(formData.age),
                gender: formData.gender,
                address: formData.address,
                phone: formData.phone
            });

            // Store user data in localStorage
            localStorage.setItem("username", formData.username);
            localStorage.setItem("userEmail", formData.email);
            
            setIsLoggedIn(true);
            navigate("/home");
        } catch (error) {
            console.error("Registration error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Register for RECIPEDIA</h2>
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password (min 6 characters)" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength="6"
                />
                <input 
                    type="number" 
                    name="age"
                    placeholder="Age" 
                    value={formData.age}
                    onChange={handleInputChange}
                    min="1"
                    max="120"
                    required
                />
                <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <textarea 
                    name="address"
                    placeholder="Address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    required
                />
                <button 
                    type="submit" 
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
            
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );

};

export default Register;