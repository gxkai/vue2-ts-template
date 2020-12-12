import NProgress from "nprogress";
import { VueRouter } from "vue-router/types/router";

export function createNprogressGuard(router: VueRouter) {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
