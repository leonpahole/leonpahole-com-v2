/* eslint-disable no-restricted-imports */
import type { CreatePagesArgs, GatsbyNode } from "gatsby";
import path from "path";
import { RoutingUtil } from "./src/util/routing-util";

const queryPageGeneratorData = async (graphql: CreatePagesArgs["graphql"]) => {
  return graphql(`
    query PageGeneratorIndex {
      allCategories: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
      allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
};

const generateCategoriesPages = (
  allCategories: { fieldValue: string }[],
  actions: CreatePagesArgs["actions"]
) => {
  const categoryTemplate = path.resolve("src/templates/Categories.tsx");

  // create category pages
  allCategories.forEach((category) => {
    actions.createPage({
      path: RoutingUtil.getCategoryLink(category.fieldValue),
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};

const generateBlogPostPages = (
  allBlogPosts: { fields: { slug: string } }[],
  actions: CreatePagesArgs["actions"]
) => {
  const blogPostTemplate = path.resolve("src/templates/BlogPost.tsx");
  // create category pages
  allBlogPosts.forEach((post) => {
    actions.createPage({
      path: RoutingUtil.getBlogPostLink(post.fields.slug),
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
      },
    });
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const result = await queryPageGeneratorData(graphql);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  generateCategoriesPages((result.data as any).allCategories.group, actions);
  generateBlogPostPages((result.data as any).allPosts.nodes, actions);
};
