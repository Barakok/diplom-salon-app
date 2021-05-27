import React from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Visit from "./Visit";

export default function VisitsInWeekItem() {
  return (
    <Row>
      <Col>
        <Row className="align-items-center">
          <Col className="col-8">Имя Специалиста</Col>
          <Col className="col-4">
            <Button variant="outline-dark" className="float-right">
              Добавить визит
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Visit />
            <Visit />
            <Visit />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
