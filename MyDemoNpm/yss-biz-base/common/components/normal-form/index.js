/*eslint-disable*/
/**
 * @lzx
 * 自带样式的表单组件（可自动 换行 插入分割线 等 具体使用可参考文档）
 *  - mapOption 遍历 数据转换成 options 的方法 
 */
import React, { PureComponent, Fragment, useRef } from 'react';
import { FormValidItem } from 'yss-biz'
import {
  Form,
  Input,
  TreeSelect,
  Cascader,
  InputNumber,
  DatePicker,
  TimePicker,
  Rate,
  Radio,
  Checkbox,
  Switch,
  Slider
} from 'antd';
import Select from '../select-normal'
import SelectMapDics from '../select-map-dics'
import SelectRequest from '../select-request'
import TreeSelectRequest from '../tree-select-request'
import InputPart from '../input-part'
import InputRange from '../input-range'
import CheckboxGroup from '../checkbox-group'
import RadioGroup from '../radio-group'

const { TextArea } = Input
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const itemList = {
  Input,
  InputPart,
  InputNumber,
  InputRange,
  SelectMapDics,
  Select,
  SelectRequest,
  TreeSelect,
  TreeSelectRequest,
  Cascader,
  TextArea,
  DatePicker,
  MonthPicker,
  RangePicker,
  WeekPicker,
  TimePicker,
  Rate,
  Radio,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Switch,
  Slider
}

class NormForm extends PureComponent {
  constructor(props) {
    super(props);
    this.props.refs && this.props.refs(this);
    this.getValues = this.getValues.bind(this);
    this.onReset = this.onReset.bind(this);
    this.dis = 0;
    this.formRef = React.createRef()
  }
  getValues = () => {
    const { getFieldsValue } = this.formRef.current;
    if (typeof getFieldsValue === 'function') {
      let values = getFieldsValue();
      return values
    }
  };
  getError = name => {
    const { getFieldError } = this.formRef.current || {};
    return typeof onFinishFailed === 'function' ? onFinishFailed({ name }) : ''
  }
  setValues = (values = {}, fn) => {
    let newValues
    const { setFieldsValue } = this.formRef.current;
    if (typeof setFieldsValue === 'function') {
      newValues = this.getValues()
      Object.keys(newValues).forEach(key => {
        values[key] !== undefined && (newValues[key] = values[key])
      })
    }
    (typeof setFieldsValue === 'function' && typeof newValues === 'object') && setFieldsValue({ ...newValues });
    typeof fn === 'function' && fn.call(this, this.getValues())
  }
  onReset = () => {
    const { resetFields } = this.formRef.current;
    typeof resetFields === 'function' && resetFields();
  };
  onValidate = async (done = () => { }, error = () => { }) => {
    const { validateFields } = this.formRef.current;
    await validateFields()
      .then(values => done(values))
      .catch(errors => error(errors))
  }
  render() {
    const lineOf = this.props.lineOf
    const allData = this.props.formItem || [];
    this.dis = 0
    return (
      <Form ref={this.formRef} autoComplete="off" className="searchForm rowStyle" {...this.props.formProps}>
        <section className='f-clearfix'>
          {
            allData.map((item, index) => {
              if (!!item.props && item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
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
              let ItemType = itemList[item.type];
              (item.type === 'Line' || !!item.hidden) && (this.dis = -index - 1)
              let newIndex = index + this.dis
              let itemSize = item.itemSize || this.props.itemSize || '200px'
              let labelSize = item.labelSize || this.props.labelSize || '4em'
              let nextLine = !isNaN(lineOf) ? (newIndex % lineOf === 0 || newIndex === 0) : false
              let marginRight = item.marginRight || this.props.marginRight || '30px'
              let noMargin = !isNaN(lineOf) ? (newIndex + 1) % lineOf === 0 : false
              const rulesList = item.rules
              const initialValue = (item.props || {}).initialValue
              delete (item.props || {}).initialValue
              let labelStyle = item.labelStyle || this.props.labelStyle || {}
              return (
                <Fragment key={item.name || index}>
                  {(item.type !== 'Line' && !item.destruction) && (
                    <div className='f-left' style={{
                      display: item.hidden ? 'none' : '',
                      width: `calc(${itemSize} + ${labelSize})`,
                      clear: nextLine ? 'both' : '',
                      marginRight: noMargin ? '' : marginRight,
                      marginBottom: item.itemMargin || '8px'
                    }}>
                      <ul className='f-clearfix'>
                        <li className='f-left f-mr10 f-text-right' style={{ width: labelSize, marginTop: '5px', height: '21px' }}>
                          <span
                            className={(!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''}
                            style={{ display: 'inline-block', lineHeight: 1.1, ...labelStyle }}
                          >
                            {item.label}
                          </span>
                        </li>
                        <li className='f-block-hide'>
                          {(item.type !== 'InputRange' && !item.unBind) ?
                            <Form.Item
                              style={{ marginBottom: 0 }}
                              name={item.name}
                              rules={item.rules}
                              noStyle={item.noStyle}
                              initialValue={initialValue}
                            >
                              <ItemType {...item.props} options={item.options} style={{
                                border: (item.props || {}).readOnly ? 'none' : '',
                                backgroundColor: (item.props || {}).readOnly ? 'transparent' : '',
                                ...(item.props || {}).style
                              }} />
                            </Form.Item>
                            :
                            (<ItemType {...item} {...item.props} style={{
                              border: (item.props || {}).readOnly ? 'none' : '',
                              boxShadow: (item.props || {}).readOnly ? 'none' : '',
                              backgroundColor: (item.props || {}).readOnly ? 'transparent' : '',
                              ...(item.props || {}).style
                            }} />)
                          }
                        </li>
                      </ul>
                      <div style={{
                        marginLeft: `calc(${item.labelSize || this.props.labelSize || '4em'} + 10px)`,
                        position: "relative"
                      }}>
                        {item.render || this.props.render}
                      </div>
                    </div>
                  )}
                  {
                    item.type === 'Line' && (
                      <div
                        className={!item.hidden ? 'u-hr' : ''}
                        style={{ float: 'left', width: item.width || '100%', clear: 'both', borderBottomWidth: item.height, marginBottom: !item.hidden ? (item.itemMargin || '8px') : '' }}>

                        {item.render || this.props.render}
                      </div>
                    )
                  }
                </Fragment>
              )
            })
          }
        </section>
      </Form>
    );
  }
}

NormForm.mapOption = (list, name, value) => {
  if (Array.isArray(list)) {
    return (list || []).map(item => {
      return {
        label: item[name],
        value: item[value]
      }
    })
  }
}

// 表单项单位
NormForm.Unit = props => {
  const getVal = child => {
    if (typeof child !== 'string') {
      if (Array.isArray(child)) {
        let children = child.map(item => {
          return getVal(item.props.children)
        })
        return children.join('>-<').replace(/\>\-\</g, '')
      }
      return getVal(child.props.children)
    } else {
      return child
    }
  }
  const value = getVal(props.children)
  let len = !!props.children ? value.length : 0
  let offset = props.offset || '0em'
  return (
    <div className='f-relative'>
      <div className='f-absolute' style={{
        top: '-27px',
        right: `calc(-6px - ${len}em - ${offset})` || '220px',
        whiteSpace: 'nowrap'
      }}>{props.children}</div>
    </div>
  )
}

// 表单项居下显示信息
NormForm.BText = props => {
  const currentRef = useRef()
  let innerClassName = 'form-item-bottom-message-inner f-relative' + (props.disabled ? ' is-disabled' : '')
  return (
    <div
      className={'form-item-bottom-message' + (props.type === 'btn' ? ' is-btn' : '')}
      style={{
        marginTop: '2px',
        whiteSpace: 'nowrap'
      }}
    >
      <div className={innerClassName}>
        <div className='form-item-bottom-message-mask'></div>
        {props.children}
      </div>
    </div>
  )
}

// 表单项居下下显示的按钮

export default NormForm;