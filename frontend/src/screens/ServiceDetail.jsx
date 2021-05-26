import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingServiceDetail } from "../actions/serviceActions";
import ServiceItemDetail from "../components/ServiceItemDetail";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { loadingWorkersAction } from "../actions/getAllWorkersActions";

const ServiceDetail = ({ match }) => {
  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.serviceName.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const setFilters = (items) => {
    return items.map((item) => {
      return item.serviceName;
    });
  };

  const onSearchChange = (e) => {
    const term = e.target.value;
    setTerm(term);
  };

  // const onFilterItemHandler = (e) => {
  //   setFilterItem(e.target.innerText);
  // }

  const filterService = (items, filterItem) => {
    if (filterItem === "Все услуги" || filterItem === "") {
      return items;
    }
    return items.filter((item) => {
      return item.serviceName === filterItem;
    });
  };

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const { loading, servicesDetail } = services;

  const workers = useSelector((state) => state.workers);
  const { allWorkers } = workers;

  const [term, setTerm] = useState("");
  const [filterItem, setFilterItem] = useState("");
  let visibleItem = [];
  let filters = [];
  let filteredService = [];
  if (servicesDetail && servicesDetail.length !== 0) {
    filteredService = filterService(servicesDetail.service, filterItem);
    visibleItem = search(filteredService, term);
    filters = setFilters(servicesDetail.service);
  }

  useEffect(() => {
    dispatch(loadingServiceDetail(match.params.id));
    dispatch(loadingWorkersAction(match.params.id));
  }, [dispatch, match]);

  return (
    <Container>
      <Row className="justify-content-between mt-3 mb-1">
        <Col className="col-3 p-0">
          <Link to={"/services"}>
            <Button
              variant="outline-dark"
              className="py-2"
              style={{ fontSize: "15px" }}
            >
              <i className="fas fa-chevron-left mr-2" /> Вернуться
            </Button>
          </Link>
        </Col>
        <Col className="col-9 p-0 ">
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
      </Row>
      {/*<Row className="d-flex justify-content-end mb-4">*/}
      {/*    <span className="h3 p-0 m-0">Фильтры:</span>*/}
      {/*  <Link onClick={onFilterItemHandler} className="ml-2 pt-1">Все услуги</Link>*/}
      {/*    {!filters ? <Loader/> :*/}
      {/*      filters.map((item) => {*/}
      {/*        return <Link onClick={onFilterItemHandler} className="ml-2 pt-1">{item}</Link>;*/}
      {/*      })*/}
      {/*    }*/}
      {/*</Row>*/}
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
          {/*{loading ? <Loader/> : visibleItem = search(servicesDetail.service, term)}*/}
          {loading ? (
            <Loader />
          ) : visibleItem ? (
            visibleItem.map((item) => {
              return <ServiceItemDetail key={item._id} service={item} />;
            })
          ) : (
            servicesDetail.service.map((item) => {
              return <ServiceItemDetail key={item._id} service={item} />;
            })
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetail;
