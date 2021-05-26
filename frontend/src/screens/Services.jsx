import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceItem from "../components/ServiceItem";
import serviceCardArray from "../data/serviceCardArray";

class Services extends PureComponent {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col className="col-12">
            <Row className="justify-content-around">
              {serviceCardArray.map((service) => {
                return <ServiceItem key={service._id} service={service} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Services;
