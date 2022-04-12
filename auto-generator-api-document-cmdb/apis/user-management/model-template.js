import request from '@/utils/request'

// 获取模型模板列表 params = {keyword: 'c'}
export function getModelTemplates(params) {
    return request({
        url: `model-templates`,
        method: 'get',
        params
    })
}

// 新增模型模板
export function addModelTemplate(data) {
    return request({
        url: `model-templates`,
        method: 'post',
        data
    })
}

// 删除模板
export function deleteModelTemplate(modelId) {
    return request({
        url: `model-templates/${modelId}`,
        method: 'delete'
    })
}

// 编辑模板
export function editModelApi(modelId, data) {
    return request({
        url: `model-templates/${modelId}`,
        method: 'put',
        data
    })
}

// 编辑模板属性
export function editModelPropApi(modelId, propertyId, data) {
    return request({
        url: `model-templates/${modelId}/properties/${propertyId}`,
        method: 'put',
        data
    })
}

// 新增模板属性
export function addModelPropApi(modelId, propertyId, data) {
    return request({
        url: `model-templates/${modelId}/properties/${propertyId}`,
        method: 'post',
        data
    })
}

// 删除模板属性
export function deleteModelPropApi(modelId, propertyId) {
    return request({
        url: `model-templates/${modelId}/properties/${propertyId}`,
        method: 'delete'
    })
}

// 上传静态资源
export function uploadStaticFile(fileType, data) {
    return request({
        url: `/static-file?file_type=${fileType}`,
        method: 'post',
        data
    })
}