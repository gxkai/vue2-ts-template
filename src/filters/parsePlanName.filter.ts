import { truncate } from "@/utils/global.util";
import { VueConstructor } from "vue";

/**
 * @description 方案名最长显示11个半角字符，超出则用省略号替代（10个半角字符加省略号
 * @param app
 */
export default function loadFilter(app: VueConstructor) {
  app.filter("parsePlanName", (planName: string) => {
    return truncate(planName, 11);
  });
}
