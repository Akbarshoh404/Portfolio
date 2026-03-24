import React from "react";
import pic1 from "../assets/hz.jpg";
import resume from "../assets/resume.pdf";
import pic2 from "../assets/linkedin.png";
import pic3 from "../assets/github.png";
import pic13 from "../assets/telegram.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="profile">
      <motion.div 
        className="section__pic-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={pic1} alt="Akbarshoh Ismatov profile" className="profile-img" />
      </motion.div>
      <motion.div 
        className="section__text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <p className="section__text__p1">{t("hero_hi") || "Hello, I'm"}</p>
        <h1 className="title">Akbarshoh Ismatov</h1>
        <p className="section__text__p2">{t("hero_title") || "Frontend Developer"}</p>
        <div className="btn-container">
          <a href={resume} download="Ismatov Akbarshoh Resume" target="_blank" rel="noreferrer" className="clickable">
            <button className="btn btn-color-2 clickable">Download CV</button>
          </a>
          <a href="#contact" className="clickable">
            <button className="btn btn-color-1 clickable">{t("contact_title") || "Contact Info"}</button>
          </a>
        </div>
        <div id="socials-container">
          <a href="https://t.me/MrAkbarshoh" target="_blank" rel="noreferrer" className="clickable">
            <img src={pic13} alt="Telegram" className="icon social-icon clickable" />
          </a>
          <a href="https://www.linkedin.com/in/akbarshoh-ismatov-4179b52a8/" target="_blank" rel="noreferrer" className="clickable">
            <img src={pic2} alt="LinkedIn" className="icon social-icon clickable" />
          </a>
          <a href="https://github.com/Akbarshoh404" target="_blank" rel="noreferrer" className="clickable">
            <img src={pic3} alt="Github" className="icon social-icon clickable" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
