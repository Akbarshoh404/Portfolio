
import React from "react";
import pic5 from "../assets/experience.png";
import pic6 from "../assets/education.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <p className="section__text__p1">{t("about_subtitle")}</p>
      <h1 className="title">{t("about_title")}</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container card-hover">
              <img src={pic5} alt="Experience icon" className="icon" />
              <h3>{t("about_exp_label")}</h3>
              <p>{t("about_exp_value")} <br /> {t("about_exp_field")}</p>
            </div>
            <div className="details-container card-hover">
              <img src={pic6} alt="Education icon" className="icon" />
              <h3>{t("about_edu_label")}</h3>
              <p>{t("about_edu_school1")} <br /> {t("about_edu_school2")}</p>
            </div>
          </div>
          <div className="text-container">
            <p>{t("about_bio")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
