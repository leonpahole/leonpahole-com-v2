import { BlogPostCategories } from "components/blog/BlogPostCategories/BlogPostCategories";
import { GatsbyImage } from "gatsby-plugin-image";
import { BlogModels } from "models/blog-models";
import React from "react";
import "src/components/blog/BlogPostItemCover/blog-post-item-cover.scss";
import { RoutingUtil } from "util/routing-util";

interface IProps {
  post: BlogModels.BlogPost;
}

export const BlogPostItemCover: React.FC<IProps> = ({ post }) => {
  if (!post.coverImage) {
    return null;
  }

  const postLink = RoutingUtil.getBlogPostLink(post.slug);

  return (
    <div className="cover-image-wrapper">
      <div className="info-wrapper">
        <div className="info-wrapper-background" />
        <h2 className="blog-post-title">
          <a href={postLink}>{post.title}</a>
        </h2>
        <span className="time-posted-on-text">
          Posted on: {post.datePosted}
        </span>
        <span className="time-posted-on-text">
          Reading time: {post.readingTimeMinutes} min
        </span>
        <BlogPostCategories
          categories={post.categories}
          caption="Categories:"
        />
      </div>
      <GatsbyImage
        image={post.coverImage.src}
        alt={post.coverImage.alt}
        className="cover-image"
      />
    </div>
  );
};
