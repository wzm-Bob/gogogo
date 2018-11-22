import request from '../utils/http'

export function loginByUsername(user, password) {
    const data = {
        user,
        password
    }
    return request({
        url: '/login/login',
        method: 'post',
        data
    })
}
export function logout() {
    return request({
        url: '/login/logout',
        method: 'post'
    })
}
export function getCurrMenu(id) {
    return request({
        url: '/api/currmenu',
        method: 'get',
        params:{id}
    })
}
export function getTreeData() {
    return request({
        url: '/api/tree',
        method: 'get'
    })
}
export function getTable(id) {
    return request({
        url: '/api/table',
        method: 'get',
        params: {
            id
        }
    })
}
export function getUserInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: {
            token
        }
    })
}