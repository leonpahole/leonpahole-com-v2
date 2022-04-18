import React from "react";
import "src/components/blog/BlogPostListPager/blog-post-list-pager.scss";
import { RoutingUtil } from "util/routing-util";

interface IProps {
  numPages: number;
  currentPage: number;
}

export const BlogPostListPager: React.FC<IProps> = ({
  numPages,
  currentPage,
}) => {
  const hasNewerPosts = currentPage > 1;
  const hasOlderPosts = currentPage < numPages;

  return (
    <div className="pager">
      <div className="previous">
        {hasNewerPosts && (
          <a href={RoutingUtil.getBlogListLink(currentPage - 1)}>
            &larr; Newer Posts
          </a>
        )}
      </div>
      <div>
        Page {currentPage} of {numPages}
      </div>
      <div className="next">
        {hasOlderPosts && (
          <a href={RoutingUtil.getBlogListLink(currentPage + 1)}>
            Older Posts &rarr;
          </a>
        )}
      </div>
    </div>
  );
};
