import React from 'react'
import { Modal } from 'antd';
import { DragDom } from 'yss-biz'
const { confirm } = Modal;
export default (options = {}) => {
  return confirm({
    title: '是否删除选中的数据？',
    okText: '确定',
    cancelText: '取消',
    ...options
  })
};
