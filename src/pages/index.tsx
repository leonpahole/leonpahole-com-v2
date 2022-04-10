import * as React from "react";
import Layout from "components/Layout/Layout";
import Layout2 from "components/Layout2/Layout";

function IndexPage() {
  return (
    <main>
      <title>Home Page</title>
      <h1 className="container">Congratulations</h1>
      <Layout />
      <Layout2 />
    </main>
  );
}

export default IndexPage;
