import React from 'react';

import {
  Container,
  Image,
  Navbar,
  Nav,
  Card,
  Col,
  Row,
} from 'react-bootstrap';

const App = () => (
  <>
    <Navbar variant="dark" fixed="top">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="#about">公司简介</Nav.Link>
          <Nav.Link href="#team">创始团队</Nav.Link>
          <Nav.Link href="#career">加入我们</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Container>
      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <Image className="center-image" src={require('./resources/jumbotron.png').default}/>
        </Col>
      </Row>

      <div className="anchor" id="about"/>
      <Card>
        <Card.Body>
          <Card.Title>公司简介</Card.Title>
          <ul>
            <li>CONTEK （高塔量化） 全名为 "Contrarian Technology"</li>
            <li>位于深圳福田</li>
            <li>专注量化投资</li>
          </ul>
        </Card.Body>
      </Card>

      <div className="anchor" id="team"/>
      <Card>
        <Card.Body>
          <Card.Title>创始团队</Card.Title>
          <ul>
            <li>Imperial College London Alumni</li>
            <li>Tsinghua University Alumni</li>
            <li>University of Science and Technology of China Alumni</li>
            <li>Oxford University Alumni</li>
            <li>Google Alumni</li>
            <li>Facebook Alumni</li>
            <li>Microsoft Alumni</li>
            <li>WorldQuant Alumni</li>
            <li>GSA Capital Alumni</li>
            <li>Jump Trading Alumni</li>
          </ul>
        </Card.Body>
      </Card>

      <div className="anchor" id="career"/>
      <Card>
        <Card.Body>
          <Card.Title>加入我们</Card.Title>
          <ul>
            <li>
              <a href="mailto:career@contek.io" target="_blank">career@contek.io</a>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Container>

    <Navbar variant="dark">
      <Container>
        <Nav className="me-auto">
          <p>© 2020-2021 CONTEK. All rights reserved.</p>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default App;
