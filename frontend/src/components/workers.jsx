import React from "react";
import { Row, Col } from "react-bootstrap";
import WorkersItem from "./WorkersItem";

export default function Workers() {
  return (
    <Row>
      <Col>
        <Row>
          <WorkersItem />
          <WorkersItem />
          <WorkersItem />
          <WorkersItem />
          <WorkersItem />
          <WorkersItem />
          <WorkersItem />
          <WorkersItem />
        </Row>
      </Col>
    </Row>
  );
}
