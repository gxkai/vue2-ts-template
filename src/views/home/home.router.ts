import { RouteConfig } from "vue-router";

const HomeRouter: RouteConfig[] = [
  {
    path: "/",
    component: () => import("./home.vue")
  }
];
export default HomeRouter;
