
import React from "react";
import pic8 from "../assets/checkmark.png";
import { experienceData } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {experienceData.map((category, index) => (
            <div className="details-container card-hover" key={index}>
              <h2 className="experience-sub-title">{category.category}</h2>
              <div className="article-container">
                {category.skills.map((skill, i) => (
                  <article key={i}>
                    <img src={pic8} alt="Experience icon" className="icon" />
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
