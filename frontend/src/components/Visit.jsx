import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import VisitModal from "./VisitModal";

export default function Visit({ item, onOrdersChanged, isRequest }) {
  const { _id, miniServiceName, orderDate, orderTime } = item;
  const [modalVisitShow, setModalVisitShow] = useState(false);

  const onDetailButtonClick = () => {
    setModalVisitShow(true);
  };

  return (
    <Row className="my-3 align-items-center">
      <Col>
        <span>Визит № {_id.slice(-6)}</span>
      </Col>
      <Col>
        <span>Улсуга: {miniServiceName}</span>
      </Col>
      <Col>
        <span>Дата: {orderDate.slice(0, 10)}</span>
      </Col>
      <Col>
        <span>Время {orderTime}</span>
      </Col>
      <Col>
        <Button variant="outline-danger" onClick={onDetailButtonClick}>
          Подробнее
        </Button>
        <VisitModal
          show={modalVisitShow}
          onHide={() => setModalVisitShow(false)}
          item={item}
          onOrdersChanged={onOrdersChanged}
          isRequest={isRequest}
        />
      </Col>
    </Row>
  );
}
