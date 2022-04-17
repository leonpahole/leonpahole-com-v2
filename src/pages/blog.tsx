import Layout from "components/Layout/PageWrapper/PageWrapper";
import * as React from "react";
import { graphql } from "gatsby";
import { BlogPostList } from "components/blog/BlogPostList/BlogPostList";
import { BlogModels } from "models/BlogPost";

// eslint-disable-next-line no-restricted-imports
import { BlogIndexQuery } from "../../graphql-types";

interface IProps {
  data: BlogIndexQuery;
}

const Blog: React.FC<IProps> = ({ data }) => {
  const blogPosts = React.useMemo(() => {
    return BlogModels.Mapper.toBlogPosts(data.allBlogPosts.nodes);
  }, [data]);

  return (
    <Layout title="Blog">
      <BlogPostList posts={blogPosts} />
    </Layout>
  );
};

export const blogIndexQuery = graphql`
  query BlogIndex {
    allBlogPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default Blog;
