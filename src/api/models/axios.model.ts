import { Method } from "axios";

export interface PendingType {
  url: string | undefined;
  method: Method | undefined;
  params: object;
  data: object;
  cancel: Function;
}
export interface ResponseData<T = any> {
  code: number;
  data: T;
  msg: string;
}
