import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function VisitsRequestItem() {
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
