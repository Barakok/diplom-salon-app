import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingOrdersByWeekAction } from "../actions/loadingOrdersByWeekForOneWorkerActions";
import Loader from "./Loader";
import Visit from "./Visit";

export default function VisitInWeekItem({ worker }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingOrdersByWeekAction(worker._id));
  }, [dispatch]);
  const allOrdersByWeek = useSelector((state) => state.allOrdersByWeek);
  const { loading, ordersByWeek } = allOrdersByWeek;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row style={{ fontWeight: 600 }}>
          <Col>
            <Row className="align-items-center">
              <Col className="col-8">
                <span>{worker.firstName + " " + worker.lastName}</span>
              </Col>
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
      )}
    </>
  );
}
