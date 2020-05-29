
import { filterNullElement, getValue, isObject } from './publicTool'
import { page } from './constant'



export const publicSync = {
  // 设置弹窗状态
  setModalStatus(state, values) {
    const { modalType, isShow } = values
    return state.merge({
      [modalType]: {
        'show': isShow
      }
    })
  },
  // 设置点击或选中行数据
  setTrDatas(state, { type = 'click', row, clickKey = 'clickedRow', selectKey = 'selectedRows' }, { getState }) {
    state = getState()
    return state.merge({
      [type === 'click' ? clickKey : selectKey]: row || {}
    })
  },
  // 设置分页
  setPages(state, value) {
    return state.set('page', { pageNum: value, pageSize: '20' })
  },
  // 设置其它 Model 数据
  setModelData(state, values) {
    if (isObject(values)) {
      Object.keys(values).forEach(key => {
        state = state.set(key, values[key])
      })
    }
    return state
  },
}

export const publicAsync = {
  // 初始化表格和模糊查询
  async _httpPageList(state, { relyKeys = ['page', 'query'], setKey = 'pageList', params = {}, defaultParams = {}, request = () => { } }, { getState }) {
    let _page = state.get(relyKeys[0])
    let resPage = _page.toJS ? _page.toJS() : _page
    params = state.get(relyKeys[1])
    !!params.toJS && (params = params.toJS())
    let resValue = { ...defaultParams, ...params }
    params = filterNullElement(resValue)
    params = { ...resValue, ...resPage }
    let res = await request(params)
    const datas = getValue(res.data, {})
    const list = getValue(datas.list, [])
    const { total } = datas
    list.total = total
    state = getState()
    return state.set(setKey, list)
  },
}
export const publicModels = {
  page: { ...page },//页码
  trDom: '',//选中行的节点
  query: {},//模糊查询
  pageList: [],//表格数据
  clickedRow: {},
  selectedRows: {},
  callbackForTableChange: {},//请求返回状态
}
