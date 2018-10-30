import router from './router/router'
import store from './store/index'
import {getToken } from './utils/storage'

function hasPermission(roles, permissionRoles) {
    debugger
    if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
  }
router.beforeEach((to, from, next) => {
    debugger
    if (getToken()) { // determine if there has token
        /* has token*/
        if (to.path === '/login') {
            next()
        } else {
            console.log(store.state.user.roles.length)
            debugger
            if (store.state.user.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
                store.replaceState(Object.assign({}, store.state,JSON.parse(sessionStorage.getItem("accountInfo"))))
                next()
                //获取用户详情
            } else {
                console.log('已经存在用户角色的情况')
                if (hasPermission(store.state.user.roles, to.meta.roles)) {
                    next()
                  } 
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
        }
    }
})

router.afterEach(() => {

})