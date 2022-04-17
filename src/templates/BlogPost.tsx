import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/PageWrapper/PageWrapper";
import { BlogModels } from "models/BlogPost";
import { BlogPostItem } from "components/blog/BlogPostItem/BlogPostItem";

// eslint-disable-next-line no-restricted-imports
import { BlogPostDetailsQuery } from "../../graphql-types";

interface IProps {
  data: BlogPostDetailsQuery;
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  const blogPost = useMemo(() => {
    return BlogModels.Mapper.toBlogPost(data.blogPostDetails);
  }, [data]);

  return (
    <Layout title={`${blogPost.title}`}>
      <BlogPostItem post={blogPost} />
    </Layout>
  );
};

export const blogPostQuery = graphql`
  query BlogPostDetails($slug: String) {
    blogPostDetails: mdx(fields: { slug: { eq: $slug } }) {
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
      body
    }
  }
`;

export default BlogPost;
