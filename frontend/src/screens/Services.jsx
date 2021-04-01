import React, { PureComponent } from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import ServiceItem from "../components/ServiceItem";
import serviceCardArray from "../data/serviceCardArray";
import {Link} from "react-router-dom";

class Services extends PureComponent {
  render() {
    return (
      <Container>
        {/*<Row>*/}
        {/*  <Col className="d-flex align-items-center mb-3">*/}
        {/*    <span className="h3 p-0 m-0">Фильтры:</span>*/}
        {/*    {Object.keys(filters).map((item) => {*/}
        {/*      return <a href="#" className="ml-2">{filters[item]}</a>;*/}
        {/*    })}*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row className="mt-3">
          <Col className="col-12">
            <Row className="justify-content-around">
              {serviceCardArray.map((service) => {
                return (<ServiceItem service={service}/>)
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Services;
