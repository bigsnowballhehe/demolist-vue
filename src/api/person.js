import request from "@/utils/request";
export function getPer(query) {
  return request({
    url: "getPer",
    method: "get",
    params: query
  });
}
