import request from '@/utils/request'

// 查询所有模型
export function getAllModels() {
    return request({
        url: `models`,
        method: 'get'
    })
}

// 获取某个模型的某个资产详情
// export function getOneModelAsset(modelId, assetId) {
//     return request({
//         url: `models/${modelId}/${assetId}`,
//         method: 'get'
//     })
// }

// 获取资产
export function getOneAssets(modelId, assetId) {
    return request({
        url: `assets/${modelId}/${assetId}`,
        method: 'get'
    })
}

// 获取快照
export function getSnapshots(modelId, assetId) {
    return request({
        url: `assets/${modelId}/${assetId}/snapshots`,
        method: 'get'
    })
}

// 获取某个模型的关系
export function getOneModelAssetRelationship(modelId, assetId) {
    return request({
        url: `assets/${modelId}/${assetId}/relationships`,
        method: 'get'
    })
}

// 新增某个模型的某个资产的一个关系
export function createOneModelAssetRelationship(modelId, assetId, data) {
    return request({
        url: `assets/${modelId}/${assetId}/relationships`,
        method: 'post',
        data
    })
}

// 删除一个资产关系
export function deleteOneModelAssetRelationship(relationshipId) {
    return request({
        url: `asset-relationships/${relationshipId}`,
        method: 'delete'
    })
}

// 更新某个模型关系
export function updateOneModelAssetRelationship(modelId, relationshipId, updatedRelationship) {
    return request({
        url: `models/${modelId}/relationships/${relationshipId}`,
        method: 'put',
        data: updatedRelationship
    })
}

// 资产操作审计日志
export function getAuditsList(params, modelId, assetId) {
    return request({
        url: `audits/${modelId}/${assetId}/asset`,
        method: 'get',
        params
    })
}
