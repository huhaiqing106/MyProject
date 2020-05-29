
import { $ajax } from 'yss-biz'
const fixedPrefix = ''//按需
// 获取表格数据
export const axiosPageList = params => $ajax(`${fixedPrefix}/xxx/pagList`, params, 'post')
