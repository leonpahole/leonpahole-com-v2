import { BlogPostCategory } from "components/blog/BlogPostCategory/BlogPostCategory";
import React from "react";
import "src/components/blog/BlogPostCategories/blog-post-categories.scss";

interface IProps {
  categories: string[];
}

export const BlogPostCategories: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="blog-post-categories-wrapper">
      {categories.map((category) => (
        <BlogPostCategory key={category} category={category} />
      ))}
    </div>
  );
};
