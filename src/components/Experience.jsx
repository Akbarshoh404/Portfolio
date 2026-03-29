
import React from "react";
import pic8 from "../assets/checkmark.png";
import { experienceData } from "../data/experience";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience">
      <p className="section__text__p1">{t("exp_subtitle")}</p>
      <h1 className="title">{t("experience_title")}</h1>
      <div className="experience-details-container">
          {experienceData.map((category, index) => (
            <div className="details-container card-hover" key={index}>
              <h2 className="experience-sub-title">{t(category.category)}</h2>
              <div className="article-container">
                {category.skills.map((skill, i) => (
                  <article key={i} className="experience-item">
                    <img src={pic8} alt="Experience icon" className="icon" />
                    <div className="experience-item__content">
                      <h3 className="experience-item__title">{skill.name}</h3>
                      <p>{t(skill.level)}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Experience;
