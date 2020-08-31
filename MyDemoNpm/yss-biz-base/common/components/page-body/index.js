/**
 * @lzx
 * 基础的页面布局组件
 *  - PageSide 左侧栏
 *  - PageMain 页面主体
 *  - Container 带内边距的容器
 */
import React, { PureComponent,Fragment ,cloneElement } from 'react';
import {Icon} from "antd";
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
        className={`${!!props.className ? props.className + ' side' : 'side'} ${props.keepBgColor ? 'keep-bg-color' : ''}`}
        style={{
            ...props.style,
            marginRight: props.noMargin ? 0 : '',
            width: props.half ? 'calc(50% - 5px)' : props.width,
            backgroundColor: props.noBgColor ? 'transparent' : !!props.bgColor ? props.bgColor : ''
        }} >
        {props.children}
    </div>
)
export class PageSide extends PureComponent {
    state = {
      isSHow: true,
    };
    render() {
      const { children } = this.props;
      const style=()=>{
        return {
          transition:"all .5s",
          [this.props.type]:this.state.isSHow?this.props.length:"0px"
        }
      }
      return (
        <Fragment>
        <div className={this.props.className + ' side'} style={style()}>
            {this.state.isSHow?children:""}
            <span className={this.props.type=="width"?"iconRight":"iconBottom"} onClick={()=>{   
              this.setState(()=>{
                return {
                  isSHow:!this.state.isSHow
                }
              },()=>{
              })
                }}><Icon type={this.props.type=="width"?"caret-right":"caret-down"} /> </span>
        </div>
        </Fragment>
      );
    }
    toggleMore = () => {
      this.setState({
        isSHow: !this.state.isSHow,
      });
    };
  }
PageBody.PageMain = props => (
    <div className={!!props.className ? props.className + " main" : 'main'}>
        <div style={{
            ...props.style,
            height: props.height || '100%',
            backgroundColor: props.noBgColor ? 'transparent' : !!props.bgColor ? props.bgColor : '',
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