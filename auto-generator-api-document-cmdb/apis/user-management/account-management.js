import request from '@/utils/request'

// 获取用户列表
export function getUsers(params) {
    return request({
        url: `users`,
        method: 'get',
        params
    })
}

// 获取单个用户信息
export function getOneUser(role_id) {
    return request({
        url: `users/${role_id}`,
        method: 'get'
    })
}

// 新增用户
export function addUser(data) {
    return request({
        url: `users`,
        method: 'post',
        data
    })
}

// 重置用户密码
export function resetUserPassword(data) {
    return request({
        url: `users`,
        method: 'put',
        data
    })
}

// 禁用
export function forbidden(role_id) {
    return request({
        url: `users/${role_id}`,
        method: 'delete'
    })
}

// 修改用户角色
export function updateUserRole(role_id, data) {
    return request({
        url: `users/${role_id}/roles`,
        method: 'put',
        data
    })
}

// 个人登录日志（会话列表）
export function loginLog(role_id, params) {
    return request({
        url: `audits/${role_id}/tokens`,
        method: 'get',
        params
    })
}