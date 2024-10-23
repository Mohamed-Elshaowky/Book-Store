import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormsCss.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Showpassword, setShowPassword] = useState(false);
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
  };
  // Show password Handler
  const ShowpasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type={Showpassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        {Showpassword ? (
          <i
            onClick={ShowpasswordHandler}
            className="bi bi-eye-slash-fill show-password-icon"
          ></i>
        ) : (
          <i
            onClick={ShowpasswordHandler}
            className="bi bi-eye-fill show-password-icon"
          ></i>
        )}
        <button className="form-btn">Login</button>
      </form>
      <form className="form-footer">
        Don't have an account?
        <Link to="/register" className="register-link">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
