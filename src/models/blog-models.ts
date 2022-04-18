import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

// eslint-disable-next-line no-restricted-imports
import { BlogListQuery, BlogPostDetailsQuery } from "../../graphql-types";

export namespace BlogModels {
  export interface BlogPost {
    slug: string;
    title: string;
    datePosted: string;
    categories: string[];
    excerpt: string;
    readingTimeMinutes: number;
    content: string | null | undefined;
    coverImage: BlogPostCoverImage | null;
  }

  interface BlogPostCoverImage {
    src: IGatsbyImageData;
    alt: string;
    creditText?: string | null;
    creditLink?: string | null;
  }

  type BlogIndexQueryItems = BlogListQuery["allBlogPosts"]["nodes"];
  type BlogIndexQueryItem = BlogIndexQueryItems[number];

  type BlogPostDetailsQueryItem = BlogPostDetailsQuery["blogPostDetails"];

  export class Mapper {
    static toBlogPost(
      post: BlogIndexQueryItem | BlogPostDetailsQueryItem
    ): BlogPost {
      let coverImage: BlogPostCoverImage | undefined | null = null;
      if ((post!.frontmatter! as any).cover_image) {
        const postDetailed = post as BlogPostDetailsQueryItem;
        coverImage = {
          src: getImage(postDetailed!.frontmatter!.cover_image!.src! as any)!,
          alt: postDetailed!.frontmatter!.cover_image!.alt!,
          creditText: postDetailed!.frontmatter!.cover_image!.credit_text,
          creditLink: postDetailed!.frontmatter!.cover_image!.credit_link,
        };
      }

      return {
        title: post!.frontmatter!.title,
        slug: post!.fields!.slug!,
        categories: post!.frontmatter!.categories as string[],
        datePosted: post!.frontmatter!.date!,
        excerpt: post!.excerpt,
        readingTimeMinutes: post!.timeToRead!,
        content: (post as BlogPostDetailsQueryItem)?.body,
        coverImage,
      };
    }

    static toBlogPosts(posts: BlogIndexQueryItems): BlogPost[] {
      return posts.map((post: BlogIndexQueryItem) => this.toBlogPost(post));
    }
  }
}
