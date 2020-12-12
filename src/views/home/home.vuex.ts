import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import store from "@/store";

export interface IHome {}
@Module({
  name: "home",
  dynamic: true,
  namespaced: true,
  preserveState: sessionStorage.getItem("vuex") !== null,
  store
})
export default class HomeVuex extends VuexModule<ThisType<IHome>> {}

export const HomeVuexModule = getModule(HomeVuex);
