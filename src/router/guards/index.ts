import { VueRouter } from "vue-router/types/router";
import { createVuexGuard } from "@/router/guards/vuex.guard";
import { createNprogressGuard } from "@/router/guards/nprogress.guard";

export function createGuard(router: VueRouter) {
  createVuexGuard(router);
  createNprogressGuard(router);
}
