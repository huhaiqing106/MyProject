
import { $ajax } from 'yss-trade-base'

const fixedPrefix = ''//按需
// 获取表格数据
export const axiosPageList = params => $ajax(`${fixedPrefix}/xxx/pageList`, params, 'post')
