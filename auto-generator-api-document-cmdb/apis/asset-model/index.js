import request from '@/utils/request'

// 查询所有模型
export function getAllModels() {
    return request({
        url: `models`,
        method: 'get'
    })
}

// 创建一个完整的模型
export function createFullModel(data) {
    return request({
        url: 'create_model',
        method: 'post',
        data
    })
}

// 新增一个模型
export function createModels(newModel) {
    return request({
        url: `models`,
        method: 'post',
        data: newModel
    })
}

// 更新模型
export function updateModels(modelId, updatedModel) {
    return request({
        url: `models/${modelId}`,
        method: 'put',
        data: updatedModel
    })
}

// 查询备选模型图片资源
export function getModelIcons() {
    return request({
        url: `static-file`,
        method: 'get',
        params: {
            file_type: 'model_icon'
        }
    })
}

// 创建新的分类
export function createClassification(newCls) {
    return request({
        url: `classifications`,
        method: 'post',
        data: newCls
    })
}

// 用户收藏（收藏/取消收藏）
export function colletionModel(modelId, data) {
    return request({
        url: `users/${modelId}/stars`,
        method: 'put',
        data
    })
}

// 获取用户收藏model
export function getColletionModels(modelId) {
    return request({
        url: `users/${modelId}/stars`,
        method: 'get'
    })
}