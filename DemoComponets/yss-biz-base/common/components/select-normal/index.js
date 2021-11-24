import { Select } from 'antd';
import React, { PureComponent } from 'react';
export default class SelectNorm extends PureComponent {
  render() {
    const resProps = {};
    const { options } = this.props;
    Object.keys(this.props).forEach((key) => {
      key !== 'options' && (resProps[key] = this.props[key]);
    });
    return (
      <Select
        filterOption={(input, option) =>
          (option?.key || '').toLowerCase().indexOf((input || '').toLowerCase()) >= 0 ||
          (option?.props?.children || '').toLowerCase().indexOf((input || '').toLowerCase()) >= 0
        }
        {...resProps}
        allowClearn
      >
        {(options || []).map((item) => (
          <Select.Option key={item.value} datas={item.dataSource} title={item.label}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
