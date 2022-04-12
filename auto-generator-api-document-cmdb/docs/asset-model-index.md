### getAllModels
> getAllModels()
- 参数：
- url: models
- method: get

### createFullModel
> createFullModel(data)
- 参数：data
- url: create_model
- method: post
- data: data

### createModels
> createModels(newModel)
- 参数：newModel
- url: models
- method: post
- data: newModel

### updateModels
> updateModels(modelId,updatedModel)
- 参数：modelId, updatedModel
- url: models/{modelId}
- method: put
- data: updatedModel

### getModelIcons
> getModelIcons()
- 参数：
- url: static-file
- method: get
- params: undefined
- file_type: model_icon

### createClassification
> createClassification(newCls)
- 参数：newCls
- url: classifications
- method: post
- data: newCls

### colletionModel
> colletionModel(modelId,data)
- 参数：modelId, data
- url: users/{modelId}/stars
- method: put
- data: data

### getColletionModels
> getColletionModels(modelId)
- 参数：modelId
- url: users/{modelId}/stars
- method: get

