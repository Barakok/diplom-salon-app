import React, {useEffect} from 'react';
import  {Container, FormControl, InputGroup, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadingServiceDetail} from "../actions/serviceActions";
import ServiceItemDetail from "../components/ServiceItemDetail";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {Link} from "react-router-dom";


const ServiceDetail = ({match}) => {

  const dispatch = useDispatch();
  const services = useSelector(state => state.services);
  const {loading, error, servicesDetail} = services;

  useEffect(() => {
    dispatch(loadingServiceDetail(match.params.id));
  },[dispatch, match]);

  return (
    <Container>
      <Row className="justify-content-between mt-3 mb-4">
        <Col className="col-3 p-0">
            <Link to={'/services'}>
              <Button variant="outline-dark" className="py-2" style={{fontSize: "15px"}}>
                <i className="fas fa-chevron-left mr-2"/> Вернуться
              </Button>
            </Link>
        </Col>
        <Col className="col-9 p-0 ">
          <InputGroup className="">
            <FormControl
              placeholder="Поиск..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button
                className="p-0 px-3 d-flex align-items-center"
                variant="secondary"
              >
                <i style={{ fontSize: "15px" }} className="fas fa-search"/>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-between">
        {/*<Col className="col-3 p-0">*/}
        {/*  {loading ? <Loader/> : error ? <Message>{error}</Message> :*/}
        {/*    (<ListGroup>*/}
        {/*    {services.map((item) => {*/}
        {/*      return <ListGroup.Item action variant="none">{item.name}</ListGroup.Item>*/}
        {/*    })}*/}
        {/*  </ListGroup>)}*/}
        {/*</Col>*/}
        <Col className="col-12 p-0">
          {loading ? <Loader/> : servicesDetail.service.map((item) => {
            return <ServiceItemDetail service={item}/>
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetail;