import React, { Component } from 'react';
import { Typography, Row, Col } from 'antd';
import background from './assets/images/backgrounds/bg_farmers.jpg'
import logo_footer from './assets/images/logos/logo loones_3.png'
import './App.css';

class App extends Component {
  render() {

    // Components
    const { Title } = Typography;

    // Labels    
    const TITLE = "LA LONJA ONLINE ESPAÑOLA"
    const SUBTITLE = "Compra y vende productos agrícolas sin intermediarios"
    const VIEW_OFFERS = "Ver ofertas"
    const OFFER_PRODUCT = "Ofrecer producto"
    const MARKETDATA_LABEL =  "Precios de lonja"
    const EXIST_ACCOUNT_LABEL = "¿Ya tienes cuenta?"
    const SIG_IN_LABEL = "Inicia sesión"

    // Domain
    const DOMAIN = "https://coop.loones.es/"

    // Links
    const VIEW_OFFER_LINK = `${DOMAIN}iniciar-sesion?create_account=1`
    const OFFER_PRODUCT_LINK = `${DOMAIN}module/agilemultipleseller/sellersignup`
    const SIGN_IN_LINK = `${ DOMAIN }iniciar-sesion`
    const MARKETDATA_LINK = "https://marketdata.loones.es/"

    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Row>
          <Col span={24}>
            <Title className="title">{ TITLE }</Title>
            <Title level={2}>{ SUBTITLE }</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} lg={8}></Col>
          <Col xs={20} md={16} lg={8}>
            <Row type="flex" justify="center" gutter={16} >
              <Col span={12}>
                <a href={ VIEW_OFFER_LINK }>
                  <div className="container-link blue-background">
                    <Title level={2}>{ VIEW_OFFERS }</Title>
                  </div>
                </a>
              </Col>
              <Col span={12}>
                <a href={ OFFER_PRODUCT_LINK }>
                  <div className="container-link green-background" >
                    <Title level={2}>{ OFFER_PRODUCT }</Title>
                  </div>
                </a>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col xs={24} lg={24}>
                <a href={ MARKETDATA_LINK }>
                  <div className="container-link grey-background">
                    <Title level={2}>{ MARKETDATA_LABEL }</Title>
                  </div>
                </a>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col xs={24} lg={24} className="sign-in">
                <Title level={4}> { EXIST_ACCOUNT_LABEL } <a href={ SIGN_IN_LINK } className="sign-in-link">{ SIG_IN_LABEL }</a></Title>
              </Col>
            </Row>
          </Col>
          <Col xs={2} md={4} lg={8}></Col>
        </Row>
        <Row>
          <Col span={24}>
            <div>
              <a href={ DOMAIN }>
              <img width="140" height="170" src={ logo_footer } alt="loones_logo"></img>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;