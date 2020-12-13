// bubble名最长显示20个半角字符，超出则用省略号替代（19个半角字符加省略号）
import {truncate} from "@/utils/global.util";

Vue.filter('parseFunctionBubble', (functionBubbleName: string) => {
  return truncate(functionBubbleName, 20);
});
