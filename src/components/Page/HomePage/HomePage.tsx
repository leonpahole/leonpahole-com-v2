import React from "react";
import "src/components/Page/HomePage/home-page.scss";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faHeart,
  faLightbulb,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

export const HomePage = () => {
  return (
    <section className="home-page-section">
      <StaticImage
        className="personal-image"
        alt="Leon Pahole"
        src="../../../images/LeonPahole.png"
      />

      <div className="greeting-container">
        <h1 className="greeting-title">Hi, I&apos;m Leon Pahole</h1>
        <h2 className="greeting-subtitle">
          Web developer &bull; computer science student
        </h2>
      </div>

      <div className="navigation-container">
        <nav className="home-page-menu">
          <ul className="item-container">
            <li className="menu-item">
              <Link to="/about">About me</Link>
            </li>
            <li className="menu-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="short-presentation-container">
        <p>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="short-presentation-icon"
          />{" "}
          I come from Maribor, Slovenia and I am 25 years old.
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} className="short-presentation-icon" />{" "}
          I love anything related to computers.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="short-presentation-icon"
          />{" "}
          I have a bachelors degree in computer science and information
          technologies. I currently study for a masters degree at Faculty of
          electrical engineering, computer science and informatics in Maribor.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faBriefcase}
            className="short-presentation-icon"
          />{" "}
          I am self-employed and currently work as a web developer, system
          administator, devops engineer and cloud architect.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faLightbulb}
            className="short-presentation-icon"
          />{" "}
          My current points of interest include cloud, devops, infrastructure
          and machine learning.
        </p>
        <br />
        <p>
          For more information, <Link to="/about">check out my full CV</Link>.
        </p>
      </div>
    </section>
  );
};
