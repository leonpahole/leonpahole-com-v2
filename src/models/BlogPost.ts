import { BlogIndexQuery } from "graphql-types";

export namespace BlogModels {
  export interface BlogPost {
    slug: string;
    title: string;
    datePosted: string;
    categories: string[];
    excerpt: string;
  }

  type BlogIndexQueryItems = BlogIndexQuery["allBlogPosts"]["nodes"];
  type BlogIndexQueryItem = BlogIndexQueryItems[number];

  export class Mapper {
    static toBlogPost(post: BlogIndexQueryItem): BlogPost {
      return {
        title: post.frontmatter!.title,
        slug: post.fields!.slug!,
        categories: post.frontmatter!.categories as string[],
        datePosted: post.frontmatter!.date!,
        excerpt: post.excerpt,
      };
    }

    static toBlogPosts(posts: BlogIndexQueryItems): BlogPost[] {
      return posts.map((post: BlogIndexQueryItem) => this.toBlogPost(post));
    }
  }
}
