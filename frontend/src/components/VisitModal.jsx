import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
import getAllMiniServices from "../actions/getAllMiniServicesActions";
import getServiceByName from "../actions/getServiceByNameActions";
import { useDispatch, useSelector } from "react-redux";
import { loadingWorkersAction } from "../actions/getAllWorkersForOneServiceActions";
import Loader from "./Loader";
import getUserInfoById from "../actions/getUserInfoByIdAction";
import changeOrderAction from "../actions/changeOrderAction";
import deleteOrder from "../actions/deleteOrderAction";

export default function VisitModal(props) {
  const { show, onHide, item, onOrdersChanged, isRequest } = props;
  const {
    _id,
    userId,
    miniServiceName,
    orderDate,
    orderTime,
    workerName,
    status,
    miniServiceId,
  } = item;

  const [serviceName, setServiceName] = useState(miniServiceName);
  const [services, setService] = useState([]);
  const [servicesList, setServicesList] = useState([serviceName]);
  const [workName, setWorkName] = useState(workerName);
  const [workerId, setWorkerId] = useState(null);
  const [clientName, setClientName] = useState("Стас Козлов");
  const [number, setNumber] = useState("+38050111111");
  const [currentStatus, setCurrentStatus] = useState(status);
  const [serviceId, setServiceId] = useState(null);

  useEffect(() => {
    getAllMiniServices().then((result) => {
      setService(result);
      result = result.map((item) => {
        return item.service.map((service) => {
          return service.miniService.map((ser) => ser.name);
        });
      });
      result = result.flat().flat();
      setServicesList(result);
    });
    getUserInfoById(userId).then((result) => {
      setClientName(result.name);
      setNumber(result.phoneNumber);
    });
  }, []);

  useEffect(() => {
    getServiceByName(serviceName).then((result) => {
      setServiceId(result);
    });
  }, [serviceName]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (serviceId) {
      dispatch(loadingWorkersAction(serviceId.serviceId));
    }
  }, [serviceId, props]);

  const workersForOneService = useSelector((state) => state.workers);
  const { loading, allWorkers } = workersForOneService;

  const onServiceNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const onWorkerNameChange = (e) => {
    setWorkName(e.target.value);
    setWorkerId(
      allWorkers.filter(
        (item) => item.firstName + " " + item.lastName === e.target.value
      )[0]._id
    );
  };

  const onStatusListChange = (e) => {
    setCurrentStatus(e.target.value);
  };

  const onNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const onChangeClick = () => {
    let workId = allWorkers.filter(
      (item) => item.firstName + " " + item.lastName === workName
    )[0]._id;

    setWorkerId(workId);
    let order = {
      _id: _id,
      serviceName: serviceName,
      miniServiceId: miniServiceId,
      orderDate: currentDate,
      orderTime: currentTime,
      status: currentStatus,
      workerName: workName,
      workerId: workerId ? workerId : workId,
    };
    changeOrderAction(order);
    onHide();
    onOrdersChanged(true);
  };

  const [currentDate, setCurrentDate] = useState(orderDate);
  const [currentTime, setCurrentTime] = useState(orderTime);

  const onDeleteClick = () => {
    console.log(_id);
    deleteOrder(_id);
    onHide();
    onOrdersChanged(true);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ fontWeight: "600" }}
    >
      <Modal.Body className="mt-4 mb-4 py-0">
        <Row>
          <Col>
            <h4 style={{ textAlign: "center" }}>Визит №{_id.slice(-6)}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Название услуги</Form.Label>
            <Form.Control
              as="select"
              value={serviceName}
              onChange={onServiceNameChange}
            >
              {servicesList.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Специалист</Form.Label>
            {loading ? (
              <Loader />
            ) : (
              <Form.Control
                as="select"
                value={workName}
                onChange={onWorkerNameChange}
              >
                {allWorkers.map((item) => (
                  <option key={item._id}>
                    {item.firstName + " " + item.lastName}
                  </option>
                ))}
              </Form.Control>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Имя Клиента</Form.Label>
            <Form.Control type="text" defaultValue={clientName} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form.Label>Дата и время</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Calendar
                  isButton={false}
                  visitDate={orderDate}
                  visitTime={orderTime}
                  onDateChange={setCurrentDate}
                  onTimeShange={setCurrentTime}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              type="text"
              value={number}
              onChange={onNumberChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Статус</Form.Label>
            <Form.Control
              as="select"
              value={currentStatus}
              onChange={onStatusListChange}
            >
              <option>{"Необработан"}</option>
              <option>{"Неоплачен"}</option>
              <option>{"Оплачен"}</option>
              <option>{"Отменен"}</option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="justify-content-end">
          {isRequest ? (
            <Col className="col-3 mt-2">
              <Button>Добавить</Button>
            </Col>
          ) : (
            <Col className="col-5 mt-2">
              <Button variant="outline-dark" onClick={onChangeClick}>
                Изменить
              </Button>
              <Button
                variant="outline-dark"
                onClick={onDeleteClick}
                style={{ marginLeft: "10px" }}
              >
                Удалить
              </Button>
            </Col>
          )}
        </Row>
      </Modal.Body>
    </Modal>
  );
}
