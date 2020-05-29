import React, { PureComponent } from 'react'
import { InputPart, FormValidItem } from 'yss-biz'
import { Form } from 'antd'
export default class InputRange extends PureComponent {
    render() {
        const { before, after } = this.props
        return (
            <ul className='f-clearfix' style={{ height: '100%' }}>
                <li className='f-left' style={{ width: 'calc(50% - 12px)' }}>
                    <Form.Item wrapperCol={{ span: 24 }} name={before.name} style={{ marginBottom: 0 }} rules={before.rules}>
                        <InputPart type='InputNumber' {...before.props} />
                    </Form.Item>
                </li>
                <li className='f-left' style={{ width: '24px', heighe: '100%', textAlign: 'center' }}>~</li>
                <li className='f-left' style={{ width: 'calc(50% - 12px)' }}>
                    <Form.Item wrapperCol={{ span: 24 }} name={after.name} style={{ marginBottom: 0 }} rules={after.rules} >
                        <InputPart type='InputNumber' {...after.props} />
                    </Form.Item>
                </li>
            </ul>
        )
    }
}