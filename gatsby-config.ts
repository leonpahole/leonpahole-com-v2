module.exports = {
  siteMetadata: {
    title: "Leon Pahole",
    siteUrl: "https://www.leonpahole.com",
    description: "Web developer, computer science student",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TNMJ6XX",
        includeInDevelopment: false, // only in production
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "./src/styles/globals";`,
      },
    },
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./blog",
      },
    },
    {
      resolve: "gatsby-plugin-ts",
      options: {
        tsLoader: {
          logLevel: "warn",
        },
        forkTsCheckerPlugin: {
          eslint: true,
        },
        fileName: "./graphql-types.ts",
        codegen: true,
        codegenDelay: 250,
        alwaysCheck: false,
        typeCheck: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-plugin-slug",
  ],
};
