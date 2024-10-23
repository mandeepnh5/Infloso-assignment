/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserData } from "../context/User";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [agree, setAgree] = useState(false); // Checkbox state for Terms and Conditions
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const navigate = useNavigate();
  const { registerUser, btnLoading } = UserData();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (!agree) {
      toast.error("You must agree to the Terms and Conditions!");
      return;
    }
  
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }
  
    try {
      const response = await registerUser(username, email, password, navigate);
  
      if (response.error) {
        toast.error(response.error); 
        return;
      }
  
      toast.success("Check your email for verification!");
  
      setTimeout(() => {
        navigate("/login");
      }, 3000);
  
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Register to MelodyVerse
        </h2>

        <form className="mt-8" onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Password visibility toggle button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-10 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              I agree to the Terms and Conditions
            </label>
          </div>

          <button disabled={btnLoading} className="auth-btn">
            {btnLoading ? "Please Wait..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm text-gray-400 hover:text-gray-300"
          >
            Already have an account?
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
