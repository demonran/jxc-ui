import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间

})

// response拦截器
service.interceptors.response.use(res => {
  return res.data
}, error => Promise.reject(error))

export default service
