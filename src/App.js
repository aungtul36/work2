import React, { Component } from 'react';
import './App.css';
import thairun from './thairun.png';
import Header1 from './Header1';
import Content1 from './Content1';
import { Layout, Menu, Row, Col, Affix } from 'antd';
const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Content1 />
      </div>
    );
  }
}

export default App;
