import React, { Component } from 'react';
import { Typography, Row, Col } from 'antd';
import background from './images/background.jpg'
import './App.css';

class App extends Component {
  render() {
    const { Title } = Typography;

    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Row>
          <Col span={24}>
            <Title className="title">LA LONJA ONLINE ESPAÑOLA</Title>
            <Title level={2}>Compra y vende productos agrícolas sin intermediarios</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} lg={8}></Col>
          <Col xs={20} md={16} lg={8}>
            <Row type="flex" justify="center" gutter={16} >
              <Col span={12}>
                <a href="https://www.google.es/">
                  <div className="container-link blue-background">
                    <Title level={2}>Ver ofertas</Title>
                  </div>
                </a>
              </Col>
              <Col span={12}>
                <a href="https://www.google.es/">
                  <div className="container-link green-background" >
                    <Title level={2}>Ofrecer producto</Title>
                  </div>
                </a>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col xs={24} lg={24}>
                <a href="https://www.google.es/">
                  <div className="container-link grey-background">
                    <Title level={2}>Precios de lonja</Title>
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={2} md={4} lg={8}></Col>
        </Row>
      </div>
    );
  }
}

export default App;