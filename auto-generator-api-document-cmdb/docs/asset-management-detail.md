### getAllModels
> getAllModels()
- 参数：
- url: models
- method: get

### getOneAssets
> getOneAssets(modelId,assetId)
- 参数：modelId, assetId
- url: assets/{modelId}/{assetId}
- method: get

### getSnapshots
> getSnapshots(modelId,assetId)
- 参数：modelId, assetId
- url: assets/{modelId}/{assetId}/snapshots
- method: get

### getOneModelAssetRelationship
> getOneModelAssetRelationship(modelId,assetId)
- 参数：modelId, assetId
- url: assets/{modelId}/{assetId}/relationships
- method: get

### createOneModelAssetRelationship
> createOneModelAssetRelationship(modelId,assetId,data)
- 参数：modelId, assetId, data
- url: assets/{modelId}/{assetId}/relationships
- method: post
- data: data

### deleteOneModelAssetRelationship
> deleteOneModelAssetRelationship(relationshipId)
- 参数：relationshipId
- url: asset-relationships/{relationshipId}
- method: delete

### updateOneModelAssetRelationship
> updateOneModelAssetRelationship(modelId,relationshipId,updatedRelationship)
- 参数：modelId, relationshipId, updatedRelationship
- url: models/{modelId}/relationships/{relationshipId}
- method: put
- data: updatedRelationship

### getAuditsList
> getAuditsList(params,modelId,assetId)
- 参数：params, modelId, assetId
- url: audits/{modelId}/{assetId}/asset
- method: get
- params: params

