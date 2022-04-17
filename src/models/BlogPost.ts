// eslint-disable-next-line no-restricted-imports
import { BlogIndexQuery, BlogPostDetailsQuery } from "../../graphql-types";

export namespace BlogModels {
  export interface BlogPost {
    slug: string;
    title: string;
    datePosted: string;
    categories: string[];
    excerpt: string;
    readingTimeMinutes: number;
    content: string | null | undefined;
  }

  type BlogIndexQueryItems = BlogIndexQuery["allBlogPosts"]["nodes"];
  type BlogIndexQueryItem = BlogIndexQueryItems[number];

  type BlogPostDetailsQueryItem = BlogPostDetailsQuery["blogPostDetails"];

  export class Mapper {
    static toBlogPost(
      post: BlogIndexQueryItem | BlogPostDetailsQueryItem
    ): BlogPost {
      return {
        title: post!.frontmatter!.title,
        slug: post!.fields!.slug!,
        categories: post!.frontmatter!.categories as string[],
        datePosted: post!.frontmatter!.date!,
        excerpt: post!.excerpt,
        readingTimeMinutes: post!.timeToRead!,
        content: (post as BlogPostDetailsQueryItem)?.body,
      };
    }

    static toBlogPosts(posts: BlogIndexQueryItems): BlogPost[] {
      return posts.map((post: BlogIndexQueryItem) => this.toBlogPost(post));
    }
  }
}
