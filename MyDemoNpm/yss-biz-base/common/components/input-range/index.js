import React, { PureComponent } from 'react'
import { InputPart } from 'yss-biz'
import { Form, InputNumber, Select } from 'antd'
export default class InputRange extends PureComponent {
    render() {
        const { before, after } = this.props
        return (
            <ul className='f-clearfix' style={{ height: '100%' }}>
                <li className='f-left' style={{ width: 'calc(50% - 12px)' }}>
                    <ul className='f-clearfix' style={{ height: '100%' }}>
                        {
                            before?.options?.length > 0 && (
                                <li className='f-right' style={{ width: before?.lastWidth || '2em', marginLeft: '3px' }}>
                                    <Form.Item wrapperCol={{ span: 24 }} name={before.lastName} style={{ marginBottom: 0 }} rules={before.lastRules} >
                                        <Select options={before?.options} {...before?.lastProps} />
                                    </Form.Item>
                                </li>
                            )
                        }
                        <li className='f-block-hide'>
                            <Form.Item wrapperCol={{ span: 24 }} name={before.name} style={{ marginBottom: 0 }} rules={before.rules}>
                                {
                                    before.type === 'normal' ?
                                        <InputNumber {...before.props} /> :
                                        <InputPart type='InputNumber' {...before.props} />
                                }
                            </Form.Item>
                        </li>
                    </ul>
                </li>
                <li className='f-left' style={{ width: '24px', heighe: '100%', textAlign: 'center' }}>~</li>
                <li className='f-left' style={{ width: 'calc(50% - 12px)' }}>
                    <ul className='f-clearfix' style={{ height: '100%' }}>
                        {
                            after?.options?.length > 0 && (
                                <li className='f-right' style={{ width: after?.lastWidth || '2em', marginLeft: '3px' }}>
                                    <Form.Item wrapperCol={{ span: 24 }} name={after.lastName} style={{ marginBottom: 0 }} rules={after.lastRules} >
                                        <Select options={after?.options} {...after?.lastProps} />
                                    </Form.Item>
                                </li>
                            )
                        }
                        <li className='f-block-hide'>
                            <Form.Item wrapperCol={{ span: 24 }} name={after.name} style={{ marginBottom: 0 }} rules={after.rules} >
                                {
                                    after.type === 'normal' ?
                                        <InputNumber {...after.props} /> :
                                        <InputPart type='InputNumber' {...after.props} />
                                }
                            </Form.Item>
                        </li>
                    </ul>
                </li>
            </ul >
        )
    }
}