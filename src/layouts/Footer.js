import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={
        [
          // {
          //   key: 'Pro 首页',
          //   title: 'Pro 首页',
          //   href: 'https://pro.ant.design',
          //   blankTarget: true,
          // },
          // {
          //   key: 'github',
          //   title: <Icon type="github" />,
          //   href: 'https://github.com/ant-design/ant-design-pro',
          //   blankTarget: true,
          // },
          // {
          //   key: 'Ant Design',
          //   title: 'Ant Design',
          //   href: 'https://ant.design',
          //   blankTarget: true,
          // },
        ]
      }
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" />{' '}
          页脚属于全局导航的一部分，作为对顶部导航的补充，通过传递数据控制展示内容
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
