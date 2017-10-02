import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Row, Col, Input, Button } from 'antd';
const { Content } = Layout;

class Content1 extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <div className="" style={{ background: '#111', padding: 60, minHeight: 380, height: 590 }}>
                        <Row className="box-row" gutter={24}>
                            <Col xs={24} md={16} lg={8} className="box-col" span={24}>
                                <div className="box-1">
                                    <div className="box-img">
                                        <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/vff.jpg"
                                            width="100%" height="100%"
                                        />
                                    </div>
                                    <div className="box-name font-1">
                                        Five Fingers Run
                                    </div>
                                    <div className="">
                                        <Input placeholder="Bib number" style={{ width: 300, height: 35 }} />
                                    </div>
                                    <div className="box-search-button">
                                        <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Content1;