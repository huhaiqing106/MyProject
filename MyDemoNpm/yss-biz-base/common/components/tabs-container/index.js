/**
 * @lzx
 * 自带样式的 tabs 组件
 */
import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs
const TabsParent = props => {
  const tabParent = Array.isArray(props.children) ? props.children : [props.children]
  return (
    <div className={props.fullHeight ? 'w-tabs-box full-height' : 'w-tabs-box'}>
      <Tabs {...props} className={props.haveBgColor ? 'have-bgColor' : ''} >
        {
          tabParent.map((child, index) => {
            const childProps = child.props
            return (
              <TabPane tab={childProps.tab} key={child.key || index} >{child}</TabPane>
            )
          })
        }
      </Tabs>
    </div>

  )
}
TabsParent.TabPane = props => <div className={props.noPadding ? "" : "f-tab-space"}>{props.children}</div>
export default TabsParent 