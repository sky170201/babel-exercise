import request from '@/utils/request'

// 获取api密钥列表
export function getAPISecretKeys(payLoad) {
    return request({
        url: `secret-key`,
        method: 'get',
        params:payLoad
    })
}

// 创建api密钥
export function createAPISecretKey(payLoad) {
    return request({
        url: `secret-key`,
        method: 'post',
        data:payLoad
    })
}

// 下载api密钥
export function downLoadAPISecretKey(name, id) {
    return request({
        url: `/secret-key/${name}/download/${id}`,
        method: 'get',
        responseType: 'blob'
    })
}

// 删除api密钥
export function deleteAPISecretKey(id) {
    return request({
        url: `/secret-key/${id}`,
        method: 'delete',
    })
}

// 切换api密钥状态
export function changeAPISecretStatu(id) {
    return request({
        url: `/secret-key/switch/${id}`,
        method: 'put',
    })
}

// 修改api密钥
export function changeAPISecretInfo(id,playLoad) {
    return request({
        url: `/secret-key/${id}`,
        method: 'put',
        data:playLoad,
    })
}
