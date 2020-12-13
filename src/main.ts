import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import "@/styles/index.less";
import { loadAllPlugins } from "@/plugins";
import { registerGlobalComponent } from "@/components";
import { loadAllDirectives } from "@/directives";
import { loadAllFilters } from "@/filters";
import VueI18n, { LocaleMessages } from "vue-i18n";
import { storage } from "@/storage";
import { loadLocaleMessages } from "@/utils/locale.util";

Vue.config.productionTip = false;
loadAllPlugins(Vue);
loadAllDirectives(Vue);
loadAllFilters(Vue);
registerGlobalComponent(Vue);

/**
 * @description 语言包设置需要在插件使用之后
 */
const i18n = new VueI18n({
  locale: storage("local").get("languageGroup"),
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
  silentFallbackWarn: true
});
const $vm = new Vue({
  router,
  store,
  i18n,
  created() {
    /**
     * @description 默认英文
     */
    if (!storage("local").get("languageGroup")) {
      storage("local").set("languageGroup", "en");
    }
    console.warn();
  },
  render: h => h(App)
}).$mount("#app");
// 用于在其他地方访问vue实例
export default $vm;
