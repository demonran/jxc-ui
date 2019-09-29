import Config from '@/config'

export function setToken (token) {
    localStorage.setItem(Config.TokenKey, token)
}

export function getToken () {
    return localStorage.getItem(Config.TokenKey)
}
