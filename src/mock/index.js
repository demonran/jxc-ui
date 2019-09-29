import login from '@/mock/login'
import Mock from 'mockjs'

const mocks = [
    ...login
]

for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.method || 'get', i.response)
}
