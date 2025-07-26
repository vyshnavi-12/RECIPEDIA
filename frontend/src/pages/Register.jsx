import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";  // Import CSS
import Login from "./Login";



const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

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
    const [agreeTerms, setAgreeTerms] = useState(false);
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
            
            const response = await axios.post("http://localhost:3000/register", {
                username: formData.username.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
                age: parseInt(formData.age),
                gender: formData.gender,
                address: formData.address.trim(),
                phone: formData.phone.trim()
            });

            // Store authentication data using sessionStorage (more secure than localStorage)
            const { token, user } = response.data;
            
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(user));
            

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
             <p className='swap_state'>Already have an account? <span className='link'><Link to="/login">Login</Link></span></p>
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

};

export default Register;
