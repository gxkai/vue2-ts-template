import { VueConstructor } from "vue";

/**
 * @description 加载第三方库
 * @param app
 */
export function loadAllPlugins(app: VueConstructor) {
  const files = require.context(".", true, /\.ts$/);
  files.keys().forEach(key => {
    if (typeof files(key).default === "function") {
      if (key !== "./index.ts") {
        files(key).default(app);
      }
    }
  });
}
