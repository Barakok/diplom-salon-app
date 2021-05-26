import React, { useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import ModalCard from "./ModalCard";
import ModalWorker from "./ModalWorker";

const ServiceItemDetailCard = ({ serviceCard }) => {
  const { duration, price, name, description, _id } = serviceCard;
  const [modalShow, setModalShow] = useState(false);
  const [modalWorkerShow, setModalWorkerShow] = useState(false);
  const onOrderButtonClick = () => {
    setModalWorkerShow(true);
  };

  return (
    <>
      <Row className="m-0 mb-3" style={{ boxShadow: "0 0 5px black" }}>
        <Col className="p-0">
          <Card style={{ width: "100%" }}>
            <Row className="justify-content-between">
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Col>
              <Col md={4} className="pr-4">
                <ListGroup variant="flush">
                  <ListGroup.Item className="px-0 pl-1 ml-auto">
                    <strong>Цена: {price}р</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 pl-1 ml-auto">
                    <strong>Длительность: {duration}мин.</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 ml-auto">
                    <Button
                      variant="outline-danger"
                      onClick={onOrderButtonClick}
                    >
                      Заказать
                    </Button>
                    <ModalWorker
                      show={modalWorkerShow}
                      onHide={() => setModalWorkerShow(false)}
                      onModalCardShow={setModalShow}
                    />
                    <ModalCard
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      miniServiceId={_id}
                      miniServiceName={name}
                    />
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ServiceItemDetailCard;
