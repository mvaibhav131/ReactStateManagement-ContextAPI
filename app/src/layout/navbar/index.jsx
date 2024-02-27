import React from 'react';
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
import MainContent from '../../content';
const { Header, Content, Footer } = Layout;
const items = new Array(1).fill(null).map((_, index) => ({
  key:"avatar",
  label:"Graphical View Dashboard",
}));
const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" ><Avatar/></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={'1'}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Avatar/>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <MainContent/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        vaibhavmore.in ©{new Date().getFullYear()} Created by Vaibhav More
      </Footer>
    </Layout>
  );
};
export default Navbar;