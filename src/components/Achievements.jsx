import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ieltsImg from "../assets/achievements/ielts.jpg";
import satImg from "../assets/achievements/Sat.png";
import pennStateImg from "../assets/achievements/pennState.png";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.7, delay },
  },
});

const Achievements = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null); // null | { img, title }

  const achievements = [
    {
      id: "ielts",
      icon: "🎓",
      title: t("ach_ielts_title"),
      badge: t("ach_ielts_badge"),
      badgeColor: "#1a6fb5",
      description: t("ach_ielts_desc"),
      stats: [
        { label: "Listening", value: "7.0" },
        { label: "Reading", value: "7.5" },
        { label: "Writing", value: "6.0" },
        { label: "Speaking", value: "7.5" },
      ],
      img: ieltsImg,
      imgPosition: "center 65%", // show the score rows area
      pdf: `${process.env.PUBLIC_URL || ""}/src/assets/achievements/akb ielts.pdf`,
    },
    {
      id: "sat",
      icon: "📐",
      title: t("ach_sat_title"),
      badge: t("ach_sat_badge"),
      badgeColor: "#2d6a4f",
      description: t("ach_sat_desc"),
      stats: [
        { label: "Total", value: "1440" },
        { label: "EBRW", value: "660" },
        { label: "Math", value: "780" },
        { label: "Percentile", value: "95th" },
      ],
      img: satImg,
      imgPosition: "top center", // show score header
      pdf: `${process.env.PUBLIC_URL || ""}/src/assets/achievements/akb sat.pdf`,
    },
    {
      id: "pennstate",
      icon: "🦁",
      title: t("ach_penn_title"),
      badge: t("ach_penn_badge"),
      badgeColor: "#1e3a5f",
      description: t("ach_penn_desc"),
      stats: [
        { label: t("ach_penn_stat1_label"), value: t("ach_penn_stat1_value") },
        { label: t("ach_penn_stat2_label"), value: t("ach_penn_stat2_value") },
        { label: t("ach_penn_stat3_label"), value: t("ach_penn_stat3_value") },
        { label: t("ach_penn_stat4_label"), value: t("ach_penn_stat4_value") },
      ],
      img: pennStateImg,
      imgPosition: "top center", // show the Penn State letterhead
    },
    {
      id: "itacademy",
      icon: "💻",
      title: t("ach_itacademy_title"),
      badge: t("ach_itacademy_badge"),
      badgeColor: "#6b21a8",
      description: t("ach_itacademy_desc"),
      stats: [
        { label: t("ach_itacademy_stat1_label"), value: t("ach_itacademy_stat1_value") },
        { label: t("ach_itacademy_stat2_label"), value: t("ach_itacademy_stat2_value") },
        { label: t("ach_itacademy_stat3_label"), value: t("ach_itacademy_stat3_value") },
        { label: t("ach_itacademy_stat4_label"), value: t("ach_itacademy_stat4_value") },
      ],
      img: null, // Add certificate image path here when available
    },
  ];

  return (
    <section id="achievements">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="ach-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="ach-lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="ach-lightbox-close clickable"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="ach-lightbox-img"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="section__text__p1">{t("ach_subtitle")}</p>
        <h1 className="title">{t("ach_title")}</h1>
      </motion.div>

      <div className="ach-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            className="ach-card card-hover"
            variants={fadeIn(index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card Header */}
            <div className="ach-card-header">
              <div className="ach-icon-wrap">{item.icon}</div>
              <span
                className="ach-badge"
                style={{ backgroundColor: item.badgeColor }}
              >
                {item.badge}
              </span>
            </div>

            <h2 className="ach-card-title">{item.title}</h2>
            <p className="ach-card-desc">{item.description}</p>

            {/* Score Grid */}
            <div className="ach-stats-grid">
              {item.stats.map((stat) => (
                <div key={stat.label} className="ach-stat">
                  <span className="ach-stat-value">{stat.value}</span>
                  <span className="ach-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Certificate Preview / Placeholder */}
            {item.img ? (
              <div
                className="ach-cert-preview clickable"
                onClick={() => setLightbox({ img: item.img, title: item.title })}
                title={t("ach_view_cert")}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="ach-cert-thumb"
                  style={{ objectPosition: item.imgPosition || "top center" }}
                />
                <div className="ach-cert-overlay">
                  <span>🔍 {t("ach_view_cert")}</span>
                </div>
              </div>
            ) : (
              <div className="ach-cert-placeholder">
                <span className="ach-cert-placeholder-icon">📜</span>
                <span className="ach-cert-placeholder-text">{t("ach_cert_soon")}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
