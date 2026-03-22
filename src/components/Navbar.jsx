import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { t, i18n } = useTranslation();
  
  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navLinks = [
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_experience"), href: "#experience" },
    { name: t("nav_projects"), href: "#projects" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Akbarshoh.<span className="highlight">dev</span></div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="clickable">{link.name}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifySelf: 'end' }}>
          <select 
            onChange={changeLanguage} 
            value={i18n.language} 
            className="clickable"
            style={{ 
              background: 'transparent', 
              color: 'var(--primary-color)', 
              border: '1px solid var(--border-color)', 
              padding: '0.2rem 0.5rem', 
              borderRadius: '0.5rem',
              outline: 'none'
            }}
          >
            <option value="en" style={{ color: '#000' }}>EN</option>
            <option value="ru" style={{ color: '#000' }}>RU</option>
            <option value="uz" style={{ color: '#000' }}>UZ</option>
          </select>
          <button onClick={toggleTheme} className="theme-btn clickable" aria-label="Toggle Theme">
             {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
             ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
             )}
          </button>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Akbarshoh.<span className="highlight">dev</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Theme">
             {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
             ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
             )}
          </button>
          <div className="hamburger-menu">
            <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleDrawer}>
              <span></span>
              <span></span>
              <span></span>
            </div>

          <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="drawer-content">
            <ul className="drawer-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={toggleDrawer}>{link.name}</a>
                </li>
              ))}
            </ul>
          </Drawer>
        </div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;
