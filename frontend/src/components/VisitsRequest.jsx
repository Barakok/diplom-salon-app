import React from "react";
import { Col, Row } from "react-bootstrap";
import VisitsRequestItem from "./VisitsRequestItem";

export default function VisitsRequest() {
  return (
    <Row>
      <Col>
        <VisitsRequestItem />
        <VisitsRequestItem />
        <VisitsRequestItem />
      </Col>
    </Row>
  );
}
