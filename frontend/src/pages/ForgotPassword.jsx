import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import "../styles/Login.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); // clear error when user types
  };

  // Form validation
  const validateForm = () => {
    if (!email) return "Please enter your email address";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";

    return null;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      if (!API_BASE_URL) {
        throw new Error("API base URL not configured");
      }

      const response = await axios.post(
        `${API_BASE_URL}/forgot-password`,
        {
          email: email.trim().toLowerCase(),
        }
      );

      setSuccess(response.data.message || "Password reset instructions have been sent to your email address.");
      
      // Clear the form
      setEmail("");
    } catch (err) {
      console.error("Forgot password error:", err);
      if (err.response) {
        setError(err.response.data?.message || "Failed to send reset instructions");
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
    <div className="min-h-screen login-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md animate-scaleIn">
        {/* Header */}
        <div className="text-center mb-8 animate-slideInUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
          <p className="text-gray-600">Enter your email address and we'll send you instructions to reset your password.</p>
        </div>

        {/* Form */}
        <div className="login-form-container bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-slideInUp">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-fadeIn" role="alert">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-fadeIn" role="alert">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
              <p className="text-green-700 text-sm">{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  className="login-input block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                  aria-describedby="email-error"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="login-button w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                  <span>Sending...</span>
                </>
              ) : (
                "Send Reset Instructions"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Remember your password?</span>
              </div>
            </div>
          </div>

          {/* Back to Login Link */}
          <div className="mt-6">
            <Link
              to="/login"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Back to Login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center animate-slideInUp">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link to="/contact" className="login-link text-amber-600 hover:text-amber-500 font-medium">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 