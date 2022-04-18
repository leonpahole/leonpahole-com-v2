import { BlogPostCategories } from "components/blog/BlogPostCategories/BlogPostCategories";
import { BlogPostItemCover } from "components/blog/BlogPostItemCover/BlogPostItemCover";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BlogModels } from "models/blog-models";
import { AppMDXProvider } from "providers/AppMDXProvider";
import React from "react";
import "src/components/blog/BlogPostItem/blog-post-item.scss";
import { RoutingUtil } from "util/routing-util";

interface IProps {
  post: BlogModels.BlogPost;
}

export const BlogPostItem: React.FC<IProps> = ({ post }) => {
  const isSinglePageMode = post.content != null;
  const postLink = RoutingUtil.getBlogPostLink(post.slug);

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        {isSinglePageMode && <BlogPostItemCover post={post} />}
        {!isSinglePageMode && (
          <>
            <h2 className="blog-post-title">
              <a href={postLink}>{post.title}</a>
            </h2>
            <span className="time-posted-on-text">
              Posted on: {post.datePosted}
            </span>
            <span className="time-posted-on-text">
              Reading time: {post.readingTimeMinutes} min
            </span>
            <BlogPostCategories categories={post.categories} />
          </>
        )}
      </div>

      <div className="blog-post-body">
        <p>
          {isSinglePageMode && <b>Post contents: </b>}
          {post.excerpt}
        </p>
        {!isSinglePageMode && (
          <a href={postLink}>
            Read full blog post {">"}
            {">"}
          </a>
        )}
        {isSinglePageMode && (
          <>
            <hr />
            <AppMDXProvider>
              <MDXRenderer>{post.content!}</MDXRenderer>
            </AppMDXProvider>
            {post.coverImage?.creditText && (
              <p>
                Cover image source:{" "}
                <a
                  href={post.coverImage.creditLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.coverImage.creditText}
                </a>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
