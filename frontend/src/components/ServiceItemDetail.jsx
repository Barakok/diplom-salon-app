import React from 'react';
import {Row} from "react-bootstrap";
import ServiceItemDetailCard from "./ServiceItemDetailCard";

const ServiceItemDetail = ({service}) => {
  const {serviceName, miniService} = service;
  return (
    <div>
      <Row className="m-0">
        <h3>{serviceName}</h3>
      </Row>
      {miniService.map((item) => {
        return <ServiceItemDetailCard serviceCard={item}/>
      })}
    </div>
  );
};

export default ServiceItemDetail;