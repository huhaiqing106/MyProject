import React from "react";
import { Table, message } from "antd";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BodyRow from "./BodyRow";
import HeaderCell from "./HeaderCell";
import EditComponent from "./EditComponent";
import propTypes from "prop-types";
import "./index.less";
import { copyText, isFunc, findFaceLevelNode, ConfirmModal } from "yss-biz";

class ConfigableTable extends React.Component {
  static propTypes = {
    resizable: propTypes.bool,
    colDraggable: propTypes.bool,
    rowDraggable: propTypes.bool,
    onRowMove: propTypes.func,
    onResize: propTypes.func,
    onHeaderCellMove: propTypes.func,
    components: propTypes.object,
    selection: propTypes.object,
  };

  #components = {
    table: (this.props.components || {}).table,
    header: {
      cell: HeaderCell,
      ...(this.props.components || {}).header,
    },
    body: {
      row: BodyRow,
      ...(this.props.components || {}).body,
    },
  };

  state = {
    editingKey: "",
    updatedRecords: [],
    rowDraggable: true,
  };

  setEditingKey = this.setEditingKey.bind(this);
  getEditingKey = this.getEditingKey.bind(this);
  getUpdatedRecords = this.getUpdatedRecords.bind(this);

  componentDidMount() {
    const { onRef, rowDraggable } = this.props;
    onRef && onRef(this);
    this.setState({ rowDraggable });
  }

  getUpdatedRecords() {
    return this.state.updatedRecords;
  }

  setEditingKey(key) {
    const { updatedRecords } = this.state;
    if (!key && updatedRecords.length > 0) {
      ConfirmModal({
        title: "取消编辑，未保存的数据将会丢失",
        onOk: () => {
          // 非编辑态时，行可拖动
          this.setState({
            editingKey: key,
            updatedRecords: [],
            rowDraggable: true,
          });
        },
      });
    } else {
      // 编辑态时，行不可拖动
      this.setState({
        editingKey: key,
        rowDraggable: false,
      });
    }
  }

  getEditingKey() {
    return this.state.editingKey;
  }

  #handleSetRowProps = (record, index) => {
    const { onRow, onRowMove } = this.props;
    const props = onRow && onRow(record, index);
    const onDoubleClick = (e) => {
      const target = e.target;
      let values =
        target.textContent ||
        target.value ||
        (findFaceLevelNode(target, "td") || {}).textContent;
      copyText(values, () => {
        message.success("复制成功");
      });
      isFunc(props?.onDoubleClick) && props.onDoubleClick(e);
      delete props?.onDoubleClick;
    };
    const rowProps = {
      ...props,
      moveRow: onRowMove,
      index,
      rowDraggable: this.state.rowDraggable,
      onDoubleClick,
    };
    return rowProps;
  };

  render() {
    const {
      columns,
      onRowMove,
      onHeaderCellMove,
      resizable,
      colDraggable,
      onResize,
      className,
      doubleHeader,
      ...restProps
    } = this.props;
    const newColumns = (columns || []).map((col, index) => {
      return {
        ...col,
        onHeaderCell: (column) => ({
          ...(col.onHeaderCell && col.onHeaderCell(column)),
          index,
          minWidth: column.minWidth,
          maxWidth: column.maxWidth,
          width: column.width,
          onResize:
            typeof onResize === "function" ? onResize.bind(null, index) : null,
          moveHeaderCell: onHeaderCellMove,
          resizable,
          colDraggable,
        }),
        render: (text, record, rowIndex) => {
          const { editType = "", render } = col;
          switch (true) {
            case !!editType:
              return (
                <EditComponent
                  editingKey={this.state.editingKey}
                  column={col}
                  defaultValue={text}
                  rowObject={{ rowIndex, record }}
                  setUpdatedRecords={(records) => {
                    this.setState({
                      updatedRecords: records,
                    });
                  }}
                  updatedRecords={this.state.updatedRecords}
                  parentProps={{ ...this.props }}
                />
              );
            case !editType && isFunc(render):
              return render(text, record, rowIndex);
            default:
              return text;
          }
        },
      };
    });
    return (
      <DndProvider backend={HTML5Backend}>
        <div
          className="yss-configable-table tableInfo"
          ref={(ref) => (this.divs = ref)}
        >
          <Table
            className={
              "yss-configable-table-inner stripe-table" +
              (!!doubleHeader ? " doubleHeader" : "") +
              (className ? ` ${className}` : "")
            }
            columns={newColumns}
            {...restProps}
            onRow={this.#handleSetRowProps}
            components={this.#components}
          />
        </div>
      </DndProvider>
    );
  }
}

export default ConfigableTable;
