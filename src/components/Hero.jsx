
import React from "react";
import pic1 from "../assets/profile-pic.png";
import resume from "../assets/resume.pdf";
import pic2 from "../assets/linkedin.png";
import pic3 from "../assets/github.png";
import pic13 from "../assets/telegram.webp";

const Hero = () => {
  return (
    <section id="profile">
      <div className="section__pic-container fade-in">
        <img src={pic1} alt="Akbarshoh Ismatov profile" className="profile-img" />
      </div>
      <div className="section__text slide-in">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Akbarshoh Ismatov</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <a href={resume} download="Ismatov Akbarshoh Resume" target="_blank" rel="noreferrer">
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <a href="#contact">
            <button className="btn btn-color-1">Contact Info</button>
          </a>
        </div>
        <div id="socials-container">
          <a href="https://t.me/MrAkbarshoh" target="_blank" rel="noreferrer">
            <img src={pic13} alt="Telegram" className="icon social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/akbarshoh-ismatov-4179b52a8/" target="_blank" rel="noreferrer">
            <img src={pic2} alt="LinkedIn" className="icon social-icon" />
          </a>
          <a href="https://github.com/Akbarshoh404" target="_blank" rel="noreferrer">
            <img src={pic3} alt="Github" className="icon social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
