/* eslint-disable no-restricted-imports */
import type { CreatePagesArgs, GatsbyNode } from "gatsby";
import path from "path";
import { RoutingUtil } from "./src/util/routing-util";

const BlogPostsPerPage = 10;

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

type GroupedCategory = { fieldValue: string; totalCount: number };

const generatePaginatedCategoryPage = (
  category: GroupedCategory,
  actions: CreatePagesArgs["actions"]
) => {
  const categoryTemplate = path.resolve("src/templates/Categories.tsx");

  const numPages = Math.ceil(category.totalCount / BlogPostsPerPage);

  Array.from({ length: numPages }).forEach((_, pageNumber) => {
    actions.createPage({
      path: RoutingUtil.getCategoryLink(category.fieldValue, pageNumber + 1),
      component: categoryTemplate,
      context: {
        limit: BlogPostsPerPage,
        skip: pageNumber * BlogPostsPerPage,
        numPages,
        currentPage: pageNumber + 1,
        category: category.fieldValue,
      },
    });
  });
};

const generatePaginatedCategoriesPages = (
  allCategories: GroupedCategory[],
  actions: CreatePagesArgs["actions"]
) => {
  // create category pages
  allCategories.forEach((category) => {
    generatePaginatedCategoryPage(category, actions);
  });
};

const generateBlogPostPages = (
  allBlogPosts: { fields: { slug: string } }[],
  actions: CreatePagesArgs["actions"]
) => {
  const blogPostTemplate = path.resolve("src/templates/BlogPost.tsx");

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

const generatePaginatedBlogListPages = (
  allBlogPosts: { fields: { slug: string } }[],
  actions: CreatePagesArgs["actions"]
) => {
  const blogListTemplate = path.resolve("src/templates/BlogList.tsx");

  const numPages = Math.ceil(allBlogPosts.length / BlogPostsPerPage);

  Array.from({ length: numPages }).forEach((_, pageNumber) => {
    actions.createPage({
      path: RoutingUtil.getBlogListLink(pageNumber + 1),
      component: blogListTemplate,
      context: {
        limit: BlogPostsPerPage,
        skip: pageNumber * BlogPostsPerPage,
        numPages,
        currentPage: pageNumber + 1,
      },
    });
  });
};

const createRedirects = (actions: CreatePagesArgs["actions"]) => {
  const redirects = [
    {
      from: "/2020/05/traefik-nodejs-api-and-db.html",
      to: "/blog/traefik-nodejs-api-and-db",
    },
  ];

  redirects.forEach((redirect) => {
    actions.createRedirect({
      fromPath: redirect.from,
      toPath: redirect.to,
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

  generatePaginatedCategoriesPages(
    (result.data as any).allCategories.group,
    actions
  );
  generateBlogPostPages((result.data as any).allPosts.nodes, actions);
  generatePaginatedBlogListPages((result.data as any).allPosts.nodes, actions);

  createRedirects(actions);
};
