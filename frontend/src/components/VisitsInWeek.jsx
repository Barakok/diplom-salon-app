import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import VisitsInWeekItem from "./VisitsInWeekItem";

export default function VisitsInWeek() {
  const [term, setTerm] = useState("");
  const onSearchChange = (e) => {
    const term = e.target.value;
    setTerm(term);
  };
  return (
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
        <VisitsInWeekItem />
        <VisitsInWeekItem />
        <VisitsInWeekItem />
        <VisitsInWeekItem />
      </Col>
    </Row>
  );
}
