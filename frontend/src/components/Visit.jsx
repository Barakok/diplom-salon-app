import React from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function Visit() {
  return (
    <Row className="my-3 align-items-center">
      <Col>
        <span>Визит №</span>
      </Col>
      <Col>
        <span>Имя клиента: </span>
      </Col>
      <Col>
        <span>Улсуга: </span>
      </Col>
      <Col>
        <Button variant="outline-danger">Подробнее</Button>
      </Col>
    </Row>
  );
}
