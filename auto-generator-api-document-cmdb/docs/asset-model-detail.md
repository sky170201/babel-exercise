### getAllModels
> getAllModels()
- 参数：
- url: models
- method: get

### getOneModel
> getOneModel(modelId)
- 参数：modelId
- url: models/{modelId}
- method: get

### updateOneModel
> updateOneModel(modelId,data)
- 参数：modelId, data
- url: models/{modelId}
- method: put
- data: data

### getOneModelProperty
> getOneModelProperty(modelId)
- 参数：modelId
- url: models/{modelId}/properties
- method: get

### createOneModelProperty
> createOneModelProperty(modelId,newProp)
- 参数：modelId, newProp
- url: models/{modelId}/properties
- method: post
- data: newProp

### deleteOneModelProperty
> deleteOneModelProperty(modelId,propertyId)
- 参数：modelId, propertyId
- url: models/{modelId}/properties/{propertyId}
- method: delete

### updateOneModelProperty
> updateOneModelProperty(modelId,propertyId,updatedProp)
- 参数：modelId, propertyId, updatedProp
- url: models/{modelId}/properties/{propertyId}
- method: put
- data: updatedProp

### modelPropGroup
> modelPropGroup(modelId,properties)
- 参数：modelId, properties
- url: models/{modelId}/property-class
- method: put
- data: properties

### addQrCodeModel
> addQrCodeModel(modelId,data)
- 参数：modelId, data
- url: asset_qr_code/{modelId}
- method: post
- data: data

### modifyQrCodeModel
> modifyQrCodeModel(modelId,qrCodeId,data)
- 参数：modelId, qrCodeId, data
- url: asset_qr_code/{modelId}/{qrCodeId}
- method: put
- data: data

### deleteQrCodeModel
> deleteQrCodeModel(modelId,qrCodeId)
- 参数：modelId, qrCodeId
- url: asset_qr_code/{modelId}/{qrCodeId}
- method: delete

### getQrCodeModelList
> getQrCodeModelList(modelId)
- 参数：modelId
- url: asset_qr_code/{modelId}
- method: get

### getOneModelRelationship
> getOneModelRelationship(modelId)
- 参数：modelId
- url: models/{modelId}/relationships
- method: get

### createOneModelRelationship
> createOneModelRelationship(modelId,newRs)
- 参数：modelId, newRs
- url: models/{modelId}/relationships
- method: post
- data: newRs

### deleteOneModelRelationship
> deleteOneModelRelationship(modelId,relationshipId)
- 参数：modelId, relationshipId
- url: models/{modelId}/relationships/{relationshipId}
- method: delete

### updateOneModelRelationship
> updateOneModelRelationship(modelId,relationshipId,updatedRelationship)
- 参数：modelId, relationshipId, updatedRelationship
- url: models/{modelId}/relationships/{relationshipId}
- method: put
- data: updatedRelationship

### getAllModelRelationships
> getAllModelRelationships(params)
- 参数：params
- url: models/{params}/relationships
- method: get

### getOneGroupUniqueProperty
> getOneGroupUniqueProperty(modelId,uniquePropertyId)
- 参数：modelId, uniquePropertyId
- url: unique_property/{modelId}/{uniquePropertyId}
- method: get

### getUniquePropertyList
> getUniquePropertyList(modelId)
- 参数：modelId
- url: unique_property/{modelId}
- method: get

### deleteOneGroupUniqueProperty
> deleteOneGroupUniqueProperty(modelId,uniquePropertyId)
- 参数：modelId, uniquePropertyId
- url: unique_property/{modelId}/{uniquePropertyId}
- method: delete

### updateOneGroupUniqueProperty
> updateOneGroupUniqueProperty(modelId,uniquePropertyId,data)
- 参数：modelId, uniquePropertyId, data
- url: unique_property/{modelId}/{uniquePropertyId}
- method: put
- data: data

### addOneGroupUniqueProperty
> addOneGroupUniqueProperty(modelId,data)
- 参数：modelId, data
- url: unique_property/{modelId}
- method: post
- data: data

### getSyncData
> getSyncData(modelId)
- 参数：modelId
- url: /models/{modelId}/synchannels
- method: get

### addSyncData
> addSyncData(modelId,data)
- 参数：modelId, data
- url: /models/{modelId}/synchannels
- method: post
- data: data

### modifySyncData
> modifySyncData(modelId,syncId,data)
- 参数：modelId, syncId, data
- url: /models/{modelId}/synchannels/{syncId}
- method: put
- data: data

### deleteSyncData
> deleteSyncData(modelId,syncId)
- 参数：modelId, syncId
- url: /models/{modelId}/synchannels/{syncId}
- method: delete

### changeSwitch
> changeSwitch(modelId,syncId)
- 参数：modelId, syncId
- url: /models/{modelId}/synchannels/{syncId}/switch
- method: put

### checkSync
> checkSync(modelId,syncId)
- 参数：modelId, syncId
- url: /models/{modelId}/synchannels/{syncId}/verify
- method: put

### getSyncPlugin
> getSyncPlugin(modelID,pluginId)
- 参数：modelID, pluginId
- url: /models/{modelID}/synchannels/{pluginId}
- method: get

