
import React from "react";
import pic12 from "../assets/email.png";
import pic3 from "../assets/github.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container fade-up">
        <div className="contact-info-container">
          <img src={pic12} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:mr.akb404@gmail.com">Mr.Akb404@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={pic3} alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="https://github.com/Akbarshoh404" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
