import React, { PureComponent } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  }

    return (
      <header className="header-navbar header-shadow">
        <Container className="mt-3">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to="/">
              <Navbar.Brand className="ml-2">Beauty House</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/services">
                  <Nav.Link>Услуги</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Контакты</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name}>
                    <LinkContainer to={`/account/${userInfo._id}`}>
                      <NavDropdown.Item>Мои услуги</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Выйти</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>Войти</Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    );
}

Header.propTypes = {};

export default Header;
