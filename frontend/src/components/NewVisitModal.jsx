import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
import getAllMiniServices from "../actions/getAllMiniServicesActions";
import getServiceByName from "../actions/getServiceByNameActions";
import { useDispatch, useSelector } from "react-redux";
import { loadingWorkersAction } from "../actions/getAllWorkersForOneServiceActions";
import Loader from "./Loader";

export default function NewVisitModal(props) {
  const { show, onHide } = props;
  const [serviceName, setServiceName] = useState("Стрижка");
  const [servicesList, setServicesList] = useState([]);
  const [workName, setWorkName] = useState("");
  const [workerId, setWorkerId] = useState(null);
  const [clientName, setClientName] = useState("");
  const [number, setNumber] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [serviceId, setServiceId] = useState(null);

  useEffect(() => {
    getAllMiniServices().then((result) => {
      result = result.map((item) => {
        return item.service.map((service) => {
          return service.miniService.map((ser) => ser.name);
        });
      });
      result = result.flat().flat();
      setServicesList(result);
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

  //   const onChangeClick = () => {
  //     let workId = allWorkers.filter(
  //       (item) => item.firstName + " " + item.lastName === workName
  //     )[0]._id;

  //     setWorkerId(workId);
  //     let order = {
  //       _id: _id,
  //       serviceName: serviceName,
  //       miniServiceId: miniServiceId,
  //       orderDate: currentDate,
  //       orderTime: currentTime,
  //       status: currentStatus,
  //       workerName: workName,
  //       workerId: workerId ? workerId : workId,
  //     };
  //     changeOrderAction(order);
  //     onHide();
  //     onOrdersChanged(true);
  //   };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState("8:00");

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
            <Form.Label>Название услуги</Form.Label>
            <Form.Control
              as="select"
              value={servicesList[0]}
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
                  visitDate={currentDate}
                  visitTime={currentTime}
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
          <Col className="col-5 mt-2">
            <Button variant="outline-dark">Добавить</Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
