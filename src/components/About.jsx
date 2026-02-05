
import React from "react";
import pic5 from "../assets/experience.png";
import pic6 from "../assets/education.png";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container card-hover">
              <img src={pic5} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>2+ years <br /> Frontend Development</p>
            </div>
            <div className="details-container card-hover">
              <img src={pic6} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>IT-Academy <br /> "Muhammad Al-Xorazmiy" School</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hello! I am a passionate Front-End Developer from Uzbekistan, just 15 years old but with 2 years of hands-on experience in the industry. 
              I've had the privilege of working on diverse projects, refining my skills in creating dynamic, responsive/animated, and user-friendly interfaces.
              I am constantly pushing the boundaries of what's possible in web and mobile development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
