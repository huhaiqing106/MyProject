// 此页面通过 npm run create-page 创建

import React from 'react';
import { $connect, PageBody, PublicProps, Tabs } from 'yss-trade-base';

const { PageSide, PageMain, Plate } = PageBody;

// 以下内容按需调整
// haveBgColor pageBody添加黑色背景色
// half 宽度一半

export default $connect((props) => {
  return (
    <PublicProps.Provider value={{ ...props }}>
      <PageBody haveBgColor>
        <PageSide half>
          <Plate height="100%"></Plate>
        </PageSide>
        <PageMain>
          <Plate height="100%"></Plate>
        </PageMain>
      </PageBody>
    </PublicProps.Provider>
  );
});
