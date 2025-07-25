import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    
    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential;
            const res = await axios.post("http://localhost:5000/auth/google", { idToken });
            
           
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

      <p>New user? <Link to="/register">Register</Link></p>
    </div>
    </div>
  )
}

export default Login;