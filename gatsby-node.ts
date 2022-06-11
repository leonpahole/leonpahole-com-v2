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
    const blogListPath = RoutingUtil.getBlogListLink(pageNumber + 1);
    actions.createPage({
      path: blogListPath,
      component: blogListTemplate,
      context: {
        limit: BlogPostsPerPage,
        skip: pageNumber * BlogPostsPerPage,
        numPages,
        currentPage: pageNumber + 1,
      },
    });

    // redirect from old page
    const oldBlogListPath = RoutingUtil.getOldPageBlogListLink(pageNumber + 1);
    actions.createRedirect({
      fromPath: oldBlogListPath,
      toPath: blogListPath,
    });
  });
};

const createBlogPostRedirectsForOldPage = (
  actions: CreatePagesArgs["actions"]
) => {
  const redirects = [
    {
      from: "/2020/02/hello_world.html",
      to: "/blog/hello-world",
    },
    {
      from: "/2020/03/javascript_object_destructuring_for_better_functions.html",
      to: "/blog/javascript-object-destructuring-for-better-functions",
    },
    {
      from: "/2020/04/dockerizing_wordpress.html",
      to: "/blog/dockerizing-wordpress",
    },
    {
      from: "/2020/04/docker_swarm_spa_nginx_proxy.html",
      to: "/blog/docker-swarm-spa-nginx-proxy",
    },
    {
      from: "/2020/05/traefik-basic-setup.html",
      to: "/blog/traefik-basic-setup",
    },
    {
      from: "/2020/05/traefik-nodejs-api-and-db.html",
      to: "/blog/traefik-nodejs-api-and-db",
    },
    {
      from: "/2020/05/traefik-nginx-proxy.html",
      to: "/blog/traefik-nginx-proxy",
    },
    {
      from: "/2020/05/traefik-s3-proxy.html",
      to: "/blog/traefik-s3-proxy",
    },
    {
      from: "/2020/11/mongodb-data-modelling-notes.html",
      to: "/blog/mongodb-data-modelling-notes",
    },
    {
      from: "/2020/11/mongodb-aggregation-framework-notes.html",
      to: "/blog/mongodb-aggregation-framework-notes",
    },
    {
      from: "/2020/11/traefik-ip-whitelist.html",
      to: "/blog/traefik-ip-whitelist",
    },
    {
      from: "/2021/11/the_return.html",
      to: "/blog/the-return",
    },
    {
      from: "/2021/11/i_am_not_afraid_to_not_know_things_anymore.html",
      to: "/blog/i-am-not-afraid-to-not-know-things-anymore",
    },
    {
      from: "/2021/12/keeping-a-positive-outlook.html",
      to: "/blog/keeping-a-positive-outlook",
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

  createBlogPostRedirectsForOldPage(actions);
};
