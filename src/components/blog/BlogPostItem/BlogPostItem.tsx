import { BlogPostCategories } from "components/blog/BlogPostCategories/BlogPostCategories";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BlogModels } from "models/BlogPost";
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
        <h2 className="blog-post-title">
          <a href={postLink}>{post.title}</a>
        </h2>

        <BlogPostCategories categories={post.categories} />

        <span className="time-posted-on-text">Posted on {post.datePosted}</span>
        <span className="time-posted-on-text">
          Reading time: {post.readingTimeMinutes} min
        </span>
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
            <MDXRenderer>{post.content!}</MDXRenderer>
          </>
        )}
      </div>
    </div>
  );
};
