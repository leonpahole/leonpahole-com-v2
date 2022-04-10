import Layout from "components/Layout/PageWrapper/PageWrapper";
import NotFoundPage from "components/Page/NotFoundPage/NotFoundPage";
import * as React from "react";

function NotFound() {
  return (
    <Layout title="Not found">
      <NotFoundPage />
    </Layout>
  );
}

export default NotFound;