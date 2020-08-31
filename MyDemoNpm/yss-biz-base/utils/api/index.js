import { service } from "win-trade-base";
import { commonErr } from './status'
import apiUrl from './apiUrl'

/**
 * 异步请求
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} type 
 * @param {*} obj 
 */
const $ajax = async (url, data, type, obj) => {
    obj = typeof type === 'object' ? type : obj
    type = typeof data === 'string' ? data : type
    obj = {
        ...obj, headers: {
            token: localStorage.getItem("Authorization")
        }
    }
    let getUrl = apiUrl[url] || url
    return new Promise((resolve, reject) => {
        service.httpService({
            url: getUrl,
            method: type || 'get',
            data,
            ...obj
        }).then(res => {
            // 当请求结果中的状态码为正常的时候，返回请求的 data 结果
            if (res.winRspType === 'SUCC' || Object.prototype.toString.call(res) === "[object ArrayBuffer]") {
                return resolve(res);
            } else if (!res?.code && !res?.winRspType && Object.prototype.toString.call(res) !== "[object ArrayBuffer]") {
                return resolve({
                    code: '200',
                    data: res,
                    winRspType: 'SUCC',
                    msg:'请求成功'
                })
            } else {
                // 如果请求状态码不正常，根据状态码分派到各个处理函数
                return resolve({
                    code: '1000',
                    data: {},
                    winRspType: 'ERROR',
                    msg: res?.msg
                });
            }
        }).catch(error => {
            return resolve({
                code: error?.response?.status,
                data: {},
                error: error?.response,
                winRspType: 'ERROR',
                msg: error.message
            })
        }).finally(() => {
            resolve()
        })
    })

}
export { $ajax }