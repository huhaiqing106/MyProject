/**
 * @lzx
 * 自带样式的 tabs 组件
 */
import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
const TabsParent = (props) => {
  const tabParent = Array.isArray(props.children)
    ? props.children
    : [props.children];
  return (
    <div
      className={`${
        props?.fullHeight ? "w-tabs-box full-height" : "w-tabs-box"
      } ${props?.noSpace ? "not-space" : ""} ${
        props?.style2 ? "w-tabs-style2" : props?.style3 ? "w-tabs-style3" : ""
      } ${props?.className || ""}`}
    >
      <Tabs {...props}>
        {tabParent.map((child, index) => {
          const childProps = child.props;
          return (
            <TabPane tab={childProps.tab} key={child.key || index}>
              {child}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
TabsParent.TabPane = (props) => (
  <div
    className={`${props.noPadding ? "" : "f-tab-space"} ${
      props?.haveBgColor ? "have-bgColor" : ""
    }`}
  >
    {props.children}
  </div>
);
export default TabsParent;
