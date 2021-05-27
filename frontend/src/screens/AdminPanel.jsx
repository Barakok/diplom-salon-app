import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {} from "react-bootstrap";
import VisitsInWeek from "../components/VisitsInWeek";
import VisitsRequest from "../components/VisitsRequest";

export default function AdminPanel() {
  return (
    <Container>
      <Row>
        <Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-3">
              <Col sm={3} className="px-0">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Визиты</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Запросы на визиты</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Работники</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9} className="px-0">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <VisitsInWeek />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <VisitsRequest />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <VisitsInWeek />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}
