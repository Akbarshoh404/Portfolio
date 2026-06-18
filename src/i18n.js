import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      "nav_about": "About",
      "nav_experience": "Experience",
      "nav_projects": "Projects",
      "nav_contact": "Contact",
      // Hero
      "hero_title": "Full Stack Developer",
      "hero_hi": "Hello, I'm",
      // About
      "about_subtitle": "Get To Know More",
      "about_title": "About Me",
      "about_exp_label": "Experience",
      "about_exp_value": "3+ years web",
      "about_exp_field": "1+ year mobile",
      "about_edu_label": "Education",
      "about_edu_school1": "IT-Academy",
      "about_edu_school2": "\"Muhammad Al-Xorazmiy\" School",
      "about_bio": "Hello! I am a passionate Full Stack Developer from Uzbekistan, 17 years old, with 3+ years of web development experience and 1+ year of mobile development experience. I've worked on diverse projects, refining my skills in creating dynamic, responsive, animated, and user-friendly products across web and mobile.",
      // Experience
      "exp_subtitle": "Explore My",
      "experience_title": "Experience",
      "level_experienced": "Experienced",
      "level_intermediate": "Intermediate",
      "level_basic": "Basic",
      "cat_frontend": "Frontend Development",
      "cat_mobile": "Mobile Development",
      "cat_backend": "Backend & Tools",
      "cat_telegram": "Telegram Bots",
      // Projects
      "browse_recent": "Browse My Recent",
      "projects_title": "Projects",
      "web_dev": "Web Development",
      "mobile_apps": "Mobile Apps",
      "github": "Github",
      "live_demo": "Live Demo",
      "play_market": "Play Market",
      "in_process": "In process",
      // Achievements
      "nav_achievements": "Achievements",
      "ach_subtitle": "My Awards & Certifications",
      "ach_title": "Achievements",
      "ach_view_cert": "View Certificate",
      "ach_cert_soon": "Certificate coming soon",
      "ach_ielts_title": "IELTS Academic",
      "ach_ielts_badge": "Band 7.0 · C1",
      "ach_ielts_desc": "Achieved an overall band score of 7.0 in IELTS Academic, demonstrating C1 level English proficiency — tested by British Council & IDP.",
      "ach_sat_title": "SAT Score Report",
      "ach_sat_badge": "1440 / 1600 · 95th%",
      "ach_sat_desc": "Scored 1440 on the SAT (December 2025), placing in the 95th percentile — with a near-perfect 780 in Math (98th percentile).",
      "ach_penn_title": "Penn State University",
      "ach_penn_badge": "Admitted · Class of 2030",
      "ach_penn_desc": "Admitted to Penn State Behrend College for Software Engineering (Fall 2026), Class of 2030. Penn State ranks #82 worldwide — a globally recognized research university.",
      "ach_penn_stat1_label": "Major", "ach_penn_stat1_value": "Soft. Eng.",
      "ach_penn_stat2_label": "Term", "ach_penn_stat2_value": "Fall 2026",
      "ach_penn_stat3_label": "Class", "ach_penn_stat3_value": "2030",
      "ach_penn_stat4_label": "World Rank", "ach_penn_stat4_value": "#82",
      "ach_itacademy_title": "IT Academy Certificate",
      "ach_itacademy_badge": "Completed · Frontend",
      "ach_itacademy_desc": "Successfully completed the Frontend Development program at IT Academy, mastering modern web technologies and frameworks.",
      "ach_itacademy_stat1_label": "Program", "ach_itacademy_stat1_value": "Frontend",
      "ach_itacademy_stat2_label": "School", "ach_itacademy_stat2_value": "IT Academy",
      "ach_itacademy_stat3_label": "Duration", "ach_itacademy_stat3_value": "1 Year",
      "ach_itacademy_stat4_label": "Status", "ach_itacademy_stat4_value": "Done",
      // Contact
      "contact_subtitle": "Get in Touch",
      "contact_title": "Contact Me",
      // Footer
      "footer_copyright": "Copyright © 2024 Akbarshoh Ismatov. All Rights Reserved.",
    }
  },
  ru: {
    translation: {
      // Navbar
      "nav_about": "Обо мне",
      "nav_experience": "Опыт",
      "nav_projects": "Проекты",
      "nav_contact": "Контакты",
      // Hero
      "hero_title": "Full Stack Разработчик",
      "hero_hi": "Привет, я",
      // About
      "about_subtitle": "Узнайте обо мне больше",
      "about_title": "Обо мне",
      "about_exp_label": "Опыт",
      "about_exp_value": "3+ года web",
      "about_exp_field": "1+ год mobile",
      "about_edu_label": "Образование",
      "about_edu_school1": "IT-Academy",
      "about_edu_school2": "Школа \"Мухаммад Аль-Хоразмий\"",
      "about_bio": "Привет! Я увлечённый Full Stack-разработчик из Узбекистана, мне 17 лет. У меня 3+ года опыта в веб-разработке и 1+ год опыта в мобильной разработке. Я работал над разными проектами и создаю динамичные, адаптивные, анимированные и удобные продукты для web и mobile.",
      // Experience
      "exp_subtitle": "Мои навыки",
      "experience_title": "Опыт",
      "level_experienced": "Опытный",
      "level_intermediate": "Средний",
      "level_basic": "Базовый",
      "cat_frontend": "Frontend разработка",
      "cat_mobile": "Мобильная разработка",
      "cat_backend": "Backend и инструменты",
      "cat_telegram": "Telegram боты",
      // Projects
      "browse_recent": "Мои последние",
      "projects_title": "Проекты",
      "web_dev": "Веб-разработка",
      "mobile_apps": "Мобильные приложения",
      "github": "Github",
      "live_demo": "Live Demo",
      "play_market": "Play Market",
      "in_process": "В процессе",
      // Achievements
      "nav_achievements": "Достижения",
      "ach_subtitle": "Мои награды и сертификаты",
      "ach_title": "Достижения",
      "ach_view_cert": "Просмотр сертификата",
      "ach_cert_soon": "Сертификат скоро появится",
      "ach_ielts_title": "IELTS Academic",
      "ach_ielts_badge": "Балл 7.0 · C1",
      "ach_ielts_desc": "Общий балл 7.0 по IELTS Academic — уровень C1 по английскому языку. Тестирование проведено British Council & IDP.",
      "ach_sat_title": "Результаты SAT",
      "ach_sat_badge": "1440 / 1600 · 95-й %",
      "ach_sat_desc": "Набрал 1440 баллов на SAT (декабрь 2025) — 95-й процентиль, с почти идеальным результатом 780 по математике (98-й процентиль).",
      "ach_penn_title": "Университет Пенн Стейт",
      "ach_penn_badge": "Принят · Выпуск 2030",
      "ach_penn_desc": "Принят в Behrend College (Penn State) на специальность Software Engineering (осень 2026), выпуск 2030. Penn State занимает #82 место в мировом рейтинге — глобально признанный исследовательский университет.",
      "ach_penn_stat1_label": "Специальность", "ach_penn_stat1_value": "Soft. Eng.",
      "ach_penn_stat2_label": "Семестр", "ach_penn_stat2_value": "Осень 2026",
      "ach_penn_stat3_label": "Выпуск", "ach_penn_stat3_value": "2030",
      "ach_penn_stat4_label": "Мировой рейт.", "ach_penn_stat4_value": "#82",
      "ach_itacademy_title": "Сертификат IT Academy",
      "ach_itacademy_badge": "Завершено · Frontend",
      "ach_itacademy_desc": "Успешно окончил программу Frontend-разработки в IT Academy, освоив современные веб-технологии и фреймворки.",
      "ach_itacademy_stat1_label": "Программа", "ach_itacademy_stat1_value": "Frontend",
      "ach_itacademy_stat2_label": "Институт", "ach_itacademy_stat2_value": "IT Academy",
      "ach_itacademy_stat3_label": "Длительность", "ach_itacademy_stat3_value": "1 год",
      "ach_itacademy_stat4_label": "Статус", "ach_itacademy_stat4_value": "Выполнено",
      // Contact
      "contact_subtitle": "Связаться",
      "contact_title": "Свяжитесь со мной",
      // Footer
      "footer_copyright": "Авторские права © 2024 Акбаршох Исматов. Все права защищены.",
    }
  },
  uz: {
    translation: {
      // Navbar
      "nav_about": "Men haqimda",
      "nav_experience": "Tajriba",
      "nav_projects": "Loyihalar",
      "nav_contact": "Aloqa",
      // Hero
      "hero_title": "Full Stack Dasturchi",
      "hero_hi": "Salom, men",
      // About
      "about_subtitle": "Men haqimda ko'proq bilib oling",
      "about_title": "Men haqimda",
      "about_exp_label": "Tajriba",
      "about_exp_value": "3+ yil web",
      "about_exp_field": "1+ yil mobile",
      "about_edu_label": "Ta'lim",
      "about_edu_school1": "IT-Academy",
      "about_edu_school2": "\"Muhammad Al-Xorazmiy\" Maktabi",
      "about_bio": "Salom! Men O'zbekistondan ishtiyoqli Full Stack dasturchiman, yoshim 17 da. Web dasturlash bo'yicha 3+ yil, mobile dasturlash bo'yicha esa 1+ yil tajribaga egaman. Turli loyihalarda ishlab, web va mobile uchun dinamik, moslashuvchan, animatsiyali va foydalanuvchiga qulay mahsulotlar yarataman.",
      // Experience
      "exp_subtitle": "Ko'nikmalarim",
      "experience_title": "Tajriba",
      "level_experienced": "Tajribali",
      "level_intermediate": "O'rta",
      "level_basic": "Boshlang'ich",
      "cat_frontend": "Frontend dasturlash",
      "cat_mobile": "Mobil dasturlash",
      "cat_backend": "Backend va vositalar",
      "cat_telegram": "Telegram botlar",
      // Projects
      "browse_recent": "So'nggi loyihalarim",
      "projects_title": "Loyihalar",
      "web_dev": "Veb-dasturlash",
      "mobile_apps": "Mobil ilovalar",
      "github": "Github",
      "live_demo": "Live Demo",
      "play_market": "Play Market",
      "in_process": "Jarayonda",
      // Achievements
      "nav_achievements": "Yutuqlar",
      "ach_subtitle": "Mening mukofot va sertifikatlarim",
      "ach_title": "Yutuqlar",
      "ach_view_cert": "Sertifikatni ko'rish",
      "ach_cert_soon": "Sertifikat tez orada qo'shiladi",
      "ach_ielts_title": "IELTS Academic",
      "ach_ielts_badge": "Ball 7.0 · C1",
      "ach_ielts_desc": "IELTS Academic bo'yicha umumiy ball 7.0 — C1 darajasidagi ingliz tili bilimi. British Council & IDP tomonidan sinovdan o'tkazilgan.",
      "ach_sat_title": "SAT Natijalari",
      "ach_sat_badge": "1440 / 1600 · 95-foiz",
      "ach_sat_desc": "SAT (dekabr 2025) da 1440 ball to'pladim — 95-persentil, matematikada 780 bilan deyarli mukammal natija (98-persentil).",
      "ach_penn_title": "Penn State Universiteti",
      "ach_penn_badge": "Qabul qilindi · 2030-yil bitiruvchisi",
      "ach_penn_desc": "Penn State Behrend College ga Software Engineering mutaxassisligi bo'yicha qabul qilindim (2026-yil kuz), 2030-yil bitiruvchisi. Penn State dunyo reytingida #82 o'rinda — xalqaro miqyosda tan olingan tadqiqot universiteti.",
      "ach_penn_stat1_label": "Mutaxassislik", "ach_penn_stat1_value": "Soft. Eng.",
      "ach_penn_stat2_label": "Semestr", "ach_penn_stat2_value": "Kuz 2026",
      "ach_penn_stat3_label": "Bitirish", "ach_penn_stat3_value": "2030",
      "ach_penn_stat4_label": "Dunyo reyt.", "ach_penn_stat4_value": "#82",
      "ach_itacademy_title": "IT Academy Sertifikati",
      "ach_itacademy_badge": "Tugatildi · Frontend",
      "ach_itacademy_desc": "IT Academy da Frontend dasturlash dasturini muvaffaqiyatli tugatdim — zamonaviy veb texnologiyalari va freymvorklar o'zlashtirdim.",
      "ach_itacademy_stat1_label": "Dastur", "ach_itacademy_stat1_value": "Frontend",
      "ach_itacademy_stat2_label": "Institut", "ach_itacademy_stat2_value": "IT Academy",
      "ach_itacademy_stat3_label": "Davomiyligi", "ach_itacademy_stat3_value": "1 yil",
      "ach_itacademy_stat4_label": "Holat", "ach_itacademy_stat4_value": "Tugatildi",
      // Contact
      "contact_subtitle": "Bog'lanish",
      "contact_title": "Men bilan aloqa",
      // Footer
      "footer_copyright": "Mualliflik huquqi © 2024 Akbarshoh Ismatov. Barcha huquqlar himoyalangan.",
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
