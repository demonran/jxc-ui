import request from '@/utils/request'

export default {
    list (params) {
        return request({
            url: 'api/bom',
            method: 'get',
            params: params
        })
    },
    add (data) {
        return request({
            url: '/api/bom',
            method: 'post',
            data: data
        })
    },
    delete(id) {
        return request({
            url: `/api/bom/${id}`,
            method: 'delete'
        })
    }

}
