import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './router';
import { Switch, Route, Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './router.scss'
import page, { RouteName } from '@page/page';
import { I18nName, _i18n } from '@i18n/i18n';
const { Header, Sider, Content } = Layout;
const Router = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }
    const { Lng } = _i18n();
    return (
        <div style={{ width: '100vw', height: '100vh' }} id="components-layout-demo-custom-trigger">
            <Layout className="site-layout">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to={RouteName.Index}>{Lng(I18nName.home)}</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to={RouteName.User}>用户</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        { className: 'trigger', onClick: toggle, })}
                    </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}>
                    <Switch>
                        { page.map((_, i: number) => <Route {..._} key={i} ></Route>) }
                    </Switch>
                </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Router;
