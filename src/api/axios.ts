import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

/**
 * get status code
 * @param {AxiosResponse} response Axios  response object
 */
const getErrorCode2text = (response: AxiosResponse): string => {
  /** http status code */
  const code = response.status;
  /** notice text */
  let message = "Request Error";
  switch (code) {
    case 400:
      message = "Request Error";
      break;
    case 401:
      message = "Unauthorized, please login";
      break;
    case 403:
      message = "拒绝访问";
      break;
    case 404:
      message = "访问资源不存在";
      break;
    case 408:
      message = "请求超时";
      break;
    case 500:
      message = "位置错误";
      break;
    case 501:
      message = "承载服务未实现";
      break;
    case 502:
      message = "网关错误";
      break;
    case 503:
      message = "服务暂不可用";
      break;
    case 504:
      message = "网关超时";
      break;
    case 505:
      message = "暂不支持的 HTTP 版本";
      break;
    default:
      message = "位置错误";
  }
  return message;
};

/**
 * @returns  {AxiosResponse} result
 * @tutorial see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * HttpService.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const HttpService = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 60,
  headers: {}
});

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
HttpService.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return config;
});

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
HttpService.interceptors.response.use(
  /** 请求有响应 */
  async (response: AxiosResponse) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      const __text = getErrorCode2text(response);
      return Promise.reject(new Error(__text));
    }
  },
  /** 请求无响应 */
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

export default HttpService;
