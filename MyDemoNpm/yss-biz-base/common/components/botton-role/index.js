import React from 'react';
import { Button, Icon } from 'antd';
import { icons } from 'yss-biz';
import { functionRolue } from "../../../utils/util/constant"
const ButtonGroup = Button.Group;
/****ButtonGroup权限按钮组件****/
export const withRoleBotton = (ButtonType, _functionRolue = functionRolue) => {
  return (
    <ButtonGroup style={{ marginBottom: '6px' }}>
      {ButtonType.map((item, index) => {
        return (
          <Button
            func-type={_functionRolue[item?.name || ""]}
            onClick={item?.func ? item?.func : null}
            disabled={item.disabled}
            key={item?.name}
            style={{ cursor: 'pointer' }}
          >
            {/* {<Icon type={item.icon ? item.icon : icons[item.name]} />} */}
            {item.name}
            <span
              style={{
                position: 'relative',
                left: '17px',
                color: index == ButtonType.length - 1 ? 'transparent' : 'transparent'
              }}
            >
              |
            </span>
            {item.children && item.children.length ? (
              <div className="buttonChildren">
                {item.children.map(child => {
                  return (
                    <div
                      onClick={child.func ? child.func : null}
                      key={child.name}
                      className="buttonChildrenItem"
                    >
                      {child.name}
                    </div>
                  );
                })}
              </div>
            ) : (
                ''
              )}
          </Button>
        )
      })}
    </ButtonGroup>
  );
};

/****ButtonTableGroup权限按钮组件****/
export const withRoleTableBotton = (ButtonType, _functionRolue = functionRolue) => {
  return row => {
    return ButtonType.map(item => {
      let stateName = row.accountStatus || row.productEnableStatus || row.assetUnitStatus;
      let rowState = stateName === '1' ? '2' : '1';
      if (item.name === '状态' || item.name === '注销') {
        return (
          stateName != '3' ? (
            <Button
              func-type={_functionRolue[item?.name || ""]}
              key={item.name}
              disabled={stateName == '3' ? true : false}
              size="small"
              type="link"
              onClick={e => {
                item.func({
                  e,
                  row,
                  status: item.name == '注销' ? '3' : rowState,
                  type: item.type
                });
              }}
              key={item.name}
            >
              {item.name == '状态' ? (
                <span>{stateName == '1' ? '停用' : '启动'}</span>
              ) : (
                  <span>注销</span>
                )}
            </Button>
          ) : (
              ''
            )
        );
      } else {
        return (
          stateName != '3' ? (
            <Button
              func-type={_functionRolue[item?.name || ""]}
              size="small"
              type="link"
              disabled={item.disabled ? true : false}
              onClick={e => {
                item.func(e, row);
              }}
              key={item.name}
            >
              {/* {<Icon type={item.icon ? item.icon : icons[item.name]} />} */}
              <span>{item.name}</span>
            </Button>
          ) : (
              ''
            )
        )
      }
    });
  };
};
