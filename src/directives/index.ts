import { VueConstructor } from "vue";

/**
 * @description 加载自动触发的钩子
 * @param app
 */
export function loadAllDirectives(app: VueConstructor) {
  const files = require.context("./automatic", true, /\.ts$/);
  files.keys().forEach(key => {
    if (typeof files(key).default === "function") {
      if (key !== "./index.ts") {
        files(key).default(app);
      }
    }
  });
}
