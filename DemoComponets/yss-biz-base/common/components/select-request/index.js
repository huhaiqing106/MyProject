/**
 * @lzx
 * 自动返回数据字典的下拉框
 * 接收参数 urls params type (type 对应的 urls中的地址)
 */
import React, { PureComponent } from "react";
import { $ajax, isObject, createGetGinseng, throttle, isFunc } from "yss-biz";
import { Select } from "antd";
// import { isFunc } from "yss-trade-base";
export default class SelectRequest extends PureComponent {
  constructor(props) {
    super(props);
    this.config = this.props.config || {};
    this.state = {
      optionsDatas: [],
    };
  }
  handleSearch = (value) => {
    let { type, onSearch } = this.props;
    const resName = (this.props || {}).resName || this.config[type].resName;
    if (!!resName) {
      let newProps = { ...this.props };
      newProps.params = newProps.params || {};
      newProps.params[resName] = value;
      if (this.config[type].isFirstLoad !== undefined) {
        this.config[type].isFirstLoad = value.trim() ? true : false;
      }
      throttle(() => {
        this.handleOptionList(newProps, true);
      }).bind(this)();
    }
    !!isFunc(onSearch) && onSearch(value);
  };
  handleOptionList = (props, isSeach = false) => {
    let { type, params = {}, isCache = false, isMask = false } = props;
    let {
      url,
      method = "get",
      join = false,
      option = {},
      link,
      isFirstLoad = true,
      customOptions,
    } = this.config[type];
    params = { ...this.config[type].params, ...params };
    const { label = "name", value = "code" } = option;
    // 是否第一次加载
    if (!isFirstLoad) return;

    // 拼接/参数
    if (!!join) {
      url = url + "/" + params;
      params = method;
    }
    // 地址栏后面拼接参数get请求
    if (link) {
      url =
        url.split("?").length > 1
          ? String.raw`${url}&${createGetGinseng(params).replace("?", "")}`
          : createGetGinseng(params);
      params = method;
    }

    $ajax(url, params, method, { mask: isMask }).then((res) => {
      let list = res.data || [];
      if (isObject(list)) {
        list = list.list || [];
      }
      
      // sessionStorage为空/不是搜索/查询数据长度大于0/缓存标识为true
      if (!sessionStorage.getItem(type) && !isSeach && list.length > 0 && isCache) {
        sessionStorage.setItem(type, JSON.stringify(list));
      }
      let optionsDatas = this.mapOption(list, label, value);
      Array.isArray(customOptions) &&
        (optionsDatas = [...customOptions, ...optionsDatas]);
      this.setState({
        optionsDatas,
      });
    });
  };
  componentWillMount() {
    const { type, isCache = false } = this.props;
    if (!!sessionStorage.getItem(type) && isCache) {
      this.initSessionStorage();
    } else {
      this.handleOptionList(this.props);
    }
  }

  initSessionStorage() {
    const { type } = this.props;
    const { option = {}, customOptions } = this.config[type];
    const { label = "name", value = "code" } = option;
    let dataStr = sessionStorage.getItem(type);
    dataStr = JSON.parse(dataStr);
    dataStr = Array.isArray(dataStr) ? dataStr : [];
    let optionsDatas = this.mapOption(dataStr, label, value);
    Array.isArray(customOptions) &&
      (optionsDatas = [...customOptions, ...optionsDatas]);
    this.setState({
      optionsDatas,
    });
  }
  // componentWillReceiveProps(nextProps) {
  //     const newProps = JSON.stringify(nextProps);
  //     const oldProps = JSON.stringify(this.props);
  //     if (newProps !== oldProps) {
  //         this.handleOptionList(nextProps)
  //     }
  // }
  mapOption = (list, name, value) => {
    let { type } = this.props;
    const { fullLabel = false } = this.config[type];
    return (list || []).map((item) => {
      let label = !!fullLabel ? item[value] + " " + item[name] : item[name];
      return {
        label,
        value: item[value],
        dataSource: item,
      };
    });
  };
  setNotFoundContent = () => {
    let { type } = this.props;
    const resName = (this.props || {}).resName || this.config[type].resName;
    return !!resName ? "按条件搜索数据" : "暂无数据";
  };
  render() {
    return (
      <Select
        onSearch={this.handleSearch}
        filterOption={(input, option) =>
          (option?.key || "")
            .toLowerCase()
            .indexOf((input || "").toLowerCase()) >= 0 ||
          (option?.props?.children || "")
            .toLowerCase()
            .indexOf((input || "").toLowerCase()) >= 0
        }
        notFoundContent={this.setNotFoundContent()}
        {...this.props}
        allowClear
      >
        {(this.state.optionsDatas || []).map((item) => (
          <Select.Option
            key={item.value}
            datas={item.dataSource}
            title={item.label}
          >
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
