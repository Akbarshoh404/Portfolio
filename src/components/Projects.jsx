import React from "react";
import { webProjects, mobileProjects } from "../data/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

const Projects = () => {
  const activeTab = "web";
  const { t, i18n } = useTranslation();

  // Pick the right description based on current language
  const getDescription = (project) => {
    const lang = i18n.language?.slice(0, 2);
    if (lang === "ru") return project.description_ru;
    if (lang === "uz") return project.description_uz;
    return project.description_en;
  };

  return (
    <section id="projects">
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="section__text__p1">{t("browse_recent")}</p>
        <h1 className="title">{t("projects_title")}</h1>
      </motion.div>
      
      {/* Mobile Apps tab is intentionally hidden — code kept for future use */}
      {/* 
      <div className="project-tabs">
        <button 
          className={`tab-btn clickable ${activeTab === "web" ? "active" : ""}`} 
          onClick={() => setActiveTab("web")}
        >
          {t("web_dev")}
        </button>
        <button 
          className={`tab-btn clickable ${activeTab === "mobile" ? "active" : ""}`} 
          onClick={() => setActiveTab("mobile")}
        >
          {t("mobile_apps")}
        </button>
      </div>
      */}

      <div className="experience-details-container animated-grid" style={{ flexDirection: "column", alignItems: "center" }}>
        {activeTab === "mobile" && (
          <motion.p 
            variants={fadeIn("up", "tween", 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            style={{ textAlign: "center", marginBottom: "1rem", color: "var(--secondary-color)", fontSize: "1.1rem", maxWidth: "600px" }}
          >
            I did these mobile apps for fun but planning to be more serious about Mobile Development.
          </motion.p>
        )}
        <div className="about-containers mobile-layout-fix">
          {(activeTab === "web" ? webProjects : mobileProjects).map((project) => (
            <div className="details-container color-container project-card" key={project.id}>
              <div className="project-picture">
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              {getDescription(project) && <p className="project-desc">{getDescription(project)}</p>}
              <div className="btn-container">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-color-2 project-btn clickable">
                  {t("github")}
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-color-2 project-btn clickable">
                  {t("live_demo")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
