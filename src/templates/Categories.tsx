import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/PageWrapper/PageWrapper";
import { BlogPostList } from "components/blog/BlogPostList/BlogPostList";
import { BlogModels } from "models/blog-models";
import { SEO } from "components/seo/SEO";

// eslint-disable-next-line no-restricted-imports
import { CategoryIndexQuery } from "../../graphql-types";

interface IProps {
  data: CategoryIndexQuery;
  pageContext: {
    category: string;
    numPages: number;
    currentPage: number;
  };
}

const Categories: React.FC<IProps> = ({ data, pageContext }) => {
  const blogPosts = useMemo(() => {
    return BlogModels.Mapper.toBlogPosts(data.allCategoryPosts.nodes);
  }, [data]);

  return (
    <Layout>
      <SEO
        title={`${pageContext.category} blog posts`}
        description={`Blog posts for category: ${pageContext.category}`}
      />
      <BlogPostList
        posts={blogPosts}
        forCategory={pageContext.category}
        currentPage={pageContext.currentPage}
        numPages={pageContext.numPages}
      />
    </Layout>
  );
};

export const categoryQuery = graphql`
  query CategoryIndex($category: String, $skip: Int!, $limit: Int!) {
    allCategoryPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          categories
        }
        fields {
          slug
        }
        timeToRead
        excerpt
      }
    }
  }
`;

export default Categories;
