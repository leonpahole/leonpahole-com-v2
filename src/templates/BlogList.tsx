import Layout from "components/Layout/PageWrapper/PageWrapper";
import * as React from "react";
import { graphql } from "gatsby";
import { BlogPostList } from "components/blog/BlogPostList/BlogPostList";
import { BlogModels } from "models/blog-models";
import { SEO } from "components/seo/SEO";

// eslint-disable-next-line no-restricted-imports
import { BlogListQuery } from "../../graphql-types";

interface IProps {
  data: BlogListQuery;
  pageContext: {
    numPages: number;
    currentPage: number;
  };
}

const BlogList: React.FC<IProps> = ({ data, pageContext }) => {
  const blogPosts = React.useMemo(() => {
    return BlogModels.Mapper.toBlogPosts(data.allBlogPosts.nodes);
  }, [data]);

  return (
    <Layout>
      <SEO title="Blog" description="My personal blog" />
      <BlogPostList
        posts={blogPosts}
        currentPage={pageContext.currentPage}
        numPages={pageContext.numPages}
      />
    </Layout>
  );
};

export const blogListQuery = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allBlogPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
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

export default BlogList;
