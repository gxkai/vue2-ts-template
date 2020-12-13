import { VueConstructor } from "vue";

export function loadAllFilters(app: VueConstructor) {
  const files = require.context(".", true, /\.ts$/);
  files.keys().forEach(key => {
    if (typeof files(key).default === "function") {
      if (key !== "./index.ts") {
        files(key).default(app);
      }
    }
  });
}
