/*eslint-disable*/
/**
 * @lzx
 * 自带样式的查询表单组件（可设置两种不同的展开方式 具体使用可参考文档）
 *  - mapOption 遍历 数据转换成 options 的方法
 */
import { Button, Drawer, Form } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { isFunc } from 'yss-biz';
import { FormValidItem } from 'win-trade-base';
import itemList from '../registry';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showToggle: this.props.formItem && this.props.formItem.length > (this.props.lineOf || 4) ? true : false,
      toggle: false,
    };
    this.props.refs && this.props.refs(this);
    this.onSearch = this.onSearch.bind(this);
    this.onReset = this.onReset.bind(this);
    // this.formRef = React.createRef() 4.x;
    this.formObject = this.props.form;
  }

  changeToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  getValues = (itemName) => {
    const { getFieldsValue } = this.formObject;
    if (typeof getFieldsValue === 'function') {
      return getFieldsValue(itemName);
    }
    return {};
  };

  onSearch(more) {
    const { validateFields } = this.formObject;
    validateFields((errors, values) => {
      if (!errors) {
        values = this.getValues();
        more === 'more' &&
          Object.keys(values).forEach((key, index) => {
            if (!this.props.moreBtnGetAll && (index < this.props.lineOf || 4)) {
              delete values[key];
            } else {
              return false;
            }
          });
        isFunc(this.props.handleSearch) && this.props.handleSearch(values);
      }
    });
  }

  onReset() {
    const { resetFields } = this.formObject;
    let theBreak = true;
    isFunc(this.props.handleBeforeReset) && (theBreak = this.props.handleBeforeReset());
    if (theBreak === false) return false;
    typeof resetFields === 'function' && resetFields();
  }

  render() {
    const { toggle, showToggle } = this.state;
    let btnSize = this.props.btnSize || this.props.size;
    this.firstData = [];
    this.otherData = [];
    if ((this.props.formItem && this.props.formItem.length > this.props.lineOf) || 4) {
      this.allData = this.props.formItem;
      this.firstData = this.allData.slice(0, this.props.lineOf || 4);
      this.otherData = this.allData.slice(this.props.lineOf || 4, this.allData.length);
    } else {
      this.firstData = this.props.formItem || [];
    }
    return (
      <Fragment>
        <Form /* ref={this.formRef} 4.x*/ autoComplete="off" className="searchForm rowStyle" {...this.props.formProps}>
          <section className="f-clearfix">
            <div className="f-left">
              {this.firstData.map((item, index) => {
                let itemSize = item.itemSize || this.props.itemSize || '200px';
                let labelSize = item.labelSize || this.props.labelSize || '4em';
                let marginRight = item.marginRight || this.props.marginRight || '30px';

                return (
                  <div
                    key={item.name}
                    className="f-left"
                    style={{
                      width: `calc(${itemSize} + ${labelSize})`,
                      marginRight,
                    }}
                  >
                    {this.createElement(item)}
                  </div>
                );
              })}
            </div>
            <div className="searchBox f-left">
              <ul className="f-flex-center" style={{ marginTop: btnSize === 'small' ? '3px' : '' }}>
                {showToggle && (
                  <li
                    onClick={() => {
                      this.changeToggle();
                      this.props.hasMorModal && !this.props.keepValues && this.onReset();
                      isFunc(this.props.changeToggleAfter) && this.props.changeToggleAfter(!toggle);
                    }}
                  >
                    <div className="inputSearch">
                      <span style={{ "marginRight": "14px" }}>更多查询</span>
                      {/* {!this.props.moreTypeModal && <Icon style={{ verticalAlign: '-2px' }} type={toggle ? 'caret-up' : 'caret-down'} className="getMoreIcon" />} */}
                    </div>
                  </li>
                )}
                <li className="f-mr10">
                  <Button
                    size={btnSize}
                    type="primary"
                    onClick={() => {
                      this.onSearch();
                    }}
                    style={{ "marginTop": "4px" }}
                  >
                    查询
                  </Button>
                </li>
                <li>
                  <Button size={btnSize} onClick={this.onReset} style={{ "marginTop": "4px" }}>
                    重置
                  </Button>
                </li>
              </ul>
            </div>
          </section>
          {!this.props.moreTypeModal ? (
            <section className="f-clearfix" style={{ display: toggle ? 'block' : 'none' }}>
              {this.nomalMoreForm()}
            </section>
          ) : (
              <Drawer
                className="darkStyle"
                title="更多查询"
                placement="right"
                closable={false}
                forceRender={true}
                onClose={this.changeToggle}
                visible={toggle}
                width={this.props?.modalWidth || 400}
              >
                {this.modelMoreForm()}
              </Drawer>
            )}
        </Form>
      </Fragment>
    );
  }

  nomalMoreForm() {
    return this.otherData.map((item, index) => {
      let nextLine = index % (!!this.props.lineOf ? this.props.lineOf : 4) === 0;
      let labelSize = item.labelSize || this.props.labelSize || '4em';
      let itemSize = item.itemSize || this.props.itemSize || '200px';

      return (
        <div
          key={item.name}
          className="f-left f-mr30"
          style={{
            width: `calc(${labelSize} + ${itemSize})`,
            clear: nextLine ? 'both' : 'none',
          }}
        >
          {this.createElement(item)}
        </div>
      );
    });
  }
  modelMoreForm() {
    let btnSize = this.props.btnSize || this.props.size;
    return (
      <section className="f-clearfix">
        {this.otherData.map((item, index) => {
          return <div key={item.name}>{this.createElement(item)}</div>;
        })}
        <div className="searchBox">
          <ul className="f-flex-center f-mt10">
            <li className="f-mr10">
              <Button
                type="primary"
                size={btnSize}
                onClick={() => {
                  this.onSearch('more');
                }}
              >
                查询
              </Button>
            </li>
            <li>
              <Button size={btnSize} onClick={this.onReset}>
                重置
              </Button>
            </li>
          </ul>
        </div>
      </section>
    );
  }

  createElement(item) {
    const {
      form: { getFieldDecorator },
    } = this.props;

    let unitSize = (item.props || {}).size || this.props.size;
    let labelSize = item.labelSize || this.props.labelSize || '4em';
    if (item.type === 'Select' && !!item.props.getDics) {
      item.type = 'SelectMapDics';
      item.props.code = item.props.getDics;
    }
    if (item.type === 'Select' && !!item.props.config) {
      item.type = 'SelectRequest';
    }
    if (item.type === 'TreeSelect' && !!item.props.config) {
      item.type = 'TreeSelectRequest';
    }
    switch (item.type) {
      case 'TreeSelec':
      case 'Select':
      case 'SelectMapDics':
      case 'SelectRequest':
      case 'TreeSelectRequest':
        item.props.showSearch = true;
        break;
      default:
        break;
    }
    let ItemType = itemList[item.type];
    const rulesList = item.rules;
    const initialValue = (item.props || {}).initialValue;
    delete (item.props || {}).initialValue;
    return (
      <ul className="f-clearfix">
        {item.label && (
          <li
            className="f-left f-mr10 f-text-right"
            style={{
              width: labelSize,
              marginTop: unitSize !== 'small' ? '5px' : '',
            }}
          >
            <span className={((!!rulesList && rulesList[0]) || {}).required ? 'ant-form-item-required' : ''} style={{ "display": "inline-block", "verticalAlign": "middle" }}>{item.label}</span>
          </li>
        )}
        <li className="f-block-hide">
          {item.type !== 'InputRange' ? (
            <FormValidItem wrapperCol={{ span: 24 }} style={{ marginBottom: item.itemMargin }}>
              {/* 4.x <Form.Item
                wrapperCol={{ span: 24 }}
                style={{ marginBottom: item.itemMargin }}
                name={item.name}
                rules={item.rules}
                initialValue={initialValue}
              > */}
              {getFieldDecorator(item.name, { rules: item.rules, initialValue: initialValue })(
                <ItemType {...item.props} size={unitSize} options={item.options} />
              )}
              {/* </Form.Item> */}
            </FormValidItem>
          ) : (
              <ItemType {...item} size={unitSize} />
            )}
        </li>
      </ul>
    );
  }
}

SearchForm.mapOption = (list, name, value) => {
  return (list || []).map((item) => {
    return {
      label: item[name],
      value: item[value],
      dataSource: item,
    };
  });
};
export default Form.create()(SearchForm);
