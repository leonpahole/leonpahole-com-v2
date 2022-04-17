export class RoutingUtil {
  private static kebabCase(str: string) {
    return str.split(" ").join("-").toLowerCase();
  }

  static getCategoryLink(category: string) {
    return `/blog/categories/${this.kebabCase(category)}`;
  }

  static getBlogPostLink(slug: string) {
    return `/blog${slug}`;
  }
}
