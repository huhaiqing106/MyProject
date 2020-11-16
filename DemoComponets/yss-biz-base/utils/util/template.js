import { filterNullElement, getValue, isObject, formatImmutable } from './publicTool';
import { page } from './constant';

/**
 * 公共方法
 * 
 * @description setModalStatus 设置弹窗状态
 * @description setTrDatas 设置点击或选中行数据
 * @description setPages 设置分页
 * @description setModelData 设置其它Model数据
 */
export const publicSync = {
  /**
   * 设置弹窗状态
   *
   * @param {*} state
   * @param {*} values
   * @returns
   */
  setModalStatus(state, values) {
    const { modalType, isShow } = values;
    return state.merge({
      [modalType]: {
        show: isShow,
      },
    });
  },

  /**
   * 设置点击或选中行数据
   *
   * @param {*} state
   * @param {*} { type = 'click', row, clickKey = 'clickedRow', selectKey = 'selectedRows' }
   * @param {*} { getState }
   * @returns
   */
  setTrDatas(state, { type = 'click', row, clickKey = 'clickedRow', selectKey = 'selectedRows' }, { getState }) {
    state = getState();
    return state.merge({
      [type === 'click' ? clickKey : selectKey]: row || {},
    });
  },

  /**
   * 设置分页
   *
   * @param {*} state
   * @param {*} value
   * @returns
   */
  setPages(state, value) {
    return state.set('page', { reqPageNum: value, pageSize: page.reqPageSize });
  },

  /**
   * 设置其它 Model 数据
   *
   * @param {*} state
   * @param {*} values
   * @returns
   */
  setModelData(state, values) {
    if (isObject(values)) {
      Object.keys(values).forEach((key) => {
        state = state.set(key, values[key]);
      });
    }
    return state;
  },
};

/**
 * 公共方法
 * 
 * @description _httpPageList 分页查询方法
 */
export const publicAsync = {
  /**
   * 初始化表格和模糊查询
   *
   * @param {*} state
   * @param {*} { relyKeys = ['page', 'query'], setKey = 'pageList', params = {}, defaultParams = {}, request = () => {} }
   * @param {*} { getState }
   * @description params参数会覆盖，defaultParams可以传递参数
   * @returns
   */
  async _httpPageList(
    state,
    { relyKeys = ['page', 'query'], setKey = 'pageList', params = {}, defaultParams = {}, request = () => {} },
    { getState }
  ) {
    let resPage = formatImmutable(state, relyKeys[0]);
    params =  formatImmutable(state, relyKeys[1]);
    let resValue = { ...defaultParams, ...params };
    params = filterNullElement(resValue);
    params = { ...resValue, ...resPage };
    let res = await request(params);
    const datas = getValue(res.data, {});
    const list = getValue(datas.list, []);
    const { total } = datas;
    list.total = total;
    state = getState();
    return state.set(setKey, list);
  },
};

/**
 * 公共state变量
 * 
 * @description page 页码
 * @description trDom 选中行的节点
 * @description query 模糊查询
 * @description pageList 表格数据
 * @description clickedRow 点击行
 * @description selectedRows 选中行
 * @description callbackForTableChange 请求返回状态
 */
export const publicModels = {
  page: { ...page }, // 页码
  trDom: '', // 选中行的节点
  query: {}, // 模糊查询
  pageList: [], // 表格数据
  clickedRow: {}, // 点击行
  selectedRows: [], // 选中行
  callbackForTableChange: {}, //请求返回状态
};
