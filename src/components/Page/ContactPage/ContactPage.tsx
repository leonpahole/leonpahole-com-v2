import { SEO } from "components/seo/SEO";
import { Link } from "gatsby";
import React from "react";

export const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" description="Get in contact with me" />

      <h1 className="site-heading">Get in contact</h1>

      <p>
        I am always open for new suggestions, possibilities of cooperation or
        opportunities, so do not hesitate to contact me :)
      </p>

      <ul>
        <li>
          <strong>E-mail</strong>:{" "}
          <a href="mailto:leon.pahole@gmail.com">leon.pahole@gmail.com</a>
        </li>
        <li>
          <strong>GitHub</strong>:{" "}
          <Link to="https://github.com/leonpahole" target="_blank">
            leonpahole
          </Link>
        </li>
      </ul>
    </>
  );
};
