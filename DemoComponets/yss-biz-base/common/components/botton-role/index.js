import React, { Component } from 'react';
import { Button, Tag } from 'antd';
import { icons } from 'yss-biz';
import { functionRolue } from '../../../utils/util/constant';

const ButtonGroup = Button.Group;
/****ButtonGroup权限按钮组件****/
export const withRoleBotton = (ButtonType, type = 'ButtonGroup') => {
  let renderComponent = (type, children) => {
    return type == 'ButtonGroup' ? (
      <ButtonGroup style={{ marginBottom: '6px' }}>{children}</ButtonGroup>
    ) : (
      <div style={{ marginBottom: '6px' }}>{children}</div>
    );
  };
  //按钮样式
  const style = { cursor: 'pointer', margin: type == 'ButtonGroup' ? '0 0' : '0 6px 0 0' };
  return renderComponent(
    type,
    ButtonType.map((item, index) => {
      return (
        <Button
          className="win-button"
          func-type={functionRolue[item?.name || '']}
          onClick={item.func ? item.func : null}
          key={item.name}
          disabled={item.disabled}
          type="primary"
          icon={item.icon ? item.icon : icons[item.name]}
          style={item?.style ? { ...style, ...item?.style } : style}
        >
          {item.name ? item.name : ''}
          {/***按钮右侧线* */}
          <span
            style={{
              position: 'relative',
              left: '17px',
              color: index == ButtonType.length - 1 ? 'transparent' : 'transparent',
            }}
          >
            |
          </span>
          {item.children && item.children.length ? (
            <div className="buttonChildren">
              {item.children.map((child) => {
                return (
                  <div onClick={child.func ? child.func : null} key={child.name} className="buttonChildrenItem">
                    {child.name}
                  </div>
                );
              })}
            </div>
          ) : (
            ''
          )}
        </Button>
      );
    })
  );
};

/****ButtonTableGroup权限按钮组件****/
export const withRoleTableBotton = (ButtonType) => {
  return (row) => {
    return ButtonType.map((item) => {
      let stateName = row.accountStatus || row.productEnableStatus || row.assetUnitStatus;
      let rowState = stateName === '1' ? '2' : '1';
      if (item.name == '状态' || item.name == '注销') {
        return stateName != '3' ? (
          <Button
            func-type={functionRolue[item?.name || '']}
            key={item.name}
            disabled={stateName == '3' ? true : false}
            size="small"
            type="link"
            onClick={(e) => {
              item.func({
                e,
                row,
                status: item.name == '注销' ? '3' : rowState,
                type: item.type,
              });
            }}
            key={item.name}
          >
            {item.name == '状态' ? <span>{stateName == '1' ? '停用' : '启动'}</span> : <span>注销</span>}
          </Button>
        ) : (
          ''
        );
      } else {
        return stateName != '3' ? (
          <Button
            func-type={functionRolue[item?.name || '']}
            size="small"
            type="link"
            disabled={stateName == '3' ? true : false}
            onClick={(e) => {
              item.func(e, row);
            }}
            key={item.name}
          >
            {<Icon type={item.icon ? item.icon : icons[item.name]} />}
            <span>{item.name}</span>
          </Button>
        ) : (
          ''
        );
      }
    });
  };
};

// // /****ButtonTableGroup权限按钮组件****/
// export const withRoleTableBotton = ButtonType => {
//   return row => {
//     return ButtonType.map(item => {
//       return <Button
//         func-type={functionRolue[item?.name || ""]}
//         key={item.name}
//         disabled={item.stateName == '1' ? true : false}
//         size="small"
//         type="link"
//         onClick={e => {
//           item.func({
//             e,
//             row
//           });
//         }}
//         key={item.name}
//       >
//         {item.name}
//       </Button>
//     })
//   }
// };

/****tab数组****/
export class WithTags extends Component {
  state = {
    active: '',
  };
  render() {
    return (
      <span
        onClick={(e) => {
          this.searchQuery(e, this.props?.func);
        }}
      >
        {this.props.TagType.map((item) => {
          return (
            <Tag
              closable={item.closable}
              color={item.color}
              className={this.state.active == item.name ? 'active' : ''}
              onClose={(e) => {
                item.closeFun && item.closeFun(e, item);
              }}
              data-option={JSON.stringify(item)}
              data-name={item.name}
            >
              {item.name}
            </Tag>
          );
        })}
      </span>
    );
  }

  searchQuery = (e, func) => {
    let searchDom = e.target;
    this.setState(() => {
      return {
        active: searchDom.getAttribute('data-name'),
      };
    });
    let option = JSON.parse(searchDom.getAttribute('data-option'));
    func(option);
  };
}
