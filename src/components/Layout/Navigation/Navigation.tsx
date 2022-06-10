import { Link } from "gatsby";
import React from "react";
import "components/Layout/Navigation/navigation.scss";

export default function Navigation() {
  return (
    <div className="header-navigation-container">
      <h2 className="navigation-title">
        <Link className="title-link" to="/">
          Leon Pahole
        </Link>
      </h2>
      <ul className="item-container">
        <li className="menu-item selected">
          <Link to="/about">About me</Link>
        </li>
        <li className="menu-item selected">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="menu-item selected">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
