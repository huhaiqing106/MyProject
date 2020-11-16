import React from 'react';
import { typeStatue, checkStatue } from './constant';
import { message } from 'antd';
import update from 'immutability-helper';
import { ConfirmModal, isObject, isFunc, page, addClass, removeClass, hasClass, findFaceLevelNode, formatNumber, NormalForm, merge } from 'yss-biz';

/**
 * 通用操作提示窗
 *
 * @param {*} [options={}]
 * @returns
 */
export const hanbleConfirm = (options = {}) => {
  let formDom = '';
  const {
    contentName,
    contentLabel,
    contentRequired,
    requiredMessage,
    rowChecked = [],
    done = () => { },
    then = () => { },
    title = '请确认您的操作',
    success = '',
    error = '',
    response = 'callbackForTableChange',
  } = options;
  if (!rowChecked.length) return message.error('请选择需要操作的数据');
  const doing = async (formValues) => {
    let rowDatas;
    if (!!formValues) {
      rowDatas = rowChecked.map((item) => {
        return { ...item, ...formValues };
      });
    } else {
      rowDatas = rowChecked;
    }
    let data = await done(rowDatas);
    let res = data.get(response);
    !res && (res = data);
    switch (res.winRspType) {
      case 'SUCC':
        message.success(success || res.msg);
        return then(res, rowChecked);
      default:
        return message.error(error || res.msg);
    }
  };

  const handleOk = async () => {
    if (contentName) {
      let formValues = formDom.getValues();
      if (contentRequired) {
        await formDom.onValidate(
          async () => {
            await doing(formValues);
          },
          async () => {
            return Promise.reject();
          }
        );
      } else {
        await doing(formValues);
      }
    } else {
      await doing();
    }
  };
  ConfirmModal({
    title,
    content: !!contentName ? (
      <NormalForm
        refs={(ref) => (formDom = ref)}
        formItem={[
          {
            name: contentName,
            label: contentLabel,
            type: 'TextArea',
            rules: [
              {
                required: contentRequired,
                message: requiredMessage,
              },
            ],
          },
        ]}
      />
    ) : null,
    onOk: handleOk,
  });
};

/**
 * 设置表头信息
 *
 * @param {*} array
 * @returns
 */
export const setColumns = (array) => {
  if (isObject(array)) {
    let { list, datas, index } = array;
    list[index] = { ...list[index], ...datas };
    return list;
  }
  let newArray = array || [];
  if (!newArray.length) {
    return;
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
        },
      };
    } else if (item.title === '状态' && !item.unConvert) {
      return {
        title: '状态',
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        width: item.width,
        ellipsis: true,
        showSorterTooltip: false,
        sorter: (dataA, dataB) => {
          return sortFunction(dataA[item.dataIndex], dataB[item.dataIndex]);
        },
        render: (column) => <span style={{ color: typeStatue[column] }}>{column === '1' ? '启用' : column === '2' ? '停用' : '注销'}</span>,
      };
    } else if (item.title === '审核状态') {
      return {
        title: '审核状态',
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        ellipsis: true,
        width: item.width,
        showSorterTooltip: false,
        sorter: (dataA, dataB) => {
          return sortFunction(dataA[item.dataIndex], dataB[item.dataIndex]);
        },
        render: (column) => <span style={{ color: checkStatue[column] }}>{column === '2' ? '待审核' : column === '1' ? '已审核' : ''}</span>,
      };
    } else if (item.title === '操作') {
      return {
        ...item,
        width: item.width || '250px',
      };
    } else if (r.test(item.title) && !item.unConvert) {
      return {
        title: item.title,
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        width: item.width,
        align: 'right',
        ellipsis: true,
        showSorterTooltip: false,
        sorter: (dataA, dataB) => {
          return sortFunction(dataA[item.dataIndex], dataB[item.dataIndex]);
        },
        render: (column) => <span style={{ color: '#E6A23C' }}>{formatNumber(column)}</span>,
      };
    } else {
      return {
        ...item,
        ellipsis: true,
        title: item.title,
        showSorterTooltip: false,
        sorter: (dataA, dataB) => {
          return sortFunction(dataA[item.dataIndex], dataB[item.dataIndex]);
        },
      };
    }
  });
  return columns;
};

/**
 * 表格排序
 *
 * @param {*} dataIndexA
 * @param {*} dataIndexB
 * @returns
 */
const sortFunction = function (dataIndexA, dataIndexB) {
  if (!dataIndexA || dataIndexA instanceof Object) {
    dataIndexA = '';
  }
  if (!dataIndexB || dataIndexA instanceof Object) {
    dataIndexB = '';
  }
  if (typeof dataIndexA !== 'number') {
    return dataIndexA.localeCompare(dataIndexB);
  } else {
    return dataIndexA > dataIndexB;
  }
};

/**
 * 设置表格属性
 *
 * @param {*} params
 * @returns
 */

/***设置表格属性 */

export const setTableInfo = function (params) {
  let $this = params.target || this;
  return {
    ...params,
    scroll: {
      x: 100,
      y: params.height ? `calc(${params.height} - 20px)` : 260,
    },
    bordered: true,
    pagination:  params.pagination !== false ? {
      showSizeChanger:true,
      size:"small",
      ...params.pagination,
    } : false,

    onHeaderCellMove: (dragIndex, hoverIndex) => {
      const { columns } = $this.state;
      const dragColumn = columns[dragIndex];
      const hoverColumn = columns[hoverIndex];
      $this.setState(
        update($this.state, {
          columns: {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragColumn],
              [hoverIndex > dragIndex ? hoverIndex - 1 : hoverIndex + 1, 1],
              [dragIndex, 0, hoverColumn]
            ]
          }
        })
      );
    },
    onRowMove: (dragIndex, hoverIndex) => {
      const { dataSource } = $this.state;
      const dragRow = dataSource[dragIndex];
      const hoverRow = dataSource[hoverIndex];
      $this.setState(
        update($this.state, {
          dataSource: {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragRow],
              [hoverIndex > dragIndex ? hoverIndex - 1 : hoverIndex + 1, 1],
              [dragIndex, 0, hoverRow]
            ]
          }
        })
      );
    },
    onResize: (index, _, { size }) => {
      $this.setState(({ columns }) => {
        const nextColumns = [...columns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width
        };
        return { columns: nextColumns };
      });
    },
    rowClassName: (record, index) => (index % 2 === 0 ? 'tableRowBlue' : '')
  };
};

// 设置行字体颜色
export const setRowColor = color => {
  const colorType = {
    error: typeStatue[3],
    warning: typeStatue[2],
    success: typeStatue[1],
    info: typeStatue[0]
  };
  let newColor = isFunc(color) ? color(colorType) : color;
  return { color: colorType[newColor] || newColor };
};
/**
 * 勾选表格单选框列获取已经勾选的id
 *
 * @param {*} callback
 * @returns
 */
export const rowSelectionFunc = function (callback) {
  if (!this?.state) {
    return {
      onChange: (selectedRowKeys, selectedRows) => {
        return callback && callback(selectedRows, selectedRowKeys);
      },
    };
  } else {
    return {
      selectedRowKeys: this.state ? this.state.keys : [],
      onChange: (selectedRowKeys, selectedRows) => {
        //获取批量选择中的批量的Id号;
        let ids = selectedRows.map(item => {
          return item;
        });
        if (typeof callback === 'function') {
          this.setState(() => {
            return { ids, keys: selectedRowKeys };
          });
          return callback(ids);
        } else {
          this.setState(() => {
            return { ids, keys: selectedRowKeys };
          });
        }
      }
    };
  }
};

/***过滤对象空的属性****/
export const filterNullElement = object => {
  let newObject = {};
  for (let key in object) {
    if (object[key]) {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

/***设置验证表单数据*****/
export const setFieldsObject = (object, type) => {
  let newObject = {};
  Object.keys(object).forEach((item) => {
    /*判断当时增加的时候初始化返回空**/
    newObject[item] = type === 'add' ? '' : object[item];
  });
  return newObject;
};
/**对象重置 */
export const restQueryElement = obj => {
  if (!obj.constructor === Object) {
    return;
  }
  let query = obj;
  let newQuery = {};
  for (let key in query) {
    newQuery[key] = '';
  }
  newQuery.reqPageNum = page.reqPageNum;
  newQuery.reqPageSize = page.reqPageSize;
  return newQuery;
};

/**
 * 点击表格复选框，获取选中的行ID,return array代表能能够进行http请求，
 * returen boolean代表存在重复的不能进行http请求
 *
 * @param {*} params
 * @param {*} type
 * @param {string} [sign='checkStatus']
 * @returns
 */
export const isCheckTrue = (params, type, sign = 'checkStatus') => {
  let ids = [];
  let isNoCheck = true;
  params.forEach((item) => {
    if (item[sign] === type) {
      isNoCheck = false;
      return;
    } else {
      ids.push(item.id);
    }
  });
  if (isNoCheck) {
    return ids;
  } else {
    return isNoCheck;
  }
};



/**
 * 格式化表格数据
 *
 * @param {*} [datas=[]]
 * @param {string} [prefix='']
 * @returns
 */
export const formatTableDatas = (datas = [], prefix = '') => {
  return datas.map((item, index) => {
    item.key = prefix + index;
    return item;
  });
};

/**
 * 点击行样式
 *
 * @param {*} [e={}]
 * @param {*} [obj={}]
 * @returns
 */
export const setClickTrStyle = (e = {}, obj = {}) => {
  const currentTr = findFaceLevelNode(e.target, 'tr');
  const { cls = 'yss-biz-table-click-tr', multiple = false, cancel = false, clear = false } = obj;
  let parentEl = currentTr.parentElement || {};
  let allTr = [isFunc(parentEl.querySelector) ? parentEl.querySelector(`.${cls}`) : null] || [];
  let noHaveClass = cancel ? !hasClass(currentTr, cls) : true;
  !multiple &&
    allTr.forEach((item) => {
      removeClass(item, cls);
    });
  !clear && noHaveClass && addClass(currentTr, cls);
  return clear ? false : noHaveClass;
};

/**
 * 强制渲染 - 适用于表格和按钮组
 *
 * @param {*} [array=[]]
 */
export const forceRender = (array = []) => {
  let len = array.length - 1;
  len < 0 && (len = 0);
  !!(array[len] || {}).fill ? array.pop() : array.push({ fill: true, width: 0 });
};

/**
 * 组装树形结构
 *
 * @param {*} [datas=[]]
 * @param {*} { tagKey = '', compKey = '', root = 'root' }
 * @returns
 */
export const assemblyDatas = (datas = [], { tagKey = '', compKey = '', root = 'root' }) => {
  let haveNextLayer = false;
  let layer = 0;
  let roots = [];
  let tree = {
    layer0: [],
  };
  datas.forEach((item) => {
    if (item[tagKey] === root || !item[tagKey]) {
      roots.push(item);
    } else {
      tree.layer0.push(item);
      haveNextLayer = true;
    }
  });

  const loopChildren = (children = [], pevLayer = []) => {
    const compKeys =
      pevLayer?.map((rootItem) => {
        return rootItem[compKey];
      }) || [];

    !!children?.length &&
      children.forEach((item) => {
        let key = item[tagKey];
        haveNextLayer = compKeys.indexOf(key) === -1;
        if (!haveNextLayer) {
          for (let i = 0, len = pevLayer?.length; i < len; i++) {
            let rootItem = pevLayer[i];
            if (rootItem[compKey] === key) {
              !Array.isArray(rootItem.children) ? (rootItem.children = [item]) : rootItem.children.push(item);
              break;
            }
          }
          layer++;
        } else {
          if (Array.isArray(tree['children' + layer])) {
            tree['layer' + layer].push(item);
          } else {
            layer++;
            tree['layer' + layer] = item;
          }
        }
      });
    !!haveNextLayer && loopChildren(tree['layer' + layer], tree['layer' + (layer - 1)]);
  };
  !!haveNextLayer && loopChildren(tree.layer0, roots);
  return roots;
};