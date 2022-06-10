import Navigation from "components/Layout/Navigation/Navigation";
import React from "react";
import "components/Layout/PageWrapper/page-wrapper.scss";

interface LayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
}

export default function Layout({
  children,
  showNavigation = true,
}: LayoutProps): React.ReactElement {
  return (
    <>
      {showNavigation && <Navigation />}
      <div className="site">
        <div className="site-content">{children}</div>
      </div>
    </>
  );
}
