### getModelTemplates
> getModelTemplates(params)
- 参数：params
- url: model-templates
- method: get
- params: params

### addModelTemplate
> addModelTemplate(data)
- 参数：data
- url: model-templates
- method: post
- data: data

### deleteModelTemplate
> deleteModelTemplate(modelId)
- 参数：modelId
- url: model-templates/{modelId}
- method: delete

### editModelApi
> editModelApi(modelId,data)
- 参数：modelId, data
- url: model-templates/{modelId}
- method: put
- data: data

### editModelPropApi
> editModelPropApi(modelId,propertyId,data)
- 参数：modelId, propertyId, data
- url: model-templates/{modelId}/properties/{propertyId}
- method: put
- data: data

### addModelPropApi
> addModelPropApi(modelId,propertyId,data)
- 参数：modelId, propertyId, data
- url: model-templates/{modelId}/properties/{propertyId}
- method: post
- data: data

### deleteModelPropApi
> deleteModelPropApi(modelId,propertyId)
- 参数：modelId, propertyId
- url: model-templates/{modelId}/properties/{propertyId}
- method: delete

### uploadStaticFile
> uploadStaticFile(fileType,data)
- 参数：fileType, data
- url: /static-file?file_type={fileType}
- method: post
- data: data

