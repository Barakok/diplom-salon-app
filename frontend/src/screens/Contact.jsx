import React, { PureComponent } from "react";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import filters from "../filters";

class Contact extends PureComponent {
  render() {
    return (
      <Container className="contacts-screen">
        <h1 className="text-center mt-3 mb-3">Контакты</h1>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5280.136657934693!2d39.3310141105194!3d48.57024008724782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411fc55c792a021f%3A0xb3e15577ea8468fb!2z0JvRg9Cz0LDQvdGB0LrQuNC5INGA0LXRgdC_0YPQsdC70LjQutCw0L3RgdC60LjQuSDQptC10L3RgtGAINGN0LrRgdGC0YDQtdC90L3QvtC5INC80LXQtNC40YbQuNC90YHQutC-0Lkg0L_QvtC80L7RidC4INC4INC80LXQtNC40YbQuNC90Ysg0LrQsNGC0LDRgdGC0YDQvtGE!5e0!3m2!1sru!2sua!4v1616846531363!5m2!1sru!2sua"
              style={{ width: "600px", height: "500px", marginLeft: "10px" }}
              allowFullScreen=""
              loading="lazy"
            />
          </Col>
          <Col>
            <ul className="contactListGroup">
              <li className="d-flex align-items-center">
                <a href="tel:+380991705101">
                  <i className="fas fa-phone-alt" /> (099) 170 51 01
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="fas fa-home" /> г. Луганск, кв. Ленинского
                комсомола, 2 Б
              </li>
              <li className="d-flex align-items-center">
                <i className="fas fa-clock" /> График работы Пн - Вс: 9:00 -
                18:00
              </li>
              <li>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i className="fab fa-vk" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
