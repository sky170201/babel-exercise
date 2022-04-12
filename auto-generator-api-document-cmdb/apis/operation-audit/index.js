import request from '@/utils/request'

// 查询操作审计日志
export function getAuditsList(params) {
    return request({
        url: `audits`,
        method: 'get',
        params
    })
}
