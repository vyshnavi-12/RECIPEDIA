import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";  
<<<<<<< HEAD
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
=======
import Login from "./Login";
>>>>>>> 6d23687 (Added Google authentication feature)

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  
const handleRegister = async () => {
  try {
    await axios.post("http://localhost:5000/register", {
  username,
  email,
  password,
  age,
  gender,
  address,
  phone,
});

    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    navigate("/home");
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Registration failed. Please check your details.");
  }
};

  
  const handleGoogleRegister = async (credentialResponse) => {
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
        console.error("Google registration failed:", error);
        alert("Google registration failed. Please try again.");
    }
  };

  const handleGoogleError = () => {
    console.log("Google Registration Failed");
    alert("Google registration failed. Please try again.");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Gender" onChange={(e) => setGender(e.target.value)} />
      <input type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      
      <div className="google-auth-section">
        <p>Or register with Google:</p>
        <GoogleOAuthProvider clientId="740849859932-6jfi3j7j4pi4ou19tvdo7a3gpj6sp4s2.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleRegister}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            text="signup_with"
            shape="rectangular"
          />
        </GoogleOAuthProvider>
      </div>
      
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;