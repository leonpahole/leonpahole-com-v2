export class RoutingUtil {
  private static kebabCase(str: string) {
    return str.split(" ").join("-").toLowerCase();
  }

  static getCategoryLink(category: string, pageNumber: number) {
    return `/blog/categories/${this.kebabCase(
      category
    )}${this.getPageNumberQueryLink(pageNumber)}`;
  }

  static getBlogPostLink(slug: string) {
    return `/blog${slug}`;
  }

  static getBlogListLink(pageNumber: number) {
    return `/blog${this.getPageNumberQueryLink(pageNumber)}`;
  }

  private static getPageNumberQueryLink(pageNumber: number) {
    if (pageNumber === 1) {
      return "";
    }

    return `/${pageNumber}`;
  }
}
