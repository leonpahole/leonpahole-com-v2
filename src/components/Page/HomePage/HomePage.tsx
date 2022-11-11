import { faBolt, faBriefcase, faBullseye, faGraduationCap, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SEO } from "components/seo/SEO";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "src/components/Page/HomePage/home-page.scss";

export const HomePage = () => {
  return (
    <>
      <SEO />

      <section className="home-page-section">
        <StaticImage className="personal-image" alt="Leon Pahole" src="../../../images/LeonPahole.png" />

        <div className="greeting-container">
          <h1 className="greeting-title">Hi, I&apos;m Leon Pahole</h1>
          <h2 className="greeting-subtitle">Full-stack web developer</h2>
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
            <FontAwesomeIcon icon={faBullseye} className="short-presentation-icon" /> My goal is to solve problems by
            being the best version of myself, learning something new every day, improving my productivity, staying
            healthy, and passing my knowledge to other people.
          </p>
          <p>
            <FontAwesomeIcon icon={faBriefcase} className="short-presentation-icon" /> I have 5 years of experience in
            full-stack web development - frontend, backend, mobile, DevOps, cloud, and system administration.
          </p>
          <p>
            <FontAwesomeIcon icon={faBolt} className="short-presentation-icon" /> I have experience in technical leading
            of agile teams and project management.
          </p>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} className="short-presentation-icon" /> I have a bachelor&apos;s
            degree in computer science and information technologies.
          </p>
          <p>
            <FontAwesomeIcon icon={faLightbulb} className="short-presentation-icon" /> My other points of interest
            include algorithms & data structures and security.
          </p>
          <br />
          <p>
            For more information, <Link to="/about">check out my full CV</Link>.
          </p>
        </div>
      </section>
    </>
  );
};
