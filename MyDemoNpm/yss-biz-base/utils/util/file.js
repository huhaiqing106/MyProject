/**
* @file 文件处理
* 
*
*
*/

import { $ajax } from 'yss-biz'
import { message } from "antd";

export const handleExport = (result, title) => {
  if (!result) return false;
  const aLink = document.createElement("a");
  let blob = new Blob([result], { type: "application/vnd.ms-excel" })
  aLink.href = URL.createObjectURL(blob);
  aLink.download = title
  aLink.click()
  document.body.appendChild(aLink)
}


/***按条件：导出全部和导出当前页
 * 
 * url：导出地址
 * params：按条件导出元素
 * title：导出文件的名称
 * isAll：是否全部导出
 * ***/

export const exportFile = async (url, params, title, isAll) => {
  if (isAll) {
    delete params["reqPageNum"];
    delete params["reqPageSize"];
  }
  delete params["clearingStatus"];
  let result = await $ajax(url, params, 'post', { responseType: 'arraybuffer' })
  handleExport(result, title)
}


/***导出选中行
 * 
 * url：导出地址
 * params：按选中的行
 * title：导出文件的名称
 * 
 * ***/

export const exportSelectFile = async (url, params, title) => {
  if (!params.length) {
    message.error('请选择需要导出的项目');
    return;
  }
  let newParams = { ids: [] }
  params.forEach(element => {
    newParams.ids.push(element.id)
  });
  let result = await await $ajax(url, newParams, 'post', { responseType: 'arraybuffer' });
  handleExport(result, title)
}