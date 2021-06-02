import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VisitsRequestItem from "./VisitsRequestItem";
import getOrdersRequest from "../actions/getOrdersRequestAction";
import Visit from "./Visit";

export default function VisitsRequest() {
  const [ordersRequest, setOrdersRequest] = useState([]);

  useEffect(() => {
    getOrdersRequest().then((result) => setOrdersRequest(result));
  }, []);

  return (
    <Row>
      <Col>
        {ordersRequest.map((item) => (
          <Visit item={item} isRequest={true} />
        ))}
      </Col>
    </Row>
  );
}
