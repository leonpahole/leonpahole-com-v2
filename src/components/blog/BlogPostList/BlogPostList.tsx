import React from "react";
import "src/components/blog/BlogPostList/blog-post-list.scss";
import { BlogModels } from "models/BlogPost";
import { GeneralUtil } from "util/general-util";
import { BlogPostItem } from "components/blog/BlogPostItem/BlogPostItem";

interface IProps {
  posts: BlogModels.BlogPost[];
  forCategory?: string;
}

export const BlogPostList: React.FC<IProps> = ({ posts, forCategory }) => {
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
    </section>
  );
};
