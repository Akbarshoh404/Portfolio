import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import pic1 from "./assets/profile-pic.png";
import pic2 from "./assets/linkedin.png";
import pic3 from "./assets/github.png";
import pic4 from "./assets/me.jpg";
import pic5 from "./assets/experience.png";
import pic6 from "./assets/education.png";
import pic8 from "./assets/checkmark.png";
import pic12 from "./assets/email.png";
import pic13 from "./assets/telegram.webp";
import me2 from "./assets/me2.png";

import tetra from "./assets/tetra textile.jpg";
import cambridge from "./assets/cambridge.png";
import edurate from "./assets/EduRate.png";
import lms from "./assets/lms.jpg";

import resume from "./assets/resume.pdf";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Mr.Akbarshokh</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Mr.Akbarshokh</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            classNameName="bla bla bla drawer"
          >
            <div className="draver">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
          </Drawer>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={pic1} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Akbarshoh Ismatov</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <a
              download="Ismatov Akbarshoh Resume"
              target="_blank"
              href={resume}
            >
              <button className="btn btn-color-2">Download CV</button>
            </a>
            <a href="#contact">
              <button className="btn btn-color-1">Contact Info</button>
            </a>
          </div>
          <div id="socials-container">
            <a href="https://t.me/MrAkbarshoh">
              <img src={pic13} alt="My Github profile" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/akbarshoh-ismatov-4179b52a8/">
              <img src={pic2} alt="My Github profile" className="icon" />
            </a>

            <a href="https://github.com/Akbarshoh404">
              <img src={pic3} alt="My Github profile" className="icon" />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          {/* <div className="section__pic-container">
            <img src={me2} alt="Profile picture" className="about-pic" />
          </div> */}
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={pic5} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img src={pic6} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>IT-Academy and "Muhammad Al-Xorazmiy" School</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello I am Front-End Developer from Uzbekistan. I invite you to
                explore my work and learn more about my journey in the Front-End
                development. I am 15 years old. With 2 years of experience in
                the industry, I have had the privilege of working with a diverse
                range of clients and projects. Each endeavor has allowed me to
                refine my skills and expand my horizons, constantly pushing the
                boundaries of what is possible
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <div className="article-container">
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>SASS</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>TypeScript</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React.js</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <div className="article-container">
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Java</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Python</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Next.js</h3>
                  </div>
                </article>
                <article>
                  <img src={pic8} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Tailwind CSS</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="project-picture">
                <img src={tetra} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Tetra Textile
              </h2>
              <div className="btn-container">
                <Link to="https://github.com/Akbarshoh404/Tetra-Textile">
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link to="https://tetra-textile.netlify.app/">
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="project-picture">
                <img src={cambridge} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Cambrdige</h2>
              <div className="btn-container">
                <Link to="https://github.com/Akbarshoh404/Cambridge-Website">
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link to="https://cambridge-lessons.netlify.app">
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="project-picture">
                <img src={edurate} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">EduRate</h2>
              <div className="btn-container">
                <Link to="https://github.com/BFozilkhon/EduRate">
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link to="https://www.edurate.uz/">
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="project-picture">
                <img src={lms} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">LMS</h2>
              <div className="btn-container">
                <Link to="https://github.com/Akbarshoh404/LMS">
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link to="https://lms-hogwarts.netlify.app">
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={pic12}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:mr.akb404@gmail.com">Mr.Akb404@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src={pic3} alt="LinkedIn icon" className="icon contact-icon" />
            <p>
              <a href="https://github.com/Akbarshoh404">GitHub</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Home;
