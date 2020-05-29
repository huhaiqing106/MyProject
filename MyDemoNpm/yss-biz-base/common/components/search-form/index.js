/*eslint-disable*/
/**
 * @lzx
 * 自带样式的查询表单组件（可设置两种不同的展开方式 具体使用可参考文档）
 *  - mapOption 遍历 数据转换成 options 的方法 
 */
import React, { PureComponent, Fragment } from 'react';
import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  Icon,
  TreeSelect,
  DatePicker,
  TimePicker,
  Cascader,
  Radio,
  Checkbox,
  Switch,
  Slider,
} from 'antd';

import Select from '../select-normal'
import SelectMapDics from '../select-map-dics'
import InputPart from '../input-part'
import InputRange from '../input-range'
import SelectRequest from '../select-request'
import TreeSelectRequest from '../tree-select-request'
import CheckboxGroup from '../checkbox-group'
import RadioGroup from '../radio-group'
import { isFunc } from 'yss-biz';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const itemList = {
  Input,
  InputNumber,
  InputPart,
  InputRange,
  Select,
  SelectMapDics,
  SelectRequest,
  TreeSelectRequest,
  TreeSelect,
  DatePicker,
  MonthPicker,
  RangePicker,
  WeekPicker,
  TimePicker,
  Cascader,
  Radio,
  Checkbox,
  RadioGroup,
  CheckboxGroup,
  Switch,
  Slider,
}
class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showToggle: this.props.formItem && this.props.formItem.length > (this.props.lineOf || 4) ? true : false,
      toggle: false
    };
    this.props.refs && this.props.refs(this);
    this.onSearch = this.onSearch.bind(this);
    this.onReset = this.onReset.bind(this);
    this.formRef = React.createRef()
    // moment.locale('zh-cn');
  }

  changeToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  getValues = itemName => {
    const { getFieldsValue } = this.formRef.current;
    if (typeof getFieldsValue === 'function') {
      return getFieldsValue(itemName);
    }
    return {}
  }

  onSearch(more) {
    let values
    values = this.getValues()
    more === 'more' && Object.keys(values).forEach((key, index) => {
      if (index < this.props.lineOf || 4) { 
        delete values[key]
       } else {
        return false
      }
    });
    isFunc(this.props.handleSearch) && this.props.handleSearch(values)
  };

  onReset() {
    const { resetFields } = this.formRef.current;
    let theBreak = true
    isFunc(this.props.handleBeforeReset) && (theBreak = this.props.handleBeforeReset())
    if (theBreak === false) return false
    typeof resetFields === 'function' && resetFields();
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
    const { toggle, showToggle } = this.state;
    let btnSize = this.props.btnSize || this.props.size
    this.firstData = [];
    this.otherData = [];
    if (this.props.formItem && this.props.formItem.length > this.props.lineOf || 4) {
      this.allData = this.props.formItem;
      this.firstData = this.allData.slice(0, this.props.lineOf || 4);
      this.otherData = this.allData.slice(this.props.lineOf || 4, this.allData.length);
    } else {
      this.firstData = this.props.formItem || [];
    }
    return (
      <Fragment>
        <Form ref={this.formRef} autoComplete="off" className="searchForm rowStyle" {...this.props.formProps}>
          <section className='f-clearfix'>
            <div className='f-left'>
              {
                this.firstData.map((item, index) => {
                  let unitSize = (item.props || {}).size || this.props.size
                  let itemSize = item.itemSize || this.props.itemSize || '200px'
                  let labelSize = item.labelSize || this.props.labelSize || '4em'
                  let marginRight = item.marginRight || this.props.marginRight || '30px'
                  if (item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
                    item.type = 'SelectMapDics'
                    item.props.code = item.props.getDics
                  }
                  if (item.type === 'Select' && !!item.props.config) {
                    item.type = 'SelectRequest'
                  }
                  if (item.type === 'TreeSelect' && !!item.props.config) {
                    item.type = 'TreeSelectRequest'
                  }
                  switch (item.type) {
                    case 'TreeSelec':
                    case 'Select':
                    case 'SelectMapDics':
                    case 'SelectRequest':
                    case 'TreeSelectRequest':
                      item.props.showSearch = true
                      break;
                    default:
                      break;
                  }
                  let ItemType = itemList[item.type]
                  let newProps = { ...item.props }
                  const rulesList = item.rules
                  const initialValue = (item.props || {}).initialValue
                  delete (item.props || {}).initialValue
                  return (
                    <div key={item.name} className='f-left' style={{ width: `calc(${itemSize} + ${labelSize})`, marginRight }}>
                      <ul className='f-clearfix'>
                        {item.label && (
                          <li className='f-left f-mr10 f-text-right' style={{ width: labelSize, marginTop: unitSize !== 'small' ? '5px' : '' }}>
                            <span className={(!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''} >{item.label}</span>
                          </li>
                        )}
                        <li className='f-block-hide'>
                          {
                            item.type !== 'InputRange' ? (
                              <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: item.itemMargin }} name={item.name} rules={item.rules} initialValue={initialValue}>
                                <ItemType {...item.props} size={unitSize} options={item.options} />
                              </Form.Item>
                            ) : <ItemType {...item} size={unitSize} />
                          }
                        </li>
                      </ul>
                    </div>
                  );
                })
              }
            </div>
            <div className="searchBox f-left">
              <ul className='f-flex-center' style={{ marginTop: btnSize === 'small' ? '3px' : '' }}>
                {showToggle &&
                  (<li
                    onClick={() => {
                      this.changeToggle();
                      (this.props.hasMorModal && !this.props.keepValues) && this.onReset()
                      isFunc(this.props.changeToggleAfter) && this.props.changeToggleAfter(!toggle)
                    }}
                  >
                    <div className='inputSearch'>
                      <span>更多查询</span>
                      {/* {!this.props.moreTypeModal && <Icon style={{ verticalAlign: '-2px' }} type={toggle ? 'caret-up' : 'caret-down'} className="getMoreIcon" />} */}
                    </div>

                  </li>
                  )}
                <li className='f-mr10'>
                  <Button size={btnSize} type="primary" onClick={async () => {
                    const { validateFields } = this.formRef.current;
                    await validateFields()
                      .then(values => {
                        this.onSearch()
                      })
                      .catch(errors => {
                      })
                  }}>查询</Button>
                </li>
                <li>
                  <Button size={btnSize} onClick={this.onReset}>重置</Button>
                </li>
              </ul>
            </div>
          </section>
          {!this.props.moreTypeModal ? (
            <section className='f-clearfix' style={{ display: toggle ? 'block' : 'none' }}>
              {this.nomalMoreForm()}
            </section>
          ) : (
              <Drawer
                className='darkStyle'
                title="更多查询"
                placement="right"
                closable={false}
                onClose={this.changeToggle}
                visible={toggle}
                width={400}
              >
                {this.modelMoreForm()}
              </Drawer>
            )}
        </Form>
      </Fragment>
    );
  }

  nomalMoreForm() {
    return (
      this.otherData.map((item, index) => {
        let nextLine = index % (!!this.props.lineOf ? this.props.lineOf : 4) === 0
        let unitSize = (item.props || {}).size || this.props.size
        let itemSize = item.itemSize || this.props.itemSize || '200px'
        let labelSize = item.labelSize || this.props.labelSize || '4em'
        if (item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
          item.type = 'SelectMapDics'
          item.props.code = item.props.getDics
        }
        if (item.type === 'Select' && !!item.props.config) {
          item.type = 'SelectRequest'
        }
        if (item.type === 'TreeSelect' && !!item.props.config) {
          item.type = 'TreeSelectRequest'
        }
        switch (item.type) {
          case 'TreeSelec':
          case 'Select':
          case 'SelectMapDics':
          case 'SelectRequest':
          case 'TreeSelectRequest':
            item.props.showSearch = true
            break;
          default:
            break;
        }
        let ItemType = itemList[item.type]
        let newProps = { ...item.props }
        const rulesList = item.rules
        const initialValue = (item.props || {}).initialValue
        delete (item.props || {}).initialValue
        return (
          <div key={item.name} className='f-left f-mr30' style={{ width: `calc(${labelSize} + ${itemSize})`, clear: nextLine ? 'both' : 'none' }}>
            <ul className='f-clearfix'>
              {item.label && (
                <li className='f-left f-mr10 f-text-right' style={{ width: labelSize, marginTop: unitSize !== 'small' ? '5px' : '' }}>
                  <span className={(!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''} >{item.label}</span>
                </li>
              )}
              <li className='f-block-hide'>
                {
                  item.type !== 'InputRange' ? (
                    <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: item.itemMargin }} name={item.name} rules={item.rules} initialValue={initialValue}>
                      <ItemType {...item.props} size={unitSize} options={item.options} />
                    </Form.Item>
                  ) : <ItemType {...item} size={unitSize} />
                }
              </li>
            </ul>

          </div>
        );
      })
    )
  }
  modelMoreForm() {
    let btnSize = this.props.btnSize || this.props.size
    return (
      <Form layout="horizontal" className='rowStyle' {...this.props.formProps}>
        <section className='f-clearfix'>
          {this.otherData.map((item, index) => {
            let unitSize = (item.props || {}).size || this.props.size
            let labelSize = item.labelSize || this.props.labelSize || '4em'
            if (item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
              item.type = 'SelectMapDics'
              item.props.code = item.props.getDics
            }
            if (item.type === 'Select' && !!item.props.config) {
              item.type = 'SelectRequest'
            }
            if (item.type === 'TreeSelect' && !!item.props.config) {
              item.type = 'TreeSelectRequest'
            }
            switch (item.type) {
              case 'TreeSelec':
              case 'Select':
              case 'SelectMapDics':
              case 'SelectRequest':
              case 'TreeSelectRequest':
                item.props.showSearch = true
                break;
              default:
                break;
            }
            let ItemType = itemList[item.type]
            let newProps = { ...item.props }
            const rulesList = item.rules
            const initialValue = (item.props || {}).initialValue
            delete (item.props || {}).initialValue
            return (
              <div key={item.name}>
                <ul className='f-clearfix'>
                  {item.label && (
                    <li className='f-left f-mr10 f-text-right' style={{ width: labelSize, marginTop: unitSize !== 'small' ? '5px' : '' }}>
                      <span className={(!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''} >{item.label}</span>
                    </li>
                  )}
                  <li className='f-block-hide'>
                    {
                      item.type !== 'InputRange' ? (
                        <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: item.itemMargin }} name={item.name} rules={item.rules} initialValue={initialValue}>
                          <ItemType {...item.props} size={unitSize} options={item.options} />
                        </Form.Item>
                      ) : <ItemType {...item} size={unitSize} />
                    }
                  </li>
                </ul>
              </div>
            );
          })}
          <div className="searchBox">
            <ul className='f-flex-center f-mt10'>
              <li className='f-mr10'>
                <Button type='primary' size={btnSize} onClick={async () => {
                  const { validateFields } = this.formRef.current;
                  await validateFields()
                    .then(values => {
                      this.onSearch('more')
                    })
                    .catch(errors => {
                    })
                }}>
                  查询
              </Button>
              </li>
              <li>
                <Button size={btnSize} onClick={this.onReset}>重置</Button>
              </li>
            </ul>
          </div>
        </section>
      </Form>
    )
  }
}

SearchForm.mapOption = (list, name, value) => {
  return (list || []).map((item, index) => {
    return {
      label: item[name],
      value: item[value],
    }
  })
}
export default SearchForm;