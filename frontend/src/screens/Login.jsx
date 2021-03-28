import React, { PureComponent } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

class Login extends PureComponent {
  render() {
    return (
      <Container className="mt-3">
        <Row clasName="justify-content-md-center">
          <Col xs={12} md={6}>
            <h3>Войти</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control type="email" placeholder="Введите email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Войти
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            Новый пользователь?
            <Link to="/registration"> Зарегистрироваться</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
