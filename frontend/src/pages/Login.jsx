import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
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


  return (
    <div>
     <div className="auth-container">
      <h2 className='auth-title'>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button> <br />
      <p> New user? <Link to="/register">Register</Link></p>
    </div>
    </div>
  )
}

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        
        if (!agreeTerms) {
             setError("Please agree to the Terms of Use & Privacy Policy");
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

  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(""); // clear error when user types
  };

  // Form validation
  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) return "Please fill in all fields";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";

    if (!agreeTerms) return "Please agree to the Terms of Use & Privacy Policy";

    return null;
  };

  // Handle form submit
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
      console.log("Attempting login:", { email: formData.email });

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        {
          email: formData.email.trim().toLowerCase(),
          password: formData.password,

        }
      );

      const { token, user } = response.data;

      // Store auth info
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      setIsLoggedIn(true);
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        setError(err.response.data?.message || "Login failed");
      } else if (err.request) {
        setError("Cannot connect to server. Please check your connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="heading">Login to RECIPEDIA</h2>

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

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="swap_state">
        New user?{" "}
        <span className="link">
          <Link to="/register">Register</Link>
        </span>
      </p>

      <div className="termsandconditions">
        <input
          type="checkbox"
          id="terms"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
        />
        <label htmlFor="terms">
          <h6>By continuing, I agree to the Terms of Use & Privacy Policy</h6>
        </label>
      </div>
    </div>
  );
};

export default Login;
