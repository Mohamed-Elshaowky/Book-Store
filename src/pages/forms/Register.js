import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormsCss.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (username.trim() === "") return toast.error("Username is required");
    if (password.trim() === "") return toast.error("Password is required");
  };
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Create new account</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="text"
          placeholder="yourname"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button className="form-btn">Register</button>
      </form>
      <form className="form-footer">
        Already have an account?
        <Link to="/login" className="register-link">
          Log in
        </Link>
      </form>
    </div>
  );
};

export default Register;
