
import React from "react";
import pic12 from "../assets/email.png";
import pic3 from "../assets/github.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <p className="section__text__p1">{t("contact_subtitle")}</p>
      <h1 className="title">{t("contact_title")}</h1>
      <div className="contact-info-upper-container fade-up">
        <div className="contact-info-container">
          <img src={pic12} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:mr.akb404@gmail.com">Mr.Akb404@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={pic3} alt="GitHub icon" className="icon contact-icon" />
          <p><a href="https://github.com/Akbarshoh404" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
