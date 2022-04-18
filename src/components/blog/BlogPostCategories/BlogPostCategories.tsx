import { BlogPostCategory } from "components/blog/BlogPostCategory/BlogPostCategory";
import React from "react";
import "src/components/blog/BlogPostCategories/blog-post-categories.scss";

interface IProps {
  categories: string[];
  caption?: string;
}

export const BlogPostCategories: React.FC<IProps> = ({
  categories,
  caption,
}) => {
  let captionElement = null;
  if (caption) {
    captionElement = <span>{caption}</span>;
  }

  return (
    <div className="blog-post-categories-wrapper">
      {captionElement}
      {categories.map((category) => (
        <BlogPostCategory key={category} category={category} />
      ))}
    </div>
  );
};
