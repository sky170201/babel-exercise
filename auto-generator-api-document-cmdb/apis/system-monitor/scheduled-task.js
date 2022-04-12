import request from "@/utils/request";

// 查询定时任务监控图表
export function getScheduledTask(payload) {
    return request({
        // url: `monitor/plugins?page_num=${payload.num}&page_size=${payload.size}&is_all=0`,
        url: `monitor/plugins`,
        method: "get",
        params: payload
    });
}

// 获取单个定时任务成功失败次数 任务执行时间 type=pie 为查询次数 type=line 为 查询时间
export function getSingleTaskSF(modelId, pluginName, payload) {
    return request({
        url: `monitor/plugin/${modelId}/${pluginName}`,
        method: "get",
        params: payload
    });
}
