import request from '@/utils/request'

// 查询所有模型
export function getAllModels() {
    return request({
        url: `models`,
        method: 'get'
    })
}

// 获取某个模型详情
export function getOneModel(modelId) {
    return request({
        url: `models/${modelId}`,
        method: 'get'
    })
}

// 修改某个模型详情
export function updateOneModel(modelId, data) {
    return request({
        url: `models/${modelId}`,
        method: 'put',
        data
    })
}

// 获取某个模型属性
export function getOneModelProperty(modelId) {
    return request({
        url: `models/${modelId}/properties`,
        method: 'get'
    })
}

// 创建某个模型属性
export function createOneModelProperty(modelId, newProp) {
    return request({
        url: `models/${modelId}/properties`,
        method: 'post',
        data: newProp
    })
}

// 删除某个模型属性
export function deleteOneModelProperty(modelId, propertyId) {
    return request({
        url: `models/${modelId}/properties/${propertyId}`,
        method: 'delete'
    })
}

// 更新某个模型属性
export function updateOneModelProperty(modelId, propertyId, updatedProp) {
    return request({
        url: `models/${modelId}/properties/${propertyId}`,
        method: 'put',
        data: updatedProp
    })
}

// 模型属性分组
export function modelPropGroup(modelId, properties) {
    return request({
        url: `models/${modelId}/property-class`,
        method: 'put',
        data: properties
    })
}

// 新增二维码模板
// {
//     "template_name": "临时模板1",
//     "model_id": "ces",
//     "properties": ["ccc","ddd","property_id"]
// }
export function addQrCodeModel(modelId, data) {
    return request({
        url: `asset_qr_code/${modelId}`,
        method: 'post',
        data
    })
}

// 修改二维码模板
// {
//     "template_name": "临时模板1",
//     "properties": ["property_id","property_id"]
// }
export function modifyQrCodeModel(modelId, qrCodeId, data) {
    return request({
        url: `asset_qr_code/${modelId}/${qrCodeId}`,
        method: 'put',
        data
    })
}

// 删除二维码模板
export function deleteQrCodeModel(modelId, qrCodeId) {
    return request({
        url: `asset_qr_code/${modelId}/${qrCodeId}`,
        method: 'delete'
    })
}

// 批量获取二维码模板
export function getQrCodeModelList(modelId) {
    return request({
        url: `asset_qr_code/${modelId}`,
        method: 'get'
    })
}

// 获取某个模型关系
export function getOneModelRelationship(modelId) {
    return request({
        url: `models/${modelId}/relationships`,
        method: 'get'
    })
}

// 创建某个模型关系
export function createOneModelRelationship(modelId, newRs) {
    return request({
        url: `models/${modelId}/relationships`,
        method: 'post',
        data: newRs
    })
}

// 删除某个模型关系
export function deleteOneModelRelationship(modelId, relationshipId) {
    return request({
        url: `models/${modelId}/relationships/${relationshipId}`,
        method: 'delete'
    })
}

// 更新某个模型关系
export function updateOneModelRelationship(modelId, relationshipId, updatedRelationship) {
    return request({
        url: `models/${modelId}/relationships/${relationshipId}`,
        method: 'put',
        data: updatedRelationship
    })
}

// 查询某个模型的所有关系
export function getAllModelRelationships(params) {
    return request({
        url: `models/${params}/relationships`,
        method: 'get'
    })
}

// 获取某个模型的一组唯一校验
export function getOneGroupUniqueProperty (modelId, uniquePropertyId) {
    return request({
        url: `unique_property/${modelId}/${uniquePropertyId}`,
        method: 'get'
    })
}

// 获取某个模型所有唯一效验
export function getUniquePropertyList (modelId) {
    return request({
        url: `unique_property/${modelId}`,
        method: 'get'
    })
}

// 删除某个模型的一组唯一校验
export function deleteOneGroupUniqueProperty (modelId, uniquePropertyId) {
    return request({
        url: `unique_property/${modelId}/${uniquePropertyId}`,
        method: 'delete'
    })
}

// 修改某个模型的一组唯一校验
export function updateOneGroupUniqueProperty (modelId, uniquePropertyId, data) {
    return request({
        url: `unique_property/${modelId}/${uniquePropertyId}`,
        method: 'put',
        data
        /*
            modelID:model_id 不可修改
            properties:列表嵌套字典
                propertyID: 属性id
                checkNull: 是否校验空值
            editor: editor 修改人ID
        */
    })
}

// 修改某个模型的一组唯一校验
export function addOneGroupUniqueProperty (modelId, data) {
    return request({
        url: `unique_property/${modelId}`,
        method: 'post',
        data
        /*
            modelID:model_id 模型id
            properties:列表嵌套字典
                propertyID: 属性id
                checkNull: 是否校验空值
            creator: creator 创建的用户id
            editor: editor 创建的用户id（修改时，改为修改的用户id
        */
    })
}


// 获取模型同步数据
export function getSyncData(modelId) {
    return request({
        url: `/models/${modelId}/synchannels`,
        method: 'get'
    })
}

// 添加同步数据
export function addSyncData(modelId,data) {
    return request({
        url: `/models/${modelId}/synchannels`,
        method: 'post',
        data
    })
}

// 修改同步数据
export function modifySyncData(modelId,syncId,data) {
    return request({
        url: `/models/${modelId}/synchannels/${syncId}`,
        method: 'put',
        data
    })
}

// 删除同步数据
export function deleteSyncData(modelId,syncId) {
    return request({
        url: `/models/${modelId}/synchannels/${syncId}`,
        method: 'delete',
    })
}

// 切换同步开关
export function changeSwitch(modelId,syncId) {
    return request({
        url: `/models/${modelId}/synchannels/${syncId}/switch`,
        method: 'put',
    })
}

// 校验同步
export function checkSync(modelId,syncId) {
    return request({
        url: `/models/${modelId}/synchannels/${syncId}/verify`,
        method: 'put',
    })
}

// 获取某一个同步工具信息
export function getSyncPlugin(modelID,pluginId) {
    return request({
        url: `/models/${modelID}/synchannels/${pluginId}`,
        method: 'get'
    })
}