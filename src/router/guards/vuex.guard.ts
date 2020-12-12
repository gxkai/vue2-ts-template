import { VueRouter } from "vue-router/types/router";
import store from "@/store";
import HomeVuex, { HomeVuexModule } from "@/views/home/home.vuex";
import { mergeWith } from "lodash";

export function createVuexGuard(router: VueRouter) {
  const mergePersistedData = async () => {
    store.registerModule("home", HomeVuexModule, { preserveState: true });
    await store.replaceState(
      mergeWith(
        {
          home: HomeVuex.state
        },
        store.state
      )
    );
  };

  router.beforeEach(async (to, from, next) => {
    await mergePersistedData();
    next();
  });
}
