import { publicAsync } from 'yss-biz'
import { axiosPageList } from '../services'
/*
  _httpPageList // 初始化表格和模糊查询
*/
const { _httpPageList } = publicAsync
export default {
  async httpPageList(state, {}, obj) {
    return _httpPageList(state, { request: axiosPageList }, obj)
  }
}