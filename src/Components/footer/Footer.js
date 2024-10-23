import React from "react";
import "./FooterCss.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <a href="/" className="footer-social-media-icon instagram ">
            <i className="bi bi-instagram" style={{ color: "#F56040" }}></i>
          </a>
          <a href="/" className="footer-social-media-icon youtube ">
            <i className="bi bi-youtube" style={{ color: "#FF0000" }}></i>
          </a>
          <a href="/" className="footer-social-media-icon facebook ">
            <i className="bi bi-facebook" style={{ color: "#1877F2" }}></i>
          </a>
          <a href="/" className="footer-social-media-icon twitter-x ">
            <i className="bi bi-twitter-x" style={{ color: "#000000" }}></i>
          </a>
          <a href="/" className="footer-social-media-icon telegram ">
            <i className="bi bi-telegram" style={{ color: "#24A1DE" }}></i>
          </a>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/authors" className="footer-link">
              Authors
            </Link>
            <Link to="about" className="footer-link">
              About Us
            </Link>
            <Link to="contact" className="footer-link">
              Contact Us
            </Link>
            <Link to="register" className="footer-link">
              Register
            </Link>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Egypt - Cario - Elmoiz
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone"></i>
              123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@fackeemail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            unde est minima maxime, maiores architecto, facere eaque incidunt
            cupiditate sunt quae corporis impedit. At vitae, accusamus nihil quo
            porro reiciendis?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
