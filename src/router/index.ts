import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { createGuard } from "@/router/guards";

Vue.use(VueRouter);

/** 自动加载其他路由模块 */
const files = require.context("../views", true, /(\.router\.ts)$/);
let modules: Array<RouteConfig> = [];
files.keys().forEach(key => {
  modules = modules.concat(files(key).default);
});

const routes: Array<RouteConfig> = [...modules];

const router = new VueRouter({
  routes
});
createGuard(router);
export default router;
