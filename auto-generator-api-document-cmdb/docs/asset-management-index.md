### getProperty
> getProperty(modelId)
- 参数：modelId
- url: models/{modelId}/properties
- method: get

### getAssets
> getAssets(modelId,params)
- 参数：modelId, params
- url: assets/{modelId}
- method: get
- params: params

### updateAssets
> updateAssets(modelId,assetId,updatedAsset)
- 参数：modelId, assetId, updatedAsset
- url: assets/{modelId}/{assetId}
- method: put
- data: updatedAsset

### deleteAsset
> deleteAsset(modelId,assetId)
- 参数：modelId, assetId
- url: assets/{modelId}/{assetId}
- method: delete

### deleteAssets
> deleteAssets(modelId,data)
- 参数：modelId, data
- url: assets/{modelId}
- method: delete
- data: data

### createAssets
> createAssets(modelId,newAsset)
- 参数：modelId, newAsset
- url: assets/{modelId}
- method: post
- data: newAsset

### batchAssets
> batchAssets(modelId,params,newAssets,onUploadProgress)
- 参数：modelId, params, newAssets, onUploadProgress
- url: assets/{modelId}
- method: post
- data: newAssets
- params: params
- onUploadProgress: onUploadProgress

### getExcelTemplates
> getExcelTemplates(modelId)
- 参数：modelId
- responseType: blob

### getExceljob
> getExceljob(jobId)
- 参数：jobId
- url: exceljob/{jobId}
- method: get

### uploadExcel
> uploadExcel(modelId,data)
- 参数：modelId, data
- url: excel/{modelId}
- method: post
- data: data

### downloadAssets
> downloadAssets(modelId)
- 参数：modelId
- url: download/{modelId}/assets
- method: get
- responseType: blob

