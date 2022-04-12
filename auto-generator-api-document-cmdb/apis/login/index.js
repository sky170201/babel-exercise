import request from '@/utils/request'

// 登录
export function login(data) {
    return request({
        url: `token`,
        method: 'post',
        data
    })
}

// 登出
export function logout(data) {
    return request({
        url: `token`,
        method: 'delete',
        data
    })
}

// 获取token
export function getLogin(data) {
    return request({
        url: `token/api`,
        method: 'get',
        data
    })
}

// 跳转登录
export function jumpLogin(data) {
    return request({
        url: `token/api`,
        method: 'post',
        data
    })
}

// 刷新token
export function refreshToken(data) {
    return request({
        url: `token`,
        method: 'put',
        data
    })
}

// 生成API密钥
export function generateAPIkey(data) {
    return request({
        url: `token/secret`,
        method: 'post',
        data
    })
}

// 更新API密钥
export function updateAPIkey(data) {
    return request({
        url: `token/secret`,
        method: 'put',
        data
    })
}

// 获取API密钥
export function getAPIkey() {
    return request({
        url: `token/secret`,
        method: 'get',
    })
}
