import React, { PureComponent } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import ServiceItem from "../components/ServiceItem";
import filters from "../filters";

class Services extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mt-3 mb-2">
            <h1 className="text-center">Услуги</h1>
          </Col>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Поиск"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button
                className="p-0 px-2 d-flex align-items-center"
                variant="outline-dark"
              >
                <i style={{ fontSize: "15px" }} className="fas fa-search"/>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
        <Row>
          <Col className="d-flex align-items-center mb-3">
            <span className="h3 p-0 m-0">Фильтры:</span>
            {Object.keys(filters).map((item) => {
              return <a href="#" className="ml-2">{filters[item]}</a>;
            })}
          </Col>
        </Row>
        <Row className="">
          <Col className="col-12">
            <Row className="justify-content-between">
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Services;
