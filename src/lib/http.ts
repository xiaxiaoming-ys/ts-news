import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// 85ab8fe3d5736cbcd4927006b6939a48
// axios.defaults.baseURL = 'http://v.juhe.cn/'

// 添加请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (err) => {
    console.log(err)
  }
)

// 响应拦截器 拦截状态码 
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log(res)
    // 可根据状态码跳转
    if (res.data.err === 1) {
      return Promise.reject(res.data.data)
    }

    return res.data
  },
  (err) => Promise.reject(err)
)

export default axios