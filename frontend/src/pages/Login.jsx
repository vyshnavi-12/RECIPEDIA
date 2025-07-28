import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const res = await axios.post("http://localhost:5000/login", { email, password });
          localStorage.setItem("username", res.data.username);
          setIsLoggedIn(true);
          navigate("/home");
        } catch (error) {
          alert("Invalid Credentials");
        }

    }

        
        if (!agreeTerms) {
             setError("Please agree to the Terms of Use & Privacy Policy");
              return;
            }

          }
    
    const handleGoogleLogin = async (credentialResponse) => {
        try {

            const idToken = credentialResponse.credential;
            const res = await axios.post("http://localhost:5000/auth/google", { idToken });

            console.log('Attempting login with:', { email: formData.email });
            
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });

            
           
            if (res.data.username) {
                localStorage.setItem("username", res.data.username);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                }
                setIsLoggedIn(true);
                navigate("/home");
            } else {
                throw new Error("No username received from server");
            }
        } catch (error) {
            console.error("Google login failed:", error);
            alert("Google login failed. Please try again.");
        }
    };

    const handleGoogleError = () => {
        console.log("Google Login Failed");
        alert("Google login failed. Please try again.");
    };


  return (
    <div>
     <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      
      <div className="google-auth-section">
        <p>Or login with Google:</p>
        <GoogleOAuthProvider clientId="740849859932-6jfi3j7j4pi4ou19tvdo7a3gpj6sp4s2.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            text="signin_with"
            shape="rectangular"
          />
        </GoogleOAuthProvider>
      </div>

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
     <p className='swap_state'>New user? <span className='link'><Link to="/register">Register</Link></span></p>
      <div className='termsandconditions'>
  <input
    type="checkbox"
    id="terms"
    checked={agreeTerms}
    onChange={(e) => setAgreeTerms(e.target.checked)}
    required
  />
  <label htmlFor="terms">
    <h6>By continuing, I agree to the Terms of Use & Privacy Policy</h6>
  </label>
</div>
        </div>
    );
  


      <p>New user? <Link to="/register">Register</Link></p>
    </div>
    </div>
  )
}

export default Login;
