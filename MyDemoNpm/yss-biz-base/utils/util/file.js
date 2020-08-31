import { $ajax } from 'yss-biz'
import { message } from "antd";

/**
 * 导出
 * 
 * @param {*} result 
 * @param {*} title 
 */
export const handleExport = (result, title) => {
  if (!result) return false;
  const aLink = document.createElement("a");
  let blob = new Blob([result], { type: "application/vnd.ms-excel" })
  aLink.href = URL.createObjectURL(blob);
  aLink.download = title
  aLink.click()
  document.body.appendChild(aLink)
}

/**
  * 按条件：导出全部和导出当前页
  * 
  * @param {*} url 导出地址
  * @param {*} params 按条件导出元素
  * @param {*} title 导出文件的名称
  * @param {*} isAll 是否全部导出
  */
export const exportFile = async (url, params, title, isAll) => {
  if (isAll) {
    delete params["reqPageNum"];
    delete params["reqPageSize"];
  }
  delete params["clearingStatus"];
  let result = await $ajax(url, params, 'post', { responseType: 'arraybuffer' })
  handleExport(result, title)
}

/**
 * 导出选中行
 * 
 * @param {*} url 导出地址
 * @param {*} params 按选中的行
 * @param {*} title 导出文件的名称
 */
export const exportSelectFile = async (url, params, title) => {
  if (!params.length) {
    message.error('请选择需要导出的项目');
    return;
  }
  let newParams = { ids: [] }
  params.forEach(element => {
    newParams.ids.push(element.id)
  });
  let result = await $ajax(url, newParams, 'post', { responseType: 'arraybuffer' });
  handleExport(result, title)
}
/***导出选中行
 *
 * @description 与后端进行数据交换的方式为，传递数组集合
 *
 * url：导出地址
 * params：按选中的行
 * title：导出文件的名称
 *
 * ***/

export const exportSelectFileWithArrayParams = async (url, params, title) => {
  if (!params.length) {
    message.error('请选择需要导出的项目');
    return;
  }
  let newParams = [];
  params.forEach(element => {
    newParams.push(element.id);
  });
  let result = await await $ajax(url, newParams, 'post', { responseType: 'arraybuffer' });
  handleExport(result, title);
};

/**
 * 根据文字导出特定的文件
 * @param {*} result 文件流
 * @param {*} title 下载文件名
 * @param {*} type 下载的文件类型
 */
export const bufferExportFile = (result, title, fileType) => {
  if (!result) return false;
  const aLink = document.createElement('a');
  let blobFileType = BlobFileType[fileType];
  if(blobFileType === undefined) {
    blobFileType = 'application/pdf';
  }
  let blob = new Blob([result], { type: blobFileType });
  aLink.href = URL.createObjectURL(blob);
  aLink.download = title;
  aLink.click();
  document.body.appendChild(aLink);
};
const BlobFileType = {
  'doc': 'application/msword',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'xls': 'application/vnd.ms-excel',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'ppt': 'application/vnd.ms-powerpoint',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'pdf': 'application/pdf',
  'jpg': 'image/jpg',
  'bmp': 'image/bmp',
  'gif': 'image/gif',
  'jpeg': 'image/jpeg',
  'png': 'image/png',
  'ico': 'image/ico',
  'RAW': 'image/RAW',
}
/**
 * 获取文件的后缀名
 * @param {*} fileName  文件名
 */
export const getFileType = fileName => {
  const index1 = fileName.lastIndexOf(".");
  const fileType = fileName.substring(index1 + 1 ,fileName.length);
  return fileType;
}
/**
 * 判断是否为图片文件
 * @param {*} fileName 文件名
 */
export const isImageFile = fileName => {
  const fileType = getFileType(fileName);
    // 图片格式
  const imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif','ico' ,'RAW'];
  return imglist.includes(fileType);
}