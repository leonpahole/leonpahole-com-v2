import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./about-page.scss";

export const AboutPage = () => {
  return (
    <>
      <section id="introduction-section" className="about-me-section">
        <h1 className="site-heading">About me</h1>

        <div>
          <div className="personal-image-container">
            <StaticImage
              className="personal-image"
              alt="Leon Pahole"
              src="../../../images/LeonPahole.png"
            />
          </div>

          <p>
            My name is Leon Pahole and I come from Maribor, Slovenia. I am 25
            years old. I study computer science and I currently work as a web
            developer. I have working experience in full stack web development,
            *nix system administration, server configuration, devops, cloud and
            system maintenance. As a hobby, I also work with machine learning,
            computer vision and blockchain. I am passionate about learning new
            things and using my knowledge to create applications.
          </p>

          <p>
            I am proficient at communication, both with my team and the end
            user. I also consider myself a good menthor and a teacher. I enjoy
            presenting and passing knowledge to an individual or a large group
            of people, while also researching on my own or learning from someone
            else.
          </p>

          <p>
            In my time off computer, I like to play sports, read books, travel
            and listen to music.
          </p>
        </div>
      </section>

      <section id="work-experience-section" className="about-me-section">
        <h1>Work experience</h1>

        <p>
          My main work experience is currently focused on full-stack web
          development.
        </p>

        <div className="timeline-container">
          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">October 2021 - Present</h3>

              <h4 className="timeline-event-name">Self-employed contractor</h4>

              <p className="event-text-additional">
                I am self-employed contractor, specialized in full-stack web
                development. I am proficient at communicating with the client,
                ensuring that the end product is exactly what they expected.
                Thanks to my experience as a project manager, I am able to
                understand the business side of software projects. This allows
                me to detect risks, money making oppurtunities and speak to
                clients in a way that makes technical subjects easy to
                understand. I also have a good understanding of UX. I currently
                work with Povio Labs, U-centrix and Omniopti. My big ambition is
                to turn this into a business with multiple employees.
              </p>
            </div>
          </div>

          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">
                October 2017 - October 2021
              </h3>

              <h4 className="timeline-event-name">
                Software developer, project manager and tech lead at U-centrix
              </h4>

              <p className="event-text-additional">
                I started working as a backend engineer, before expanding into
                frontend development, mobile app development, cloud, and devops.
                I also did a lot of technical research in order to improve the
                products of the company and to pass the knowledge to my
                coworkers. Eventually I became a tech lead and a project manager
                on 4 different projects, related to tourism, gaming industry,
                and logistics. I helped improve project management, operations
                and communications, while learning about the business side of
                the software world. The largest team that I lead comprised of 7
                people.
              </p>

              <ul className="timeline-event-list">
                <li>Tech lead</li>
                <li>Backend and frontend development</li>
                <li>System programming</li>
                <li>System administration</li>
                <li>Devops</li>
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
                ASP .NET developer at Faculty of electrical engineering,
                computer science and informatics in Maribor
              </h4>

              <p className="event-text-additional">
                I have developed a web application using .NET for importing,
                creating and tracking records, articles and books.
              </p>

              <ul className="timeline-event-list">
                <li>ASP .NET MVC 4 (C#)</li>
                <li>CSS, HTML and Javascript (jQuery, Bootstrap)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education-section" className="about-me-section">
        <h1>Education</h1>

        <p>
          My interest in computers was sparkled in 7th grade of elementary
          school, when I began actively using the computer. I used YouTube
          videos to learn C++ and Java. Because I really enjoyed programming, I
          decided to pursue a programming career.
        </p>

        <div className="timeline-container">
          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container">
              <h3 className="timeline-event-time">October 2019 - present</h3>

              <h4 className="timeline-event-name">
                Faculty of electrical engineering, computer science and
                informatics (masters)
              </h4>

              <p className="timeline-event-description">
                Study programme: Computer science and information technologies
              </p>

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
                Faculty of electrical engineering, computer science and
                informatics (bachelors)
              </h4>

              <p>
                Study programme: Computer science and information technologies
              </p>

              <ul>
                <li>C++, C# and C programming</li>
                <li>
                  Full stack web development in Node.js and Angular 2+ and
                  mobile app development in Ionic
                </li>
                <li>
                  Theory of operating systems, computer networks and computer
                  architectures
                </li>
                <li>Basic algorithms and data structures</li>
                <li>System administration</li>
                <li>Compilers</li>
                <li>SQL and NoSQL databases</li>
                <li>Average grade: 9.87/10</li>
              </ul>

              <p>
                In second and third grade, I worked in a team of 3 to create a
                mobile and web application for sport journals. We used the MEAN
                stack and Ionic.
              </p>

              <p>
                In study year 2018 - 2019 I took a gap year to work and travel.
                I graduated on 26. 6. 2019. My thesis was titled
                <i>
                  Smart door implemented with computer vision on Arduino
                  platform
                </i>
                and is available for viewing{" "}
                <Link
                  to="https://dk.um.si/IzpisGradiva.php?id=73626&lang=eng"
                  target="_blank"
                >
                  here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="timeline-event-container">
            <div className="timeline-event-graphic" />
            <div className="timeline-text-container timeline-text-container-last">
              <h3 className="timeline-event-time">
                September 2011 - June 2015
              </h3>

              <h4 className="timeline-event-name">
                Middle school of electrical engineering and computer science
              </h4>

              <p>Study programme: Technical gymnasium</p>

              <ul>
                <li>Basic HTML, JavaScript and CSS</li>
                <li>Java programming</li>
                <li>Average grade: 4.8/5</li>
              </ul>

              <p>
                As part of the final exam in the computer science subject, I
                wrote a text-based game in Java.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills-section" className="about-me-section">
        <h1>Technical skills</h1>

        <p>
          My skills are a combination of knowledge from school, experience from
          work and personal research and projects. I am always driven to improve
          my existing skills or acquiring new ones, but my current focus is to
          gain more practical knowledge by creating real-world applications
          using technologies that I know.
        </p>

        <div className="skill-container">
          <h4 className="skill-heading">Web development</h4>

          <ul>
            <li>Node.js + express + ES6 Javascript</li>
            <li>GraphQL using Node.js</li>
            <li>NoSQL databases (MongoDB, OrientJS, ArangoDB)</li>
            <li>SQL language and databases (Oracle, MySQL, PostgreSQL)</li>
            <li>Angular 9</li>
            <li>Sinatra</li>
            <li>Ruby on rails</li>
            <li>ASP .NET MVC 4</li>
            <li>PHP MVC (without a framework)</li>
            <li>Wordpress (using and writing themes and plugins)</li>
            <li>HTML, CSS3, JavaScript, jQuery, Bootstrap</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Jekyll</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">*nix system administration</h4>

          <ul>
            <li>Bash</li>
            <li>Installation and configuration</li>
            <li>Network configuration and debugging</li>
            <li>User structure</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Devops</h4>

          <ul>
            <li>Docker and docker-compose</li>
            <li>Docker swarm</li>
            <li>Traefik</li>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>Gitlab CI/CD</li>
            <li>Travis CI</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Cloud</h4>

          <ul>
            <li>AWS (EC2, S3, RDS, IoT, Lambda, IAM, KMS, Cognito)</li>
            <li>Familiar with Azure and Google cloud</li>
          </ul>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">Blockchain</h4>

          <ul>
            <li>Theorietical knowledge of Bitcoin and smart contracts</li>
            <li>Tezos smart contract development</li>
          </ul>

          <p>
            In 2019 I passed the B9lab Tezos smart contract developer course.
            The certificate is available for viewing{" "}
            <Link
              to="https://certificates.b9lab.com/certificate.html?uuid=569728a7-aee1-4031-b87e-13456a8dede5"
              target="_blank"
            >
              here
            </Link>
            .
          </p>
        </div>

        <div className="skill-container">
          <h4 className="skill-heading">
            Machine learning, computer vision, deep learning
          </h4>

          <ul>
            <li>Theoretical knowledge of algorithms</li>
            <li>Python: Torch, Tensorflow</li>
            <li>Machine learning algorithms implementation using Octave</li>
            <li>
              Basic application of computer vision algorithms using OpenCV
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
