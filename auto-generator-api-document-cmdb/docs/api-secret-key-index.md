### getAPISecretKeys
> getAPISecretKeys(payLoad)
- 参数：payLoad
- url: secret-key
- method: get
- params: payLoad

### createAPISecretKey
> createAPISecretKey(payLoad)
- 参数：payLoad
- url: secret-key
- method: post
- data: payLoad

### downLoadAPISecretKey
> downLoadAPISecretKey(name,id)
- 参数：name, id
- url: /secret-key/{name}/download/{id}
- method: get
- responseType: blob

### deleteAPISecretKey
> deleteAPISecretKey(id)
- 参数：id
- url: /secret-key/{id}
- method: delete

### changeAPISecretStatu
> changeAPISecretStatu(id)
- 参数：id
- url: /secret-key/switch/{id}
- method: put

### changeAPISecretInfo
> changeAPISecretInfo(id,playLoad)
- 参数：id, playLoad
- url: /secret-key/{id}
- method: put
- data: playLoad

