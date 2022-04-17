import { BlogPostCategories } from "components/blog/BlogPostCategories/BlogPostCategories";
import { BlogModels } from "models/BlogPost";
import React from "react";
import "src/components/blog/BlogPostListItem/blog-post-list-item.scss";

interface IProps {
  post: BlogModels.BlogPost;
}

export const BlogPostListItem: React.FC<IProps> = ({ post }) => {
  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <h2 className="blog-post-title">
          <a href={post.slug}>{post.title}</a>
        </h2>

        <BlogPostCategories categories={post.categories} />

        <span className="time-posted-on-text">Posted on {post.datePosted}</span>
      </div>

      <div className="blog-post-body">
        <p>{post.excerpt}</p>
        <a href={post.slug}>Read full blog post >> </a>
      </div>
    </div>
  );
};
