import request from '@/utils/request'

// 上传图片
export function updateModelImg(payLoad) {
    return request({
        url: `static-file`,
        method: 'post',
        params:{file_type:"model_icon_user"},
        data:payLoad
    })
}
