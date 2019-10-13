import React, { Component } from 'react';
import { Typography, Row, Col } from 'antd';
import background from './background.jpg'
import './App.css';

class App extends Component {
  render() {
    const { Title } = Typography;

    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Row>
          <Col span={24}>
            <Title>LA LONJA ONLINE ESPAÑOLA</Title>
            <Title level={3}>Compra y vende productos agrícolas sin intermediarios</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={2} lg={8}></Col>
          <Col xs={20} lg={8}>
            <Row type="flex" justify="center" gutter={16} >
              <Col span={12}>
                <div className="container-link blue-background">
                  <Title level={2}>Publicar demanda</Title>
                </div>
              </Col>
              <Col span={12}>
                <div className="container-link green-background" >
                  <Title level={2}>Ofrecer producto</Title>
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col xs={24} lg={24}>
                <div className="grey-background">
                  <Title level={2}>Precios de lonja</Title>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={2} lg={8}></Col>
        </Row>
      </div>
    );
  }
}

export default App;