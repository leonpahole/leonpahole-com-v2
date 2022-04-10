import HomePage from "components/Page/HomePage/HomePage";
import Layout from "components/Layout/PageWrapper/PageWrapper";
import * as React from "react";

function Home() {
  return (
    <Layout title="Home" showNavigation={false}>
      <HomePage />
    </Layout>
  );
}

export default Home;
