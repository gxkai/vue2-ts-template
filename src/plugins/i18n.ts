import { VueConstructor } from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

/**
 * @description 加载国际化
 * @param app
 */
export default function loadI18n(app: VueConstructor) {
  app.use(VueI18n);
}
