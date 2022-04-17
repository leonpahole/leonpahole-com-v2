import { GeneralUtil } from "util/general-util";

export class RoutingUtil {
  static getCategoryLink(category: string) {
    return `/blog/categories/${GeneralUtil.kebabCase(category)}`;
  }
}
