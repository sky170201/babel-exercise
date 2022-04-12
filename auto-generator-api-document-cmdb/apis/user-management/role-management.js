import request from '@/utils/request'

// 获取用户列表
export function getRolesList(params) {
    return request({
        url: `roles`,
        method: 'get',
        params
    })
}

// 添加角色
export function addRole(data) {
    return request({
        url: `roles`,
        method: 'post',
        data
    })
}

// 删除角色
export function deleteRole(role_id) {
    return request({
        url: `roles/${role_id}`,
        method: 'delete'
    })
}

// 查询角色信息
export function getOneRoleInfo(role_id) {
    return request({
        url: `roles/${role_id}`,
        method: 'get'
    })
}

// 修改角色
export function updateRole(role_id, data) {
    return request({
        url: `roles/${role_id}`,
        method: 'put',
        data
    })
}

// 修改角色
export function updateRolePermissions(role_id, data) {
    return request({
        url: `roles/${role_id}/permissions`,
        method: 'put',
        data
    })
}