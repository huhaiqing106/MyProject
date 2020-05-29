import React from 'react'
import { typeStatue, checkStatue } from "./constant"
import { message } from "antd"
import { ConfirmModal, isObject, isFunc, page, addClass, removeClass, hasClass, findFaceLevelNode, formatNumber } from 'yss-biz'
import { NormalForm } from 'yss-biz';

// 通用操作提示窗
export const hanbleConfirm = (options = {}) => {
  let formDom = ''
  const { contentName, contentLabel, contentRequired, requiredMessage, rowChecked = [], done = () => { }, then = () => { }, title = '请确认您的操作', success = '', error = '', response = 'callbackForTableChange' } = options
  if (!rowChecked.length) return message.error('请选择需要操作的数据')
  const doing = async formValues => {
    let rowDatas
    if (!!formValues) {
      rowDatas = rowChecked.map(item => {
        return { ...item, ...formValues }
      })
    } else {
      rowDatas = rowChecked
    }
    let data = await done(rowDatas);
    let res = data.get(response)
    !res && (res = data)
    switch (res.winRspType) {
      case 'SUCC':
        message.success(success || res.msg)
        return then(res, rowChecked)
      default:
        return message.error(error || res.msg)
    }
  }

  const handleOk = async () => {
    if (contentName) {
      let formValues = formDom.getValues()
      if (contentRequired) {
        await formDom.onValidate(async () => {
          await doing(formValues)
        }, async () => {
          return Promise.reject()
        })
      } else {
        await doing(formValues)
      }
    } else {
      await doing()
    }

  }
  ConfirmModal({
    title,
    content: !!contentName ? (
      <NormalForm refs={ref => formDom = ref} formItem={[{
        name: contentName,
        label: contentLabel,
        type: 'TextArea',
        rules: [{
          required: contentRequired,
          message: requiredMessage
        }]
      }]} />) : null,
    onOk: handleOk
  })
}

/***设置表头信息 */
export const setColumns = (array, prams) => {
  if (isObject(array)) {
    let { list, datas, index } = array
    list[index] = { ...list[index], ...datas }
    return list
  }
  let newArray = array || []
  if (!newArray.length) {
    return
  }
  let columns = newArray.map((item, index) => {
    let r = /(元\)$)/g;
    if (item.title === '序号') {
      return {
        title: item.title,
        width: 80,
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        ellipsis: true,
        fixed: 'left',
        render: (text, record, index) => {
          if (record.serialNumber == '合计') {
            return <span style={{ color: '#E6A23C', fontWeight: 'bolder' }}>合计</span>;
          } else {
            return ++index;
          }
        }
      };
    } else if (item.title === '状态') {
      return {
        title: '状态',
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        width: item.width,
        ellipsis: true,
        render: column => <span style={{ color: typeStatue[column] }}>{column === "1" ? '启用' : column === "2" ? '停用' : '注销'}</span>
      };
    } else if (item.title === '审核状态') {
      return {
        title: '审核状态',
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        ellipsis: true,
        width: item.width,
        render: column => <span style={{ color: checkStatue[column] }}>{column === "2" ? '待审核' : column === "1" ? '已审核' : ''}</span>
      };
    } else if (item.title === '操作') {
      return item
    } else if (r.test(item.title)) {
      return {
        title: item.title,
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        width: item.width,
        align: 'right',
        ellipsis: true,
        render: column => <span style={{ color: '#E6A23C' }}>{formatNumber(column)}</span>
      };
    } else {
      return {
        ...item,
        ellipsis: true,
        title: item.title,
        render: typeof item.render === 'function' ?
          (text, record, index) => item.render(text, record, index, prams) : null
      };
    }
  });
  return columns;
};


/***设置表格属性 */
export const setTableInfo = function (params) {
  const pageCallback = (params.pagination || {}).callback
  return {
    ...params,
    scroll: {
      x: '100%',
      y: '100%'
    },
    bordered: true,
    pagination: !!params.pagination ? {
      pageSize: page.reqPageSize,
      size: 'small',
      onChange: (page, pageSize) => {
        isFunc(pageCallback) && pageCallback(page, pageSize);
      },
      onShowSizeChange: (page, pageSize) => {
        isFunc(pageCallback) && pageCallback(page, pageSize);
      },
      showTotal: total => {
        return <span>{`总记录数：${total}`}</span>;
      },
      ...(() => {
        delete params.pagination.callback
        return params.pagination
      })()
    } : false,
    rowClassName: (record, index) => {
      let _rowClassName = isFunc(params.rowClassName) ? params.rowClassName(record, index) : false
      let _tableRowBlue = index % 2 === 0 ? 'tableRowBlue' : ''
      return !!_rowClassName ? _rowClassName : _tableRowBlue
    }
  };
};

/***勾选表格单选框列获取已经勾选的id */
export const rowSelectionFunc = function (callback) {
  return {
    onChange: (selectedRowKeys, selectedRows) => {
      //获取批量选择中的批量的Id号;
      let ids = selectedRows.map(item => {
        return item
      });
      if (typeof callback === 'function') {
        return callback(ids, selectedRowKeys)
      } else {
        this.setState(() => {
          return { ids, selectedRowKeys };
        });
      }
    }
  };
};

/***设置验证表单数据*****/
export const setFieldsObject = (object, type) => {
  let newObject = {};
  Object.keys(object).forEach(item => {
    /*判断当时增加的时候初始化返回空**/
    newObject[item] = type === 'add' ? '' : object[item];
  });
  return newObject;
}

/***审核反审核前端局部刷新***/
export const batchexamine = (ids, state, list, type) => {
  let newState = state.get(list)
  ids.forEach((rowId) => {
    state.get(list).forEach((element, index) => {
      if (element.get("id") === rowId) {
        let newRow = state.get(list).get(index).set("checkStatus", type);
        newState = newState.splice(index, 1, newRow)
      }
    })
  })
  return newState
}

/***批量删除前端局部刷新***/
export const batcheDelete = (ids, state, list) => {
  let newState = state.get(list);
  ids.forEach((rowId) => {
    newState.forEach((element, index) => {
      if (element.get("id") === rowId) {
        newState = newState.splice(index, 1)
      }
    })
  })
  return newState
}


/**更新状态***/
export const upState = (state, stateList, statusName, status, tableRowId) => {
  let index = state.get(stateList).findIndex(item => item.get("id") === tableRowId)
  let newRow = state.get(stateList).get(index).set(statusName, status);
  let newState = state.get(stateList).splice(index, 1, newRow);
  return newState
}

/***点击表格复选框，获取选中的行ID,return array代表能能够进行http请求，returen boolean代表存在重复的不能进行http请求***/
export const isCheckTrue = (params, type, sign = "checkStatus") => {
  let ids = [];
  let isNoCheck = true;
  params.forEach(item => {
    if (item[sign] === type) {
      isNoCheck = false;
      return;
    } else {
      ids.push(item.id);
    }
  });
  if (isNoCheck) {
    return ids
  } else {
    return isNoCheck
  }
}

/***表格修改行前端局部刷新***/
export const upDate = (state, result, list, params) => {
  const { winRspType } = result.data;
  if (winRspType === "SUCC") {
    let newList = state.get(list).map(item => {
      //判断浏览器对immtable 的兼容
      let id = item.id || item.get("id");
      if (id === params.id) {
        return params;
      } else {
        return item;
      }
    });
    return newList
  } else {
    message.error("请求错误");
  }
}

/***表格增加行前端局部刷新***/
export const add = (state, result, list, params) => {
  const { winRspType } = result.data;
  if (winRspType === "SUCC") {
    let newList = state.get(list).unshift(params);
    message.success('新增成功');
    return newList
  } else {
    message.error("新增失败");
  }
}

/***表格删除行前端局部刷新***/
export const deletes = (state, result, list, id) => {
  const { msg, winRspType } = result.data;
  if (winRspType === "SUCC") {

    let newList = state.get(list).filter(item => {
      let filterId = item.id || item.get("id");
      return filterId !== id;
    });
    message.success('删除成功');
    return newList
  } else {
    message.error(msg);
  }
}
// 格式化表格数据
export const formatTableDatas = (datas = [], prefix = '') => {
  return datas.map((item, index) => {
    item.key = prefix + index
    return item
  })
}

// 点击行样式
export const setClickTrStyle = (e = {}, obj = {}) => {
  const currentTr = findFaceLevelNode(e.target, 'tr')
  const { cls = 'yss-biz-table-click-tr', multiple = false, cancel = false, clear = false } = obj
  let parentEl = currentTr.parentElement || {}
  let allTr = [isFunc(parentEl.querySelector) ? parentEl.querySelector(`.${cls}`) : null] || []
  let noHaveClass = cancel ? !hasClass(currentTr, cls) : true
  !multiple && allTr.forEach(item => {
    removeClass(item, cls)
  })
  !clear && noHaveClass && addClass(currentTr, cls)
  return clear ? false : noHaveClass
}

// 强制渲染 - 适用于表格和按钮组
export const forceRender = (array = []) => {
  let len = array.length - 1;
  len < 0 && (len = 0)
  !!(array[len] || {}).fill ? array.pop() : array.push({ fill: true })
}
