import React from "react";
import "src/components/blog/BlogPostList/blog-post-list.scss";
import { BlogModels } from "models/blog-models";
import { GeneralUtil } from "util/general-util";
import { BlogPostItem } from "components/blog/BlogPostItem/BlogPostItem";
import { BlogPostListPager } from "components/blog/BlogPostListPager/BlogPostListPager";

interface IProps {
  posts: BlogModels.BlogPost[];
  forCategory?: string;
  currentPage: number;
  numPages: number;
}

export const BlogPostList: React.FC<IProps> = ({
  posts,
  forCategory,
  currentPage,
  numPages,
}) => {
  let heading = null;
  if (forCategory) {
    heading = (
      <h1 className="site-heading">
        Blog posts for category{" "}
        <span
          className="category-heading-highlight"
          style={{ background: GeneralUtil.stringToColor(forCategory) }}
        >
          {forCategory}
        </span>
      </h1>
    );
  } else {
    heading = <h1 className="site-heading">Latest blog posts</h1>;
  }

  return (
    <section>
      {heading}

      {posts.map((post) => (
        <BlogPostItem key={post.slug} post={post} />
      ))}

      <BlogPostListPager currentPage={currentPage} numPages={numPages} />
    </section>
  );
};
