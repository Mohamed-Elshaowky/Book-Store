import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = ({ toggle, setToggle }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        <i className="bi bi-list"></i>
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>123-456-789
      </div>
      <div className="header-top-text">Welcome to Online Book Store</div>
      <Link to="/login" className="header-top-login">
        <i className="bi bi-person-fill"></i>
        Log In
      </Link>
    </div>
  );
};

export default HeaderTop;
