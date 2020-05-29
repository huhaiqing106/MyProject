import React from 'react'
import { Checkbox } from 'antd';
export default props => {
    return (
        <Checkbox.Group {...props} style={{ width: '100%' }} />
    )
}

