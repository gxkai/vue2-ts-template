import { truncate } from "@/utils/global.util";
import { VueConstructor } from "vue";

/**
 * @description bubble名最长显示20个半角字符，超出则用省略号替代（19个半角字符加省略号）
 * @param app
 */
export default function loadFilter(app: VueConstructor) {
  app.filter("parseFunctionBubble", (functionBubbleName: string) => {
    return truncate(functionBubbleName, 20);
  });
}
