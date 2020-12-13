import axios, {
  AxiosRequestConfig,
  Method,
  AxiosError,
  AxiosResponse,
  AxiosPromise
} from "axios";
import { PendingType, ResponseData } from "@/api/models/axios.model";

// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;
// axios 实例
const HttpService = axios.create({
  timeout: 60 * 1000,
  responseType: "json"
});

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key;
    const list: PendingType = pending[key];
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel("Operation is too frequent, please try again later.");
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

// 添加请求拦截器
HttpService.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    removePending(request);
    request.cancelToken = new CancelToken(c => {
      pending.push({
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c
      });
    });
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
HttpService.interceptors.response.use(
  (response: AxiosResponse) => {
    removePending(response.config);
    const responseData = response.data as ResponseData;
    if (responseData.code === 200) {
      return responseData.data;
    }
    return Promise.reject(responseData.msg);
  },
  (error: AxiosError) => {
    let __error_msg: string = error.message || "";

    if (error.message) {
      __error_msg = error.message;
    }

    if (error.response) {
      __error_msg = error.response.data.message
        ? error.response.data.message
        : error.response.data.data;
    }
    // timeout
    if (__error_msg.indexOf("timeout") >= 0) {
      __error_msg = "timeout";
    }
    return Promise.reject(new Error(__error_msg));
  }
);

export { HttpService };
