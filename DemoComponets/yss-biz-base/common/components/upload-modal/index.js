import React, { PureComponent } from 'react';
import { Modal, Row, Col, Button, Upload, Icon, Table, Progress } from 'antd';
import uploadFilesPop from './models';
import './index.less';
const { Dragger } = Upload;
let _that = null;
@connect(
  uploadFilesPop,
  state => {
    return {
      visible: state.get('visible'),
      dataSource: state.get('dataSource')
    };
  },
  mutations => {
    return {
      changeVisible: mutations.changeVisible,
      saveDataSource: mutations.saveDataSource
    };
  }
)
class UploadFilesModal extends PureComponent {
  constructor(props) {
    super(props);
    _that = this;
  }
  onOk = () => {
    const { changeVisible } = this.props;
    if (this.props.uploadList && typeof this.props.uploadList === 'function') {
      const { dataSource } = uploadFilesPop.getState().toJS();
      this.props.uploadList(dataSource);
    }
    changeVisible(false);
  };
  onCancel = () => {
    const { changeVisible } = this.props;
    changeVisible(false);
  };
  deleteRow = data => {
    const { saveDataSource } = this.props;
    const { dataSource } = uploadFilesPop.getState().toJS();
    let resultData = dataSource.filter(item => {
      return item.uid !== data.uid;
    });
    saveDataSource(resultData);
  };
  updataDataSource = data => {
    const { saveDataSource } = this.props;
    const { dataSource } = uploadFilesPop.getState().toJS();
    let resultData = [];
    dataSource.map(item => {
      if (item.uid === data.uid) {
        return resultData.push(data);
      } else {
        return resultData.push(item);
      }
    });
    saveDataSource(resultData);
  };
  addUploadList = data => {
    const { saveDataSource } = this.props;
    const { dataSource } = uploadFilesPop.getState().toJS();
    dataSource.push(data);
    saveDataSource(dataSource);
  };
  render () {
    const { visible, dataSource } = this.props;
    const gutter = [16, 16];
    const uploadProps = {
      name: 'file',
      multiple: this.props.multiple || true,
      action: this.props.action || '/files/uploadFile',
      headers: {
        authorization: 'dev'
      },
      showUploadList: false,
      onChange: info => {
        if (info.file && info.file.status === 'done') {
          let uid = info.file.uid;
          let params = {
            uid: uid,
            process: 100,
            id: info.file.response && info.file.response.data,
            fileName: info.file.name
          };
          this.updataDataSource(params);
        }
      },
      beforeUpload: (file, fileList) => {
        let params = {
          uid: file.uid,
          fileName: file.name,
          process: 30
        };
        this.addUploadList(params);
      }
    };
    if (this.props.accept) {
      uploadProps.accept = this.props.accept;
    }
    const columns = [
      {
        title: '文件名称',
        dataIndex: 'fileName',
        width: 150
      },
      {
        title: '上传进度',
        dataIndex: 'process',
        width: 150,
        render: (text, record, index) => {
          if (text === 100) {
            return <Progress percent={100} />;
          } else {
            return <Progress percent={text || 0} status="active" />;
          }
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: 150,
        render: (text, record, index) => {
          return (
            <span
              onClick={() => {
                this.deleteRow(record);
              }}
              className="delectBox"
            >
              {/* <Icon type="delete" /> */}
              <span style={{ color: '#FF900D' }}>删除</span>
            </span>
          );
        }
      }
    ];
    return (
      <Modal
        width={1000}
        title={'上传附件'}
        visible={visible}
        onOk={this.onOk}
        onCancel={this.onCancel}
        destroyOnClose={true}
        className="modalStyle"
        getContainer={false}
        wrapClassName="uploadFilesModal"
      >
        <Row>
          <Col span={8} className="fileLeft">
            <div className="ant-upload ant-upload-drag fileLeftBox">
              <Upload {...uploadProps}>
                <Button>选择上传附件</Button>
              </Upload>
            </div>
          </Col>
          <Col span={16}>
            <Dragger {...uploadProps}>
              {/* <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p> */}
              <p className="ant-upload-text">将文件拖拽到此处上传</p>
            </Dragger>
          </Col>
        </Row>
        <Row gutter={gutter} style={{ marginTop: '20px' }}>
          <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={dataSource.toJS ? dataSource.toJS() : dataSource}
          />
        </Row>
      </Modal>
    );
  }
}
UploadFilesModal.show = (params = {}) => {
  _that.props.changeVisible(true);
};
export default UploadFilesModal;
