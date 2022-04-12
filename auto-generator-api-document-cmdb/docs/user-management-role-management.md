### getRolesList
> getRolesList(params)
- 参数：params
- url: roles
- method: get
- params: params

### addRole
> addRole(data)
- 参数：data
- url: roles
- method: post
- data: data

### deleteRole
> deleteRole(role_id)
- 参数：role_id
- url: roles/{role_id}
- method: delete

### getOneRoleInfo
> getOneRoleInfo(role_id)
- 参数：role_id
- url: roles/{role_id}
- method: get

### updateRole
> updateRole(role_id,data)
- 参数：role_id, data
- url: roles/{role_id}
- method: put
- data: data

### updateRolePermissions
> updateRolePermissions(role_id,data)
- 参数：role_id, data
- url: roles/{role_id}/permissions
- method: put
- data: data

