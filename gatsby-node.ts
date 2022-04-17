const path = require("path");
const { GeneralUtil } = require("./src/util/general-util");

exports.createPages = async ({ actions, graphql, reporter }: any) => {
  const { createPage } = actions;

  const categoryTemplate = path.resolve("src/templates/category.tsx");
  const result = await graphql(`
    query CategoryIndex {
      allCategories: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const allCategories = result.data.allCategories.group;

  // create category pages
  allCategories.forEach((category: any) => {
    createPage({
      path: `/blog/categories/${GeneralUtil.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
