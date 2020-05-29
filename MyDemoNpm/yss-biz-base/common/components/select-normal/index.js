
/**
 * @lzx
 * 普通的 Select 组件
 * 主要配合 NormeForm 和 SearchForm 使用
 */
import { merge } from 'yss-biz'
import { Select } from 'antd'
import React, { PureComponent } from 'react'
export default class SelectNorm extends PureComponent {
    render() {
        const resProps = {}
        const { options } = this.props
        Object.keys(this.props).forEach(key => {
            key !== 'options' && (resProps[key] = this.props[key])
        })
        return (
            <Select
                onSearch={this.handleSearch}
                filterOption={(input, option) =>
                    option.key.toLowerCase().indexOf(input.toLowerCase()) > 0 ||
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                {...resProps}
                allowClear
            >
                {
                    (options || []).map(item => (
                        <Select.Option key={item.value} datas={item.dataSource} title={item.label}>
                            {item.label}
                        </Select.Option>
                    ))
                }
            </Select>
        )
    }
}