import React from 'react'
import { Tooltip, Tag } from 'antd'

export const omittedToolTip = (omittedValues = []) => {
    return (
        <Tooltip
            title={
                omittedValues.map(item => <div>{item.label}</div>)
            }
            placement="right"
        >
            + {omittedValues.length} ...
        </Tooltip>
    )
}