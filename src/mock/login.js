import Mock from 'mockjs'

export default [
    {
        url: 'login',
        method: 'post',
        response: () => {
            return {
                code: 20000,
                data: 'success'
            }
        }

    }
]
