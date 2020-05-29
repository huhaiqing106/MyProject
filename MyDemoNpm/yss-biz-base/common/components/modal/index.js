import React, { Component } from 'react';
import { Modal } from 'antd';
import { modalInfo, DragDom } from 'yss-biz';
export default class NewModal extends Component {
  render() {
    return (
      <DragDom notDragSelect='.ant-btn' canDragSelect={['.ant-modal-header','.ant-modal-footer']} dragAreaSelect='.ant-modal'>
        <div className='yss-biz-drag-modal'>
          <Modal
            {...modalInfo}
            width={this.props.width}
            title={this.props.title}
            visible={this.props.visible}
            onOk={this.submission}
            onCancel={this.props.onCancel}
            {...this.props}
          >
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {
                onRef: ref => {
                  this.formRule = ref;
                }
              });
            })}
          </Modal>
        </div>
      </DragDom>

    );
  }

  submission = e => {
    !!this.formRule ? this.formRule.handleSubmit(e) : this.props.onOk(e);
  };
}

