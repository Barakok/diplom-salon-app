import React from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export default function OrderListItem({ match, order }) {
  return (
    <ListGroup.Item>
      <Row className="d-flex align-items-center">
        <Col>{order.miniServiceName}</Col>
        <Col>{order.orderDate}</Col>
        <Col>{order.orderTime}</Col>
        <Col>
          <Button>Изменить</Button>
        </Col>
        <Col>
          <Button>Удалить</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
