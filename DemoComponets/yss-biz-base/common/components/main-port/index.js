import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

const { self, top } = window;

export default class AppComponent extends React.Component {
  state = {
    baseConfig: this.props.baseConfig || {},
  };

  componentDidMount() {
    if (self !== top) {
      this.onMessage();
      const themeColor = localStorage.getItem('theme-color');
      themeColor === 'light' && this.changeThemeColor(themeColor);
    }
  }

  onMessage = () => {
    self.addEventListener('message', (event) => {
      if (event.data.operation === 'change-theme-color') {
        this.changeThemeColor(event.data.themeColor);
      }
    });
  };

  changeThemeColor = (themeColor) => {
    self.less.modifyVars(themeColor === 'light' ? antdConfig.lightThemeConfig : antdConfig.darkThemeConfig);
  };

  isDev = () => {
    return 'development' === process.env.NODE_ENV;
  };

  render() {
    const topProps = {
      baseParth: '',
      appModel: this.state.baseConfig.appModel || appModel,
      isDev: this.isDev(),
      isSingle: !this.props.isIframe ? this.isDev() : false,
      productName: this.props.productName,
      ...this.props,
    };
    antdConfig.locale = zhCN; // 此处待
    const { ChildRoutes = [] } = this.props;
    return (
      <ConfigProvider {...antdConfig}>
        <Routes childRoutes={() => <ChildRoutes {...topProps} />} {...topProps} />
      </ConfigProvider>
    );
  }
}
