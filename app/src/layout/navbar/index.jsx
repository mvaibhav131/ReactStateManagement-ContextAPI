import React from 'react';
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
import MainContent from '../../content';
import "./index.css";
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
      <Header className='navbar_header'
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
        <Breadcrumb style={{background:"gray",padding:"5px", borderRadius:"5px"}} >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content className='content'
      >
       
        <div className='main_content'
        >
          <MainContent/>
        </div>
      </Content>
      <Footer className='footers'
      >
        vaibhavmore.in ©{new Date().getFullYear()} Created by Vaibhav More
      </Footer>
    </Layout>
  );
};
export default Navbar;