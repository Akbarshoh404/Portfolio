
import React, { useState } from "react";
import { webProjects, mobileProjects } from "../data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      
      <div className="project-tabs">
        <button 
          className={`tab-btn ${activeTab === "web" ? "active" : ""}`} 
          onClick={() => setActiveTab("web")}
        >
          Web Development
        </button>
        <button 
          className={`tab-btn ${activeTab === "mobile" ? "active" : ""}`} 
          onClick={() => setActiveTab("mobile")}
        >
          Mobile Apps
        </button>
      </div>

      <div className="experience-details-container animated-grid">
        <div className="about-containers mobile-layout-fix">
          {(activeTab === "web" ? webProjects : mobileProjects).map((project) => (
            <div className="details-container color-container project-card" key={project.id}>
              <div className="project-picture">
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              {project.description && <p className="project-desc">{project.description}</p>}
              <div className="btn-container">
                <Link to={project.github} target="_blank">
                  <button className="btn btn-color-2 project-btn">Github</button>
                </Link>
                <Link to={project.demo} target="_blank">
                  <button className="btn btn-color-2 project-btn">Live Demo</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
