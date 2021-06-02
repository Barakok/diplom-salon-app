import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import WorkersItem from "./WorkersItem";

export default function Workers() {
  const workers = useSelector((state) => state.allWorkers);
  const { loading, allWorkers } = workers;

  return (
    <Row>
      <Col>
        <Row>
          {allWorkers.map((item) => (
            <WorkersItem worker={item} />
          ))}
        </Row>
      </Col>
    </Row>
  );
}
