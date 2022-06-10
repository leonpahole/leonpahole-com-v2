import { HomePage } from "components/Page/HomePage/HomePage";
import Layout from "components/Layout/PageWrapper/PageWrapper";
import * as React from "react";

const Home = () => {
  return (
    <Layout showNavigation={false}>
      <HomePage />
    </Layout>
  );
};

export default Home;
