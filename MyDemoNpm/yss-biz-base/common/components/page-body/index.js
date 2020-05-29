/**
 * @lzx
 * 基础的页面布局组件
 *  - PageSide 左侧栏
 *  - PageMain 页面主体
 *  - Container 带内边距的容器
 */
import React, { cloneElement } from 'react';
const PageBody = props => (
    <div className={
        !!props.className ?
            (props.haveBgColor ?
                `${props.className} page-body-have-bg-color layoutColumns` :
                `${props.className} layoutColumns`) :
            (props.haveBgColor ?
                'page-body-have-bg-color layoutColumns' : 'layoutColumns'
            )
    }>
        {props.children}
    </div>
)

PageBody.PageSide = props => (
    <div
        className={!!props.className ? props.className + ' side' : 'side'}
        style={{
            ...props.style,
            marginRight: props.noMargin ? 0 : '',
            width: props.half ? 'calc(50% - 5px)' : props.width,
            backgroundColor: props.noBgColor ? 'transparent' : !!props.bgColor ? props.bgColor : ''
        }} >
        {props.children}
    </div>
)
PageBody.PageMain = props => (
    <div className={!!props.className ? props.className + " main" : 'main'}>
        <div style={{
            height: props.height || '100%',
            backgroundColor: props.noBgColor ? 'transparent' : !!props.bgColor ? props.bgColor : ''
        }}>
            {props.children}
        </div>
    </div>
)

PageBody.Container = props => (
    <div className={!props.noPadding ? "f-tab-space" : ""} style={{ height: props.height ? 'calc(' + props.height + ')' : '100%' }}>
        {props.children}
    </div>
)

PageBody.Plate = props => (
    <div className='plate-box' style={{ height: `calc(${props.height}` }}>
        {!!props.title && (
            <div className='plate-title'>
                <div className='plate-title-inner'>
                    <span>{props.title}</span>
                </div>
            </div>
        )}
        <div className={!props.title ? 'plate-body not-title' : 'plate-body'}>
            <div className={!!props.footer ? 'have-footer' : 'not-footer'}>
                <div className='plate-body-inner'>
                    {props.children}
                </div>
            </div>
            {
                !!props.footer && (
                    <div className='plate-footer'>
                        {cloneElement(props.footer, { mainProps: (props.children || {}).props })}
                    </div>
                )
            }
        </div>
    </div>
)

export default PageBody