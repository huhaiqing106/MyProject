import React, { Component } from "react";
import { Tree, Input, Row } from "antd";
const { Search } = Input;
const { TreeNode } = Tree;

/**获取所有节点的方法**/
const getAllNodes = gData => {
  const dataList = [];
  const generateList = data => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      dataList.push({ ...node, children: [] });
      if (node.children && node.children.length) {
        generateList(node.children);
      }
    }
  };
  generateList(gData);
  return dataList;
};

/**获取所有父节点的key**/
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return key !== parentKey ? parentKey : null;
};

class Trees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      expandedKeys: [],
      autoExpandParent: true
    };
  }
  componentDidMount() {
    const { treeData } = this.props;
    this.initTreeFn(treeData);
  }

  initTreeFn = treeData => {
    const fn = async () => {
      const { selectedKeys, isLeaf } = this.props;
      if (!(selectedKeys && selectedKeys.length)) {
        let dataList = getAllNodes(treeData);
        let isLeafNodes = dataList.filter(
          item =>
            item[isLeaf].toString() === "true" ||
            item[isLeaf].toString() === "1"
        );
        let initNode = null;
        let initExpandedKeys = [];
        if (isLeafNodes && isLeafNodes.length) {
          initNode = isLeafNodes[0];
        }
        if (initNode) {
          initExpandedKeys = dataList
            .map(item => {
              if (item.key === initNode.key) {
                return getParentKey(item.key, treeData);
              }
              return null;
            })
            .filter((item, i, self) => item && self.indexOf(item) === i);
          this.setState(
            {
              expandedKeys: [...initExpandedKeys, initNode.key]
            },
            () => {
              this.onSelect([initNode.key]);
            }
          );
        }
      }
    };
    fn();
  };

  searchValueChange = value => {
    // 清空条件回到初始效果
    if(!value.trim()) {
      this.setState({
        expandedKeys: [],
        searchValue: "",
        autoExpandParent: false
      });
      return
    };

    const { treeData } = this.props;
    let dataList = getAllNodes(treeData);
    const expandedKeys = dataList
      .map(item => {
        if (this.toCompare(item.title, value) > -1) {
          return getParentKey(item.key, treeData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true
    });
  };

  toCompare = (val1, val2) => {
    if (val1 && val2) {
      val1 = val1.toLocaleLowerCase();
      val2 = val2.toLocaleLowerCase();
      return val1.indexOf(val2);
    }
    return -1;
  }

  /**点击左侧树菜单文字展开子节点 */
  clickTree = event => {
    // 找到当前节点的父节点下的第一个字节点，模拟点击触发展开
    let iconRemark = event.currentTarget.parentNode.firstChild;
    let classes = iconRemark.getAttribute("class");
    if (
      classes.indexOf("ant-tree-switcher_close") > -1 ||
      classes.indexOf("ant-tree-switcher_open") > -1
    ) {
      iconRemark.click();
    }
  };

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys: expandedKeys,
      autoExpandParent: false
    });
  };

  onSelect = selectedKeys => {
    const { treeData } = this.props;
    if (selectedKeys && selectedKeys.length) {
      let dataList = getAllNodes(treeData);
      let selectNode = dataList.filter((item) => item.key === selectedKeys[0]);
      if (this.props.treeSelect && typeof this.props.treeSelect === 'function') {
        this.props.treeSelect(selectNode[0]);
      }
    }
  };

  render() {
    const { searchValue, autoExpandParent, expandedKeys } = this.state;
    // style只能作用域div层
    const { treeData, selectedKeys, searchPlaceholder, style, ...otherProps} = this.props;
    const mapTree = data =>
      data.map(item => {
        let title = (
          <span>{item.title}</span>
        );
        // 如果是空字符indexOf会是0
        const index = this.toCompare(item.title, searchValue);
        if(index > -1){
          const beforeStr = item.title.substr(0, index);
          const middleStr = item.title.substr(index, searchValue.length);
          const afterStr = item.title.substr(index + searchValue.length);
          title = (
            <span>
              {beforeStr}
              <span style={{ color: "#f50" }}>{middleStr}</span>
              {afterStr}
            </span>
          );
        }
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={title}>
              {mapTree(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={title} />;
      });
    return (
      <div className="custom-tree-area" style={{ height: "100%", overflowY: "auto", padding: "8px 5px", ...style }}>
        <Row>
          <Search
            placeholder={searchPlaceholder || "请输入查询"}
            allowClear
            onChange={e => this.searchValueChange(e.target.value)}
            className="searchIcon"
          />
        </Row>
        <Tree
          {...otherProps}
          autoExpandParent={autoExpandParent}
          expandedKeys={expandedKeys}
          selectedKeys={selectedKeys}
          onSelect={this.onSelect}
          onExpand={this.onExpand}
          treeData={treeData}
          onClick={this.clickTree}
          className="custom-tree"
        >
          {mapTree(treeData)}
        </Tree>
      </div>
    );
  }
}

export default Trees;
