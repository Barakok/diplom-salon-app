import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function WorkersItem() {
  return (
    <Col className="col-4 mb-3" style={{ fontWeight: 600 }}>
      <Card>
        <Card.Img variant="top" src="/image/no-master-sm.png" />
        <Card.Body>
          <Card.Text>
            <Row className="align-items-center">
              <Col>
                <Row className="mb-1" style={{ fontSize: "20px" }}>
                  <Col>
                    <span>Имя Фамилия</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
