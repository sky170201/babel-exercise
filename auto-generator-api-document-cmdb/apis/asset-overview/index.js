import request from '@/utils/request'

// 查询资产总数
export function getAssetsTotal() {
    return request({
        url: `overview/assets-total?type=summary`,
        method: 'get'
    })
}

// 查询资产分布
export function getAssetsdistribute() {
    return request({
        url: `overview/assets-total?type=detail`,
        method: 'get'
    })
}

// 查询资产趋势
export function getAssetTrends(params) {
    return request({
        url: `overview/assets-trends`,
        method: 'get',
        params
    })
}

// 查询最近10条登录日志
export function getTenRecentAccess() {
    return request({
        url: `overview/recent-access`,
        method: 'get'
    })
}

// 查询最近10条操作日志
export function getTenRecentOperations() {
    return request({
        url: `overview/recent-operations`,
        method: 'get'
    })
}

// 模糊查询模型
export function getBlurModels(key) {
    return request({
        url: `/overview/assets-search?fuzzy_search_keywords=${key}`,
        method: 'get'
    })
}

