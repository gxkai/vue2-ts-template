import { VueConstructor } from "vue";

/**
 * @description itemNo格式化
 * @param app
 */
export default function loadFilter(app: VueConstructor) {
  app.filter("parseCode", (code: string) => code?.replace(/(\d{3})/g, "$1."));
}
