import { VueConstructor } from "vue";

/**
 * @description 首字母大写
 * @param app
 */
export default function loadFilter(app: VueConstructor) {
  app.filter("parseTitle", (title: string) => {
    return `${title?.charAt(0)?.toUpperCase() ?? ""}${title?.slice(1) ?? ""}`;
  });
}
