import React, { PureComponent } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Home extends PureComponent {
  state = {
    userLogin: true,
  };

  render() {
    return (
      <Container className="home-screen d-flex justify-content-center align-items-center">
        <div>
          <Row className="justify-content-center">
            <Col>
              <h1>Ухоженные люди буквально сияют от уверенности в себе!</h1>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            {this.state.userLogin ? (
              <LinkContainer to="/services">
                <Button className="btn" type="button" variant="outline-dark">
                  Заказать услуги
                </Button>
              </LinkContainer>
            ) : (
              <LinkContainer to="/login">
                <Button className="btn" type="button" variant="outline-dark">
                  Войти
                </Button>
              </LinkContainer>
            )}
          </Row>
        </div>
      </Container>
    );
  }
}

export default Home;
