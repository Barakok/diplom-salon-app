import React, { PureComponent } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends PureComponent {
  state = {
    userLogin: false,
  };

  render() {
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
                {this.state.userLogin ? (
                  <NavDropdown title={"Stas"}>
                    <LinkContainer to="/account">
                      <NavDropdown.Item>Профиль</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item>Выйти</NavDropdown.Item>
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
}

Header.propTypes = {};

export default Header;
