import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveCurrentWorker } from "../actions/saveCurrentWorkerAcrions";

export default function WorkerCard({ worker, onHide, onModalCardShow }) {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    position,
    image,
    discription,
    status,
    _id,
  } = worker;
  const onSubmitButtonClick = () => {
    onHide();
    onModalCardShow(true);
    dispatch(saveCurrentWorker({ Name: firstName + " " + lastName, _id }));
  };
  return (
    <Col className="col-6">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>
            <Row className="align-items-center">
              <Col className="col-7">
                <Row className="mb-1" style={{ fontSize: "20px" }}>
                  <Col>{firstName + " " + lastName}</Col>
                </Row>
                <Row style={{ fontSize: "16px" }}>
                  <Col>{position}</Col>
                </Row>
              </Col>
              <Col className="col-3">
                <Button onClick={onSubmitButtonClick} variant="outline-info">
                  Выбрать
                </Button>
              </Col>
            </Row>
            {/* <Row>
              <Col>{discription}</Col>
            </Row> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
