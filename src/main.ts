import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/styles/index.less";
import { loadAllPlugins } from "@/plugins";
import {registerGlobalComponent} from "@/components";

Vue.config.productionTip = false;
loadAllPlugins(Vue);
registerGlobalComponent(Vue);
const $vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
// 用于在其他地方访问vue实例
export default $vm;
