import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import "./page-wrapper.scss";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showNavigation?: boolean;
}

export default function Layout({
  children,
  title,
  showNavigation = true,
}: LayoutProps): React.ReactElement {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>{title} | Leon Pahole</title>
      </Helmet>

      {showNavigation && <Navigation />}
      <div className="site">
        <div className="site-content">{children}</div>
      </div>
    </>
  );
}
