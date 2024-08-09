import { request } from "@/utils/service"

/** 查询ip list */
export function getIpInfoList(data: any) {
  return request({
    url: "/ip_query/get_ip_info_list",
    method: "get",
    params: data
  })
}

/** 查询具体信息 */
export function getIpInfoByName(data: any) {
  return request({
    url: "/ip_query/get_ip_info_by_name",
    method: "get",
    params: data
  })
}

/** 查询附近poi单位信息 */
export function getPoiTest(data: any) {
  return request({
    url: "/ip_query/get_poi_test",
    method: "get",
    params: data
  })
}
