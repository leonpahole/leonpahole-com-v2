import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/PageWrapper/PageWrapper";
import { BlogModels } from "models/blog-models";
import { BlogPostItem } from "components/blog/BlogPostItem/BlogPostItem";
import { SEO } from "components/seo/SEO";
import { getSrc } from "gatsby-plugin-image";

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
    <Layout>
      <SEO
        title={blogPost.title}
        description={blogPost.excerpt}
        article
        image={
          blogPost.coverImage?.src ? getSrc(blogPost.coverImage.src) : undefined
        }
      />
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
        cover_image {
          alt
          credit_link
          credit_text
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
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
