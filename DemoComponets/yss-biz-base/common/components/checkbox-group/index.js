import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd';
import { $ajax } from 'yss-biz'
export default props => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        if (!!props.getDics) {
            $ajax('/dfas-base-biz/dics/listAllSub', { parentDicCode: props.getDics }, 'post').then(res => {
                setOptions(res?.data?.map(item => ({
                    value: item.dicCode,
                    label: item.dicExplain
                })) || [])
            })
        } else {
            setOptions(props.options || [])
        }
    }, [props.getDics])

    return (
        <Checkbox.Group {...props} options={options} style={{ ...props.style, width: '100%' }} />
    )
}

