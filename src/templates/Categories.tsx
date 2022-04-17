import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/PageWrapper/PageWrapper";
import { BlogPostList } from "components/blog/BlogPostList/BlogPostList";
import { BlogModels } from "models/BlogPost";

// eslint-disable-next-line no-restricted-imports
import { CategoryIndexQuery } from "../../graphql-types";

interface IProps {
  data: CategoryIndexQuery;
  pageContext: {
    category: string;
  };
}

const Categories: React.FC<IProps> = ({ data, pageContext }) => {
  const blogPosts = useMemo(() => {
    return BlogModels.Mapper.toBlogPosts(data.allCategoryPosts.nodes);
  }, [data]);

  return (
    <Layout title={`${pageContext.category} blog posts`}>
      <BlogPostList posts={blogPosts} forCategory={pageContext.category} />
    </Layout>
  );
};

export const categoryQuery = graphql`
  query CategoryIndex($category: String) {
    allCategoryPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
