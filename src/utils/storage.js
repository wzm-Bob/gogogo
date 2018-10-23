
const TokenKey:string = 'account'

export function getToken() {
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token:string) {
    return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey)
}

