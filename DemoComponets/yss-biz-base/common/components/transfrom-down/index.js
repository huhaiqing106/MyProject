/**
 * 关联信息组件
 */
import React, { PureComponent, Fragment } from 'react';
import { Icon } from 'antd';
import { CSSTransition } from 'react-transition-group';
import './styles.less';
import { isFunc } from 'yss-biz'
class TransfromDown extends PureComponent {
  state = {
    isSHow: true
  };
  render() {
    const { children,unfold=false } = this.props;
    const className = unfold?"fade-layout-unfold":"fade-layout";
    const show = unfold?this.state.isSHow:!this.state.isSHow;
    const iconType = unfold?(!this.state.isSHow ? 'caret-up' : 'caret-down'):(this.state.isSHow ? 'caret-up' : 'caret-down')
    return (
      <Fragment>
        {children[0]}
        <CSSTransition in={show} timeout={300} classNames="fade">
          <div className={className} style={{ position: this.props.position }}>
            <div className='fade-button'>
              <span className='fade-button-inner' onClick={this.toggleMore}>
                关联信息
                <Icon type={iconType} />
              </span>
            </div>
            {children[1]}
          </div>
        </CSSTransition>
      </Fragment>
    );
  }

  toggleMore = () => {
    this.setState({
      isSHow: !this.state.isSHow
    });
    isFunc(this.props.toggleMoreAfter) && this.props.toggleMoreAfter(!this.state.isSHow)
  };
}

export default TransfromDown;
