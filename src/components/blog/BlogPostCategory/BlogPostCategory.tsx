import React from "react";
import { GeneralUtil } from "util/general-util";
import { RoutingUtil } from "util/routing-util";
import "src/components/blog/BlogPostCategory/blog-post-category.scss";

interface IProps {
  category: string;
}

export const BlogPostCategory: React.FC<IProps> = ({ category }) => {
  const categoryLink = RoutingUtil.getCategoryLink(category);
  const categoryColor = GeneralUtil.stringToColor(category);

  return (
    <div
      title={`See all blog posts about ${category}`}
      className="blog-post-category-badge"
      style={{ backgroundColor: categoryColor }}
    >
      <a href={categoryLink}>{category}</a>
    </div>
  );
};
