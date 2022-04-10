import React from "react";
import Navigation from "../Navigation/Navigation";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,
                                 maximum-scale=1.0, user-scalable=no"
        />
        <title>{title} | Leon Pahole</title>
      </Helmet>

      {showNavigation && <Navigation />}
      <div className="site">
        <div className="site-content">{children}</div>
      </div>
    </>
  );
}
