import request from '@/utils/request'

export default {
   list (params) {
    return request({
      url: 'api/bom',
      method: 'get',
        params: params
    })
  }
}
