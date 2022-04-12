import request from '@/utils/request'

// 获取资产属性
export function getProperty(modelId) {
    return request({
        url: `models/${modelId}/properties`,
        method: 'get'
    })
}

// 获取资产
export function getAssets(modelId, params) {
    return request({
        url: `assets/${modelId}`,
        method: 'get',
        params
    })
}

// 更新资产
export function updateAssets(modelId, assetId, updatedAsset) {
    return request({
        url: `assets/${modelId}/${assetId}`,
        method: 'put',
        data: updatedAsset
    })
}

// 删除一条资产
export function deleteAsset(modelId, assetId) {
    return request({
        url: `assets/${modelId}/${assetId}`,
        method: 'delete'
    })
}

// 批量删除资产
export function deleteAssets(modelId, data) {
    return request({
        url: `assets/${modelId}`,
        method: 'delete',
        data
    })
}

// 创建资产
export function createAssets(modelId, newAsset) {
    return request({
        url: `assets/${modelId}`,
        method: 'post',
        data: newAsset
    })
}

// 批处理资产
export function batchAssets(modelId, params, newAssets, onUploadProgress) {
    return request({
        url: `assets/${modelId}`,
        method: 'post',
        data: newAssets,
        params,
        onUploadProgress
    })
}

// 获取excel模板
// export function getExcelTemplates(modelId) {
//     return request({
//         url: `excel/templates/${modelId}`,
//         method: 'get',
//         responseType: 'blob'
//     })
// }
export function getExcelTemplates(modelId) {
    return request.get(`excel/templates/${modelId}`, { responseType: 'blob' })
}

export function getExceljob(jobId) {
    return request({
        url: `exceljob/${jobId}`,
        method: 'get'
    })
}

// 上传文件
export function uploadExcel(modelId, data) {
    return request({
        url: `excel/${modelId}`,
        method: 'post',
        data
    })
}

// 导出资产
export function downloadAssets(modelId) {
    return request({
        url: `download/${modelId}/assets`,
        method: 'get',
        responseType: 'blob' 
    })
}


