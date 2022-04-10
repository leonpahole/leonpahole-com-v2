import { Link } from "gatsby";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <h1 className="site-heading">Get in contact</h1>

      <p>
        I am always open for new suggestions, possibilities of cooperation or
        opportunities, so do not hesitate to contact me :)
      </p>

      <ul>
        <li>
          <strong>E-mail</strong>:
          <a href="mailto:leon.pahole@gmail.com">leon.pahole@gmail.com</a>
        </li>
        <li>
          <strong>GitHub</strong>:
          <Link to="https://github.com/leonpahole" target="_blank">
            leonpahole
          </Link>
        </li>
        <li>
          <strong>GitLab</strong>:
          <Link to="https://gitlab.com/leonpahole" target="_blank">
            leonpahole
          </Link>
        </li>
        <li>
          <strong>LinkedIn</strong>: <i>Coming soon</i>
        </li>
      </ul>
    </>
  );
}
