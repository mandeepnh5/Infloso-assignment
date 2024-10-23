/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/User";

const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem("rememberMe") ? localStorage.getItem("email") : "");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") === "true");

  const navigate = useNavigate();
  const { loginUser, btnLoading } = UserData();

  const submitHandler = (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("rememberMe");
    }
    loginUser(email, password, navigate);
  };

  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Login to MelodyVerse
        </h2>

        <form className="mt-8" onSubmit={submitHandler}>
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

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="text-sm">
              Remember Me
            </label>
          </div>

          <button disabled={btnLoading} className="auth-btn">
            {btnLoading ? "Please Wait..." : "Login"}
          </button>        
          </form>

        <div className="text-center mt-6">
          <Link to="/register" className="text-sm text-gray-400 hover:text-gray-300">
            Dont have an account?
          </Link>
        </div>

        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-gray-300">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
