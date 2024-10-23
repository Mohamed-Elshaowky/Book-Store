import React, { useState } from "react";
import "./ContactCss.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [area, setArea] = useState("");
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (username.trim() === "") return toast.error("Username is required");
    if (subject.trim() === "") return toast.error("Subject is required");
    if (area.trim() === "") return toast.error("Text is required");
  };
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Egypt-Cairo-Elmoiz</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p className="contact-item-text">123-456-788-9</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">Info@fakeEmail.com</p>
        </div>
      </div>
      <ToastContainer />
      <form onSubmit={formSubmitHandler} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          ></input>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <textarea
          className="contact-textarea"
          rows={5}
          placeholder="Your Message"
          onChange={(e) => setArea(e.target.value)}
          value={area}
        ></textarea>
        <button className="conact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
