import React from 'react'
import { PageBody, Tabs, $connect, PublicProps } from 'yss-biz'

const { PageSide, PageMain, Plate } = PageBody
const { TabPane } = Tabs

const moduleName = '$createModelName'

// 以下内容按需调整

export default $connect(props => {
  return (
    <PublicProps.Provider value={{ ...props }}>
      <PageBody haveBgColor>
        <PageSide half>
          <Tabs fullHeight>
            <TabPane noPadding tab='标题'>
              <Plate title='标题' height=''>
              </Plate>
              <Plate title='' footer={<div>底部 jsx </div>} height=''>
              </Plate>
            </TabPane>
          </Tabs>
        </PageSide>
        <PageMain>

        </PageMain>
      </PageBody>
    </PublicProps.Provider>
  )
},moduleName)