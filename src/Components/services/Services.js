import React from "react";
import "./ServicesCss.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <i className="bi bi-truck-front"></i>
        <b>Free Shopping</b>
      </div>
      <div className="service-item">
        <i className="bi bi-gift"></i>
        <b>Gift Cards</b>
      </div>
      <div className="service-item">
        <i className="bi bi-arrow-clockwise"></i>
        <b>7 Days Return</b>
      </div>
      <div className="service-item">
        <i className="bi bi-send"></i>
        <b>Contact US</b>
      </div>
    </div>
  );
};

export default Services;
