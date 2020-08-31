/*
 * @Author: lzx
 * @Date: 2020-01-19 11:37:52
 * v 0.90
 */

/*
 * props 参数
 * children -必须 有且左右一个根节点
 * switch -非必须 是否有开关控制开启或关闭拖拽（默认 false ）
 */

import React from "react";
import {
  isObject,
  findFaceLevelNode,
  setStyle,
  domTreeHasClass,
} from "yss-biz";

const protoProps = {};

export default (props) => {
  let DragDom;
  let startPosition;
  let mouseStartPosition;
  let movePosition;
  let endPosition;
  let { notDragSelect, canDragSelect, dragAreaSelect } = props;

  const Child = isObject(props.children) ? props.children : {};

  // 上层是否存在某个class
  const getDomTreeHasClass = (dom, classNames) => {
    !Array.isArray(classNames) && (classNames = [classNames]);
    for (let i in classNames) {
      if (domTreeHasClass(dom, classNames[i])) return true;
    }
    return false;
  };

  // 创建遮罩设置初始位置
  const createMarsk = (e) => {
    let notDrag = false;
    let canDrag = false;
    if (!!notDragSelect) {
      notDrag = getDomTreeHasClass(e.target, notDragSelect);
    }

    canDrag = getDomTreeHasClass(e.target, canDragSelect);

    if (!notDrag) {
      if (canDrag || !canDragSelect) {
        const MaskDom = document.createElement("div");
        MaskDom.style =
          "position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999999;cursor:move";
        MaskDom.onmousemove = onDragDom;
        MaskDom.onmouseup = (e) => onDestruct(e);
        document.getElementsByTagName("body")[0].appendChild(MaskDom);

        DragDom = getDragDom(e);

        mouseStartPosition = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    }
  };
  // 获取拖拽元素
  const getDragDom = (e) => {
    let _DragDmo;
    _DragDmo = !!dragAreaSelect
      ? findFaceLevelNode(e.target, dragAreaSelect)
      : e.currentTarget;
    !dragAreaSelect && (_DragDmo = props.children);
    let x = _DragDmo.offsetLeft;
    let y = _DragDmo.offsetTop;
    setStyle(_DragDmo, {
      position: "fixed",
      left: x + "px",
      top: y + "px",
      margin: "0",
    });
    startPosition = { x, y };
    return _DragDmo;
  };

  // 拖拽
  const onDragDom = (e) => {
    setPosition(e);
  };

  // 销毁操作层
  const onDestruct = (e) => {
    e.currentTarget.parentNode.removeChild(e.currentTarget);
  };

  // 设置位置
  const setPosition = (e) => {
    movePosition = {
      x: e.clientX - mouseStartPosition.x,
      y: e.clientY - mouseStartPosition.y,
    };
    endPosition = {
      x: movePosition.x + startPosition.x,
      y: movePosition.y + startPosition.y,
    };
    DragDom.style.left = endPosition.x + "px";
    DragDom.style.top = endPosition.y + "px";
  };

  // 给虚拟dom添加方法
  const setDOMProps = () => {
    return {
      ...Child.props,
      onMouseDown(e) {
        createMarsk(e);
      },
    };
  };

  return React.cloneElement(Child, setDOMProps());
};
