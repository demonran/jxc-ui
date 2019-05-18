import request from '@/utils/request'

export default {
  list () {
    return request({
      url: 'api/bom',
      method: 'get'
    })
  }
}
