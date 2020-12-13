/**
 * 统一封装对外的接口
 */

interface UseStoreType {
  set: Function;
  get: Function;
  remove: Function;
  setExpire?: Function;
  getExpire?: Function;
}

const storage = (
  store: "session" | "cookie" | "local" = "session"
): UseStoreType => {
  let UseStore;
  switch (store) {
    case "session":
      UseStore = require("./sessionstorage").SessionStorageAPI;
      break;
    case "cookie":
      UseStore = require("./cookie").CookieAPI;
      break;
    case "local":
      UseStore = require("./localstorage").LocalStorageAPI;
      break;
    default:
      UseStore = require("./sessionstorage").SessionStorageAPI;
      break;
  }
  return new UseStore();
};

export { storage };
