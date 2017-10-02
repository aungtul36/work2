import React, { Component } from 'react';
import './App.css';
import thairun from './thairun.png';
import { Layout, Menu, Row, Col, Affix } from 'antd';
const { Header } = Layout;

class Header1 extends Component {
  render() {
    return (
      <Affix>
        <Layout className="layout">
          <Header>
            <Col span={12} style={{ width: 120 }}>
              <img src={thairun} style={{ width: 100 }} />
            </Col>
            <Col span={12}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="Home">All Event</Menu.Item>
                <Menu.Item key="1">Photos</Menu.Item>
              </Menu>
            </Col>
          </Header>
        </Layout>
      </Affix>
    );
  }
}

export default Header1;
