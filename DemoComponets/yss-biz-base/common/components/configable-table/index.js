import React from 'react';
import { Table, Checkbox, Button, Modal, message } from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
import CommonTable from '../common-table'
import { DndProvider } from 'react-dnd';
import { service } from "win-trade-base";

class ConfigableTable extends React.Component {
  state = {
    indexColumns: [],//右侧索引列表，永远不变
    tableColumns: [],//表格列表
    tableColumnsCline: {
      clientX: 0,
      clientY: 0,
    },//记录索引弹框的距离
    isIndexColunmShow: false,//是否显示在线列
    isShowBottom: false // 是否显示按钮
  }

  handleSetRowProps = (record, index) => {
    const { onRow, onRowMove, rowDraggable } = this.props;
    const props = onRow && onRow(record, index);
    const rowProps = { ...props, moveRow: onRowMove, index, rowDraggable };
    return rowProps;
  };

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        {/**索引列*** */}
        <div style={{ "position": "relative", height: this.props.height }}  >

          {/**索引列*** */}
          <div className="yss-configable-table tableInfo">
            <CommonTable
              {...this.props}
              rowKey={record => {
                if (typeof this.props.rowKey === "function") {
                  return (this.props.rowKey && this.props.rowKey(record))
                }
                return record[this.props.rowKey] || record.id
              }}
              columns={this.state.tableColumns}
            />
          </div>
        </div>
      </DndProvider>
    );
  }

  componentWillReceiveProps(nextProps) {
    const {
      columns,
    } = nextProps;
    if (this.props?.columns?.length === columns?.length) return false
    let formatColumns = columns?.map(item => {
      return {
        ...item,
        checked: true
      }
    })
    this.setState(() => {
      return {
        tableColumns: formatColumns,
        indexColumns: formatColumns
      }
    }, () => {
      /**发送请求获取新的表格 */
      if (this.props.tableCode) {
        this.moustSetColumn()
      }
    })

  }

  componentDidMount() {
    const {
      columns,
    } = this.props;
    let formatColumns = columns.map(item => {
      return {
        ...item,
        checked: true
      }
    })
    this.setState(() => {
      return {
        tableColumns: formatColumns,
        indexColumns: formatColumns
      }
    }, () => {
      /**发送请求获取新的表格 */
      if (this.props.tableCode) {
        this.moustSetColumn()
      }
    })

  }

  /****勾选复选框 */
  checkBoxCol = (checkedValue, col) => {
    const { indexColumns, tableColumns } = this.state;
    let tableColumnsState;
    let indexColumnsState = indexColumns.map((item) => {
      if (col.dataIndex == item.dataIndex) {
        return {
          ...item,
          checked: !item.checked
        }
      } else {
        return {
          ...item
        }
      }
    })
    this.setState(() => {
      return {
        indexColumns: indexColumnsState
      }
    }, () => {
      if (col.checked) {
        /***去钩 */
        tableColumnsState = tableColumns.filter(item => item.dataIndex != col.dataIndex);
      } else {
        /***打上钩 */
        tableColumnsState = indexColumnsState.filter(item => item.checked);
      }
      this.setState(() => {
        return {
          tableColumns: tableColumnsState
        }
      })
    })
  }

  /***提交保存列 */
  submit = () => {
    Modal.confirm({
      title: '是否对表列进行保存?',
      // content: '修改的内容',
      onOk: () => {
        let params = this.setColumn();
        this.setTableCol(params);
      }
    })
  }

  /***设置发送后台请求的列的参数 */
  setColumn = () => {
    const { tableColumns, indexColumns } = this.state;
    let columnList = [];
    /**获取表格显示的列**/
    tableColumns.forEach((item, index) => {
      if (item.title != "序号" && item.title != "操作") {

        columnList.push({
          columnCode: item.dataIndex,
          display: 1,
          sort: index
        })

      }
    })


    /**获取索引列显示不打上勾的选项**/
    indexColumns.forEach((item, index) => {
      if (!item.checked) {
        columnList.push({
          columnCode: item.dataIndex,
          display: 0,
          sort: 0
        })
      }
    })
    let params = {
      tableCode: this.props.tableCode,
      columnList
    }
    return params
  }

  /**重置列* */
  resetColumn = () => {
    const { indexColumns } = this.state;
    let newIndexColumns = indexColumns.map(item => {
      return {
        ...item,
        checked: true
      }
    })
    this.setState(() => {
      return {
        indexColumns: newIndexColumns,
        tableColumns: newIndexColumns
      }
    })
  }

  /**设置列表索引展示* */
  setIndexColumnShow = (e) => {
    let clientIndexColunmX = e.clientX - 120;
    let clientIndexColunmY = e.clientY - 10;
    this.setState(() => {
      return {
        isIndexColunmShow: true,
        clientX: clientIndexColunmX,
        clientY: clientIndexColunmY
      }
    })
  }

  setShowBottom = () => {
    this.setState(() => {
      return {
        isShowBottom: true,
      }
    })
  }



  /***设置列发送给后台进行操作 */
  async setTableCol(params) {
    // let result= await $ajax(`/dfas-base-biz/usertable/config/save`, params, 'post');
    service.httpService({
      baseURL: "/dfas-base-biz",
      url: "/usertable/config/save",
      method: "post",
      data: params,
    }).then((res) => {
      const { winRspType, data, msg } = res;
      if (winRspType == "SUCC") {
        message.success("保存成功")
      } else {
        message.error(msg)
      }
    })

  }

  /***加载表格的时候获取当前表格的列 */
  async moustSetColumn(params) {
    const { indexColumns } = this.state;
    service.httpService({
      baseURL: service.dfasBaseBiz,
      url: `/usertable/config/get/${this.props.tableCode}`,
      method: "get"
    }).then((res) => {
      const { winRspType, data } = res;
      if (winRspType != "SUCC") {
        return
      }
      if (data == null) {
        return
      }
      /*获取与后台对比的值**/
      let newIndexColumn = indexColumns;
      for (let i = 0; i < indexColumns.length; i++) {
        let isTrue = false;
        for (let j = 0; j < data.columnList.length; j++) {
          //indexColumns[i]["dataIndex"]==data.columnList[j]["columnCode"]
          //判断是后台返回的数据是否为true,是true 进行隐藏
          if (indexColumns[i]["dataIndex"] == data.columnList[j]["columnCode"] && data.columnList[j].display == "1") {
            newIndexColumn[i]["checked"] = true;
            isTrue = true
          }
        }
        if (!isTrue) {
          newIndexColumn[i]["checked"] = false;
        } if (indexColumns[i]["title"] == "序号" || indexColumns[i]["title"] == "操作") {
          newIndexColumn[i]["checked"] = true;
        }
      }
      this.setState(() => {
        return {
          indexColumns: newIndexColumn,
          tableColumns: newIndexColumn.filter(item => item.checked)
        }
      })
    })
  }
}
/***设置props默认值 */
ConfigableTable.defaultProps = {
  isSelectColumn: true
}
export default ConfigableTable;
