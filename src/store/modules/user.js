import {
  loginByUsername
} from '../../api/api'
import { setToken,getToken } from "../../utils/storage"
const state = {
  user: "",
  password: "",
  phone: "",
  captcha: "",
  currentAuthority: "",
  status: "",
  email: '',
  token: getToken(),
  introduction: '',
  roles: []

}

const getters = {
 
}
// 状态变更 payload是关键信息
const mutations = {
  SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
  SET_TOKEN: (state,token) => {
    state.token = token
  },
  SET_USER(state, payload) {
   /*  state.currentAuthority = payload.currentAuthority
    state.status = payload.status */
    state=Object.assign(state,payload.info);
    sessionStorage.setItem('accountInfo',JSON.stringify(state));
  },
   SET_ROLES: (state, roles) => {
     state.roles = roles
   }
  
}

const actions = {
  login({commit}, payload) {
    return new Promise((resolve, reject) => {
     loginByUsername(payload.user, payload.password).then(res => {
          debugger
          const info = res.data
          commit({
            type: 'SET_USER',
          info,
          })
          commit('SET_TOKEN', info.token)
          setToken(info.token)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
