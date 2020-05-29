/**
 * @lzx
 * 自动返回数据字典的下拉框
 * 接收参数 urls params type (type 对应的 urls中的地址)
 */
import React, { PureComponent } from 'react'
import { $ajax, isObject } from 'yss-biz'
import { Select } from 'antd'
export default class SelectRequest extends PureComponent {
    constructor(props) {
        super(props)
        this.config = this.props.config || {}
        this.state = {
            optionsDatas: []
        }
    }
    handleSearch = value => {
        let { type } = this.props
        const resName = (this.props || {}).resName || this.config[type].resName
        if (!!resName) {
            let newProps = { ...this.props }
            newProps.params = newProps.params || {}
            newProps.params[resName] = value
            this.handleOptionList(newProps)
        }
    }
    handleOptionList = props => {
        let { type, params = {} } = props
        let { url, method = 'get', join = false, option = {} } = this.config[type]
        params = { ...this.config[type].params, ...params }
        const { label = 'name', value = 'code' } = option
        if (!!join) {
            url = url + "/" + params;
            params = method
        }
        $ajax(url, params, method).then(res => {
            let list = res.data || []
            if (isObject(list)) {
                list = list.list || []
            }
            this.setState({
                optionsDatas: this.mapOption(list, label, value)
            })
        })
    }
    componentWillMount() {
        this.handleOptionList(this.props)
    }
    // componentWillReceiveProps(nextProps) {
    //     const newProps = JSON.stringify(nextProps);
    //     const oldProps = JSON.stringify(this.props);
    //     if (newProps !== oldProps) {
    //         this.handleOptionList(nextProps)
    //     }
    // }
    mapOption = (list, name, value) => {
        let { type } = this.props
        const { fullLabel = false } = this.config[type]
        return (list || []).map(item => {
            let label = !!fullLabel ? item[value] + ' ' + item[name] : item[name]
            return {
                label,
                value: item[value],
                dataSource: item
            }
        })
    }
    setNotFoundContent = () => {
        let { type } = this.props
        const resName = (this.props || {}).resName || this.config[type].resName
        return !!resName ? '按条件搜索数据' : '暂无数据'
    }
    render() {
        
        return (
            <Select
                onSearch={this.handleSearch}
                filterOption={(input, option) =>
                    option.key.toLowerCase().indexOf(input.toLowerCase()) > 0 ||
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                notFoundContent={this.setNotFoundContent()}
                {...this.props}
                allowClear
            >
                {
                    (this.state.optionsDatas || []).map(item => (
                        <Select.Option key={item.value} datas={item.dataSource} title={item.label}>
                            {item.label}
                        </Select.Option>
                    ))
                }
            </Select>
        )
    }
}