/**
 * @ description: 获取page页面的model层state与mutations
 * @ param (Components) 组件
 * @ param (file) page文件夹下的需要获取的文件目录
 * @ author: win
 * @ update: 2019/12/11
 */

import React, { Component } from "react";
import { connect } from "@lugia/lugiax";
import { fromJS, is } from "immutable";

export default (Components, file) => {
  class RoleControl extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
      const propsMap = fromJS(this.props);
      const nextPropsMap = fromJS(nextProps);
      return !is(propsMap, nextPropsMap);
    }

    render() {
      let queryArray = location.hash?.split("?")[1]?.split("&") || [];
      queryArray.forEach((item) => {
        let queryItem = item.split("=");
        localStorage.setItem(queryItem[0], queryItem[1]);
      });
      let props = this.props || {};
      return <Components {...props} />;
    }
  }

  return connect(
    require(`../../src/page/${file}/models`).default,
    (state) => {
      let statejs = state.toJS();
      return statejs;
    },
    (mutations) => mutations
  )(RoleControl);
};
