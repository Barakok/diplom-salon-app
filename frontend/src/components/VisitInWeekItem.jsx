import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Loader from "./Loader";
import Visit from "./Visit";
import getOrdersForOneWorker from "../actions/getOrdersForOneWorkerActions";
import NewVisitModal from "./NewVisitModal";

export default function VisitInWeekItem({ worker }) {
  const [data, setData] = useState(null);
  const { _id } = worker;
  const [ordersChanged, setOrdersChange] = useState(false);
  useEffect(() => {
    getOrdersForOneWorker(_id).then((result) => {
      setData(result);
    });
    setData(false);
  }, [_id, ordersChanged]);

  const [addVisitModal, setaddVisitModal] = useState(false);

  const onAddVisitClick = () => {
    setaddVisitModal(true);
  };

  const [modalVisitShow, setModalVisitShow] = useState(true);

  const emptyItem = {
    _id: "",
    userId: "",
    miniServiceName: "",
    orderDate: "",
    orderTime: "",
    workerName: "",
    status: "",
    miniServiceId: "",
  };

  return (
    <>
      {data ? (
        <Row style={{ fontWeight: 600 }}>
          <Col>
            <Row className="align-items-center">
              <Col className="col-8">
                <span>{worker.firstName + " " + worker.lastName}</span>
              </Col>
              <Col className="col-4">
                <Button
                  variant="outline-dark"
                  onClick={onAddVisitClick}
                  className="float-right"
                >
                  Добавить визит
                </Button>
                {addVisitModal ? (
                  <NewVisitModal
                    show={modalVisitShow}
                    onHide={() => setModalVisitShow(false)}
                    item={emptyItem}
                  />
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                {data
                  ? data.map((item) => (
                      <Visit
                        key={item._id}
                        item={item}
                        onOrdersChanged={setOrdersChange}
                      />
                    ))
                  : console.log("hi")}
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Loader />
      )}
    </>
  );
}
