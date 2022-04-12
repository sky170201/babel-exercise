### getUsers
> getUsers(params)
- 参数：params
- url: users
- method: get
- params: params

### getOneUser
> getOneUser(role_id)
- 参数：role_id
- url: users/{role_id}
- method: get

### addUser
> addUser(data)
- 参数：data
- url: users
- method: post
- data: data

### resetUserPassword
> resetUserPassword(data)
- 参数：data
- url: users
- method: put
- data: data

### forbidden
> forbidden(role_id)
- 参数：role_id
- url: users/{role_id}
- method: delete

### updateUserRole
> updateUserRole(role_id,data)
- 参数：role_id, data
- url: users/{role_id}/roles
- method: put
- data: data

### loginLog
> loginLog(role_id,params)
- 参数：role_id, params
- url: audits/{role_id}/tokens
- method: get
- params: params

