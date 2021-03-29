import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from '../actions/userActions';

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const useRegister = useSelector(state => state.userRegistrationReducer);
  const {loading, error, userInfo} = useRegister;


  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== correctPassword){
      setMessage("Пароли не совпадают");
    } else{
      dispatch(register(name, email, password));
    }
  }


  return(
    <Container className="mt-3">
      <Row clasName="justify-content-md-center">
        <Col xs={12} md={6}>
          <h3>Зарегистрироваться</h3>
          <Form
          onSubmit={submitHandler}
          >
            <Form.Group controlId="name">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="name"
                placeholder="Введите Ваше имя"
                value={name}
                setValue={setName}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Подтвердите пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                value={correctPassword}
                onChange={(e) => setCorrectPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Регистрация
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          Уже есть аккаунт?
          <Link to="/login"> Войти</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Register;
