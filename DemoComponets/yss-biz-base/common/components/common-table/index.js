/**
 * 组件api解析
 * resizable--是否支持拉动改变列宽--bool(默认true);注：头部每一项需要配置width
 * colDraggable--是否表格头部支持拖拽改变排序--bool(默认true)
 * rowDraggable--表格行是否支持拖拽改变--bool(默认true)
 *
 * **/
import React, { useState, useEffect } from "react";
import DrapTable from "../drap-table";
import { message } from "antd";

function CommonTable(props) {
  const [dataSource, setDataSource] = useState(props.dataSource);
  const [columns, setColumns] = useState(props.columns);

  useEffect(() => {
    setDataSource(props.dataSource);
    resetColWidth()
  }, [props.dataSource, props.columns]);

  /**拉动改变列宽**/
  const handleResize = (index, _, { size }) => {
    const nextColumns = [...columns];
    nextColumns[index] = { ...nextColumns[index], width: size.width };
    setColumns(nextColumns);
  };

  /**拖拽改变列头排序**/
  const handleMoveCol = (dragIndex, hoverIndex) => {
    const dragColumn = columns[dragIndex];
    const hoverColumn = columns[hoverIndex];
    if (dragColumn.hasOwnProperty('fixed') || hoverColumn.hasOwnProperty('fixed')) {
      return message.warning('靠左/右固定栏不支持拖拽改变排序')
    }
    let nextColumns = [...columns];
    nextColumns[dragIndex] = hoverColumn;
    nextColumns[hoverIndex] = dragColumn;
    setColumns(nextColumns);
  };

  /**修改表格数据行排序**/
  const handleMoveRow = (index1, index2) => {
    const index1Data = dataSource[index1];
    const index2Data = dataSource[index2];
    let newDataSource = [...dataSource];
    newDataSource[index1] = index2Data;
    newDataSource[index2] = index1Data;
    setDataSource(newDataSource);
  };

  /**自适应列宽**/
  const resetColWidth = () => {
    let newColumns;
    let columnLength;
    let datas = props.dataSource || []
    let colNums = {};
    let reg = /[^\x00-\xff]/;
    let aReg = /[a-z|A-Z]/;

    if (!!props.autoWidth && !!props?.dataSource?.length) {
      columnLength = {};
      let ignoreCols = props.ignoreCols || []

      const pushDatas = (item, morNum = 0) => {
        Object.keys(item || {}).forEach(key => {
          let len = 0;
          !Array.isArray(columnLength[key]) && (columnLength[key] = []);
          for (let i = 0; i < item[key]?.length || 0; i++) {
            if (reg.test(item[key][i])) {
              len += 1
            } else if (aReg.test(item[key][i])) {
              len += .6
            } else {
              len += .5
            }
          }
          len = len + morNum
          columnLength[key].push(len);
        })
      }
      let tier = 0
      const loopDatas = datas => {
        (datas || []).forEach((item,index) => {
          if (!!item?.children?.length) {
            let morNum = (15 * tier + 25)/.875/16 + 2
            pushDatas(item, morNum)
            tier++
            loopDatas(item.children)
          } else {
            pushDatas(item)
            tier = 0
          }
        })
      }
      loopDatas(datas || [])
      Object.keys(columnLength).forEach(key => {
        colNums[key] = Math.max.apply(null, columnLength[key])
      })
      const loopColumns = columns => {
        return columns?.map(item => {
          if (item.children?.length) {
            item.children = loopColumns(item.children)
          } else {
            let titLen = 0;
            for (let i = 0; i < item.title?.length || 0; i++) {
              if (reg.test(item.title[i])) {
                titLen += 1
              } else if (aReg.test(item.title[i])) {
                titLen += .6
              } else {
                titLen += .5
              }
            }
            let mainWidth = +titLen * .875 * 16 + 35;
            let newWidth = +colNums[item.dataIndex] * .875 * 16 + 35;
            if (ignoreCols.indexOf(item.dataIndex) === -1 && !isNaN(newWidth)) {
              item.width = mainWidth <= newWidth ? newWidth : mainWidth
            }
          }
          return item
        })
      }
      newColumns = loopColumns(props.columns)
    }
    setColumns(newColumns || props.columns);
  }
  return (
    <DrapTable
      {...{ ...props, dataSource, columns }}
      onResize={handleResize}
      onHeaderCellMove={handleMoveCol}
      onRowMove={handleMoveRow}
      resizable={props.hasOwnProperty("resizable") ? props.resizable : true}
      colDraggable={
        props.hasOwnProperty("colDraggable") ? props.colDraggable : true
      }
      rowDraggable={
        props.hasOwnProperty("rowDraggable") ? props.rowDraggable : true
      }
    />
  );
}
export default CommonTable;
