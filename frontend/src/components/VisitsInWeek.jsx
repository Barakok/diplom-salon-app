import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import VisitInWeekItem from "./VisitInWeekItem";
import { useDispatch, useSelector } from "react-redux";
import { loadingAllWorkersAction } from "../actions/getAllWorkersActions";
import Loader from "./Loader";

export default function VisitsInWeek() {
  const [term, setTerm] = useState("");
  const onSearchChange = (e) => {
    const term = e.target.value;
    setTerm(term);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingAllWorkersAction());
  }, [dispatch]);
  const workers = useSelector((state) => state.allWorkers);
  const { loading, allWorkers } = workers;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col>
            <Col className="col-12 p-0 mb-3">
              <InputGroup className="">
                <FormControl
                  placeholder="Поиск..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={term}
                  onChange={onSearchChange}
                />
                <InputGroup.Append>
                  <Button
                    className="p-0 px-3 d-flex align-items-center"
                    variant="secondary"
                  >
                    <i style={{ fontSize: "15px" }} className="fas fa-search" />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            {allWorkers.map((worker) => (
              <VisitInWeekItem worker={worker} />
            ))}
          </Col>
        </Row>
      )}
    </>
  );
}
