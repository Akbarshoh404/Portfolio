
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">{t("nav_about")}</a></li>
            <li><a href="#experience">{t("nav_experience")}</a></li>
            <li><a href="#projects">{t("nav_projects")}</a></li>
            <li><a href="#achievements">{t("nav_achievements")}</a></li>
            <li><a href="#contact">{t("nav_contact")}</a></li>
          </ul>
        </div>
      </nav>
      <p>{t("footer_copyright")}</p>
    </footer>
  );
};

export default Footer;
