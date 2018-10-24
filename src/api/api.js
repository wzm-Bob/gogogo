import request from '../utils/http'

export function loginByUsername(username, password) {
    const data = {
     
    }
    return request({
        url: '/api/user',
        method: 'get',
        data
    })
}

