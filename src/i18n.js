import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav_about": "About",
      "nav_experience": "Experience",
      "nav_projects": "Projects",
      "nav_contact": "Contact",
      "hero_title": "Frontend Developer",
      "hero_hi": "Hello, I'm",
      "about_title": "About Me",
      "experience_title": "Experience",
      "projects_title": "Projects",
      "contact_title": "Contact Me",
      "web_dev": "Web Development",
      "mobile_apps": "Mobile Apps",
      "github": "Github",
      "live_demo": "Live Demo"
    }
  },
  ru: {
    translation: {
      "nav_about": "Обо мне",
      "nav_experience": "Опыт",
      "nav_projects": "Проекты",
      "nav_contact": "Контакты",
      "hero_title": "Frontend Разработчик",
      "hero_hi": "Привет, я",
      "about_title": "Обо мне",
      "experience_title": "Опыт",
      "projects_title": "Проекты",
      "contact_title": "Свяжитесь со мной",
      "web_dev": "Веб-разработка",
      "mobile_apps": "Мобильные приложения",
      "github": "Github",
      "live_demo": "Live Demo"
    }
  },
  uz: {
    translation: {
      "nav_about": "Men haqimda",
      "nav_experience": "Tajriba",
      "nav_projects": "Loyihalar",
      "nav_contact": "Aloqa",
      "hero_title": "Frontend Dasturchi",
      "hero_hi": "Salom, men",
      "about_title": "Men haqimda",
      "experience_title": "Tajriba",
      "projects_title": "Loyihalar",
      "contact_title": "Men bilan aloqa",
      "web_dev": "Veb-dasturlash",
      "mobile_apps": "Mobil ilovalar",
      "github": "Github",
      "live_demo": "Live Demo"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
