import { SEO } from "components/seo/SEO";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "components/Page/AboutPage/about-page.scss";

export const AboutPage = () => {
  return (
    <>
      <SEO title="About me" description="My skills, experience and future goals" />

      <section id="introduction-section" className="about-me-section">
        <h1 className="site-heading">About me</h1>

        <div>
          <div className="personal-image-container">
            <StaticImage className="personal-image" alt="Leon Pahole" src="../../../images/LeonPahole.png" />
          </div>

          <p>
            My name is Leon Pahole and I come from Maribor, Slovenia. I am 25 years old. I work as a full-stack web
            developer. I have working experience in frontend, backend, mobile, DevOps, cloud, and system administration.
            I am passionate about learning new things and using my knowledge to solve problems.
          </p>

          <p>
            I have experience in technical leading of agile teams of up to 7 people. I have a solid grasp of project
            dynamics from the time I worked as a project manager. I am proficient at communication, both with my team
            and the end user. I also consider myself a good mentor and teacher. I enjoy presenting and passing knowledge
            to an individual or a large group of people, while also researching on my own or learning from someone else.
          </p>

          <div>
            <p> I identify myself by the following values:</p>
            <ul>
              <li>
                <em className="about-me-section-value">Simplicity:</em> I always strive for simple solutions that are
                understandable and maintainable.
              </li>
              <li>
                <em className="about-me-section-value">Adaptability:</em> I am not afraid of foreign technologies and
                new concepts. My goal is to solve problems by utilizing technologies, rather than depending on them.
              </li>
              <li>
                <em className="about-me-section-value">Productivity:</em> I place a lot of emphasis on providing maximum
                value in a given period of time by optimizing my workspace.
              </li>
              <li>
                <em className="about-me-section-value">Critical thinking:</em> I believe in the power of feedback,
                whether it is self-reflection, a code review, or a product improvement. I can both give and receive
                constructive feedback.
              </li>
              <li>
                <em className="about-me-section-value">Continuous learning:</em> I view knowledge as my most valuable
                asset. I learn something new every day.
              </li>
              <li>
                <em className="about-me-section-value">Health:</em> I follow the belief that being the best version of
                myself requires a healthy daily routine.
              </li>
            </ul>
          </div>

          <p>
            In my time off the computer, I like to do sports, read books, pretend I know how to play the guitar, learn
            about economics and history, and listen to music.
          </p>
        </div>
      </section>

      <section id="skills-section" className="about-me-section">
        <h1>Technologies I work with</h1>

        <p>
          I consider myself very adaptable when it comes to technologies along the web development stack. I see
          technologies as tools that solve problems and I anticipate that they will change in the future as new ways to
          be more productive are discovered. I have shown numerous times that I can quickly adapt to and solve problems
          in unknown code bases with technologies that I have not worked with before.
        </p>

        <p>
          The technologies that I have active working experience with within the last 2 years are listed below. I always
          choose the technology based on the nature of the problem and the surrounding team. When I have the ability to,
          I choose the technologies that I currently prefer (these are placed higher up within their respective lists
          below).
        </p>

        <div className="skill-container">
          <h4 className="skill-heading">Front-end web development</h4>

          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>Gatsby</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Back-end web development</h4>

          <ul>
            <li>Nest.js</li>
            <li>.NET Core</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Databases</h4>

          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>ArangoDB</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Mobile app development</h4>

          <ul>
            <li>React Native</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">System administration</h4>

          <ul>
            <li>High proficiency with Linux terminal</li>
            <li>Bash</li>
            <li>Server setup</li>
            <li>Network configuration</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">DevOps</h4>

          <ul>
            <li>Docker and docker-compose</li>
            <li>Docker swarm</li>
            <li>Traefik</li>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>Travis CI</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Cloud</h4>

          <ul>
            <li>AWS</li>
            <li>Familiar with Azure and Google Cloud</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Programming languages</h4>

          <ul>
            <li>JavaScript / Typescript</li>
            <li>C++</li>
            <li>Java</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </div>
      </section>

      <section id="work-experience-section" className="about-me-section">
        <h1>Work experience</h1>

        <p>My main work experience is focused on full-stack web development.</p>

        <div className="timeline-container">
          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">October 2021 - Present</h3>

              <h4 className="timeline-event-name">Self-employed contractor</h4>

              <p className="event-text-additional">
                I am a self-employed contractor, specializing in full-stack web development. I am proficient at
                communicating with the client, ensuring that the end product is exactly what they expected. Thanks to my
                experience as a project manager, I am able to understand the business side of software projects. This
                allows me to detect risks and money-making opportunities, and speak to clients in a way that makes
                technical subjects easy to understand. I also have a good understanding of UX. I currently work with
                Povio Labs, U-centrix, and Omniopti.
              </p>
            </div>
          </div>

          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">October 2017 - October 2021</h3>

              <h4 className="timeline-event-name">Software developer, project manager, and tech lead at U-centrix</h4>

              <p className="event-text-additional">
                I started working as a backend engineer, before expanding into frontend development, mobile app
                development, cloud, and DevOps. I also did a lot of technical research to improve the products of the
                company and to pass the knowledge to my coworkers. Eventually, I became a tech lead and a project
                manager on 4 different projects, related to tourism, the gaming industry, and logistics. I helped
                improve project management, operations, and communications while learning about the business side of the
                software world. The largest team that I led was comprised of 7 people.
              </p>

              <ul className="timeline-event-list">
                <li>Tech lead</li>
                <li>Backend and frontend development</li>
                <li>System programming</li>
                <li>System administration</li>
                <li>DevOps</li>
                <li>Cloud</li>
                <li>Mobile app development</li>
                <li>Project management</li>
              </ul>
            </div>
          </div>

          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container timeline-text-container-last">
              <h3 className="timeline-event-time">June 2017 - October 2017</h3>

              <h4 className="timeline-event-name">
                ASP .NET developer at Faculty of electrical engineering, computer science, and informatics in Maribor
              </h4>

              <p className="event-text-additional">
                I have developed a web application using .NET for importing, creating and tracking records, articles and
                books.
              </p>

              <ul className="timeline-event-list">
                <li>ASP .NET MVC 4 (C#)</li>
                <li>CSS, HTML, and Javascript (jQuery, Bootstrap)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education-section" className="about-me-section">
        <h1>Education</h1>

        <p>
          My interest in computers sparkled in 7th grade of elementary school when I began actively using the computer.
          I used YouTube videos to learn C++ and Java. Because I really enjoyed programming, I decided to pursue a
          programming career.
        </p>

        <div className="timeline-container">
          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">October 2019 - present</h3>

              <h4 className="timeline-event-name">
                Faculty of electrical engineering, computer science and informatics (masters)
              </h4>

              <p className="timeline-event-description">Study program: Computer science and information technologies</p>

              <ul>
                <li>Advanced algorithms and data structures</li>
                <li>Computer vision</li>
                <li>Signals</li>
                <li>Natural language processing</li>
                <li>Image processing</li>
              </ul>
            </div>
          </div>

          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">October 2015 - July 2019</h3>

              <h4 className="timeline-event-name">
                Faculty of electrical engineering, computer science and informatics (bachelors degree)
              </h4>

              <p>Study program: Computer science and information technologies</p>

              <ul>
                <li>C++, C# and C programming</li>
                <li>Full stack web development in Node.js and Angular 2+ and mobile app development in Ionic</li>
                <li>Theory of operating systems, computer networks, and computer architectures</li>
                <li>Basic algorithms and data structures</li>
                <li>System administration</li>
                <li>Compilers</li>
                <li>SQL and NoSQL databases</li>
                <li>Average grade: 9.87/10</li>
              </ul>

              <p>
                In second and third grade, I worked in a team of 3 to create a mobile and web application for sports
                journals. We used the MEAN stack and Ionic.
              </p>

              <p>
                In the study year 2018 - 2019 I took a gap year to work and travel. I graduated on the 26. 6. 2019. My
                thesis was titled
                <i>Smart door implemented with computer vision on Arduino platform</i> and is available for viewing{" "}
                <Link to="https://dk.um.si/IzpisGradiva.php?id=73626&lang=eng" target="_blank">
                  here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container timeline-text-container-last">
              <h3 className="timeline-event-time">September 2011 - June 2015</h3>

              <h4 className="timeline-event-name">Middle school of electrical engineering and computer science</h4>

              <p>Study program: Technical gymnasium</p>

              <ul>
                <li>Basic HTML, JavaScript, and CSS</li>
                <li>Java programming</li>
                <li>Average grade: 4.8/5</li>
              </ul>

              <p>As part of the final exam in the computer science subject, I wrote a text-based game in Java.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
