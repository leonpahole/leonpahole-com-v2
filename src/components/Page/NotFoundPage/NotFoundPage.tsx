import { Link } from "gatsby";
import React from "react";

export const NotFoundPage = () => {
  return (
    <>
      <h1 className="site-heading">Not found</h1>

      <p>The requested page was not found.</p>

      <Link to="/">Back to home</Link>
    </>
  );
};
