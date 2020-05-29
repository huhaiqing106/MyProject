import React from 'react';
import { Table, message } from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BodyRow from './BodyRow';
import HeaderCell from './HeaderCell';
import propTypes from 'prop-types';
import './index.less';
import { copyText, isFunc } from 'yss-biz'

class ConfigableTable extends React.Component {
  static propTypes = {
    resizable: propTypes.bool,
    colDraggable: propTypes.bool,
    rowDraggable: propTypes.bool,
    onRowMove: propTypes.func,
    onResize: propTypes.func,
    onHeaderCellMove: propTypes.func,
    components: propTypes.object,
    selection: propTypes.object
  };
  components = {
    table: (this.props.components || {}).table,
    header: {
      cell: HeaderCell,
      ...(this.props.components || {}).header
    },
    body: {
      row: BodyRow,
      ...(this.props.components || {}).body
    }
  };
  handleSetRowProps = (record, index) => {
    const { onRow, onRowMove, rowDraggable } = this.props;
    const props = onRow && onRow(record, index);
    const onDoubleClick = e => {
      const target = e.target
      let values = target.innerHTML || target.value
      copyText(values, () => {
        message.success('复制成功')
      })
      isFunc(props?.onDoubleClick) && props.onDoubleClick(e)
      delete props?.onDoubleClick
    }
    const rowProps = { ...props, moveRow: onRowMove, index, rowDraggable, onDoubleClick };
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
    const newColumns = (columns || []).map(({ onHeaderCell, ...resProps }, index) => ({
      ...resProps,
      onHeaderCell: column => ({
        ...(onHeaderCell && onHeaderCell(column)),
        index,
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        width: column.width,
        onResize: typeof onResize === 'function' ? onResize.bind(null, index) : null,
        moveHeaderCell: onHeaderCellMove,
        resizable,
        colDraggable
      })
    }));
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="yss-configable-table tableInfo" ref={(ref) => this.divs = ref}>
          <Table
            className={'yss-configable-table-inner stripe-table' + (!!doubleHeader ? ' doubleHeader' : '') + (className ? ` ${className}` : '')}
            columns={newColumns}
            {...restProps}
            onRow={this.handleSetRowProps}
            components={this.components}
          />
        </div>
      </DndProvider>
    );
  }
}

export default ConfigableTable;
