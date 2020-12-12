import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const VuexSession = new VuexPersistence({
  key: "vuex",
  storage: window.sessionStorage,
  modules: ["login", "home", "search", "topViewV2"]
});

const FloorSession = new VuexPersistence({
  key: "floor",
  storage: window.sessionStorage,
  modules: ["floor"]
});
const Store = new Vuex.Store({
  plugins: [VuexSession.plugin, FloorSession.plugin]
});
export default Store;
