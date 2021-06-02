import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "../TimePicker/TimePicker";
import "./Calendar.css";
import ru from "date-fns/locale/ru";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../actions/addOrderActions";
import { loadingOrdersByDateAction } from "../../actions/loadingOrdersByDateActions";
registerLocale("ru", ru);

const Calendar = ({
  modalHide,
  miniServiceId,
  miniServiceName,
  isButton,
  visitDate,
  visitTime,
  onDateChange,
  onTimeChange,
}) => {
  const [startDate, setStartDate] = useState(new Date(visitDate));
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { currentWorker } = useSelector((state) => state.currentWorker);
  const { Name, _id } = currentWorker;
  let userId = "606059bb7a1e4d0c38122ba5";

  if (userInfo) {
    userId = userInfo._id;
  }
  let valueTime = new Date().toString().substr(16, 5);

  if (+valueTime.substr(3, 2) < 30) {
    valueTime = valueTime.substr(0, 2) + ":" + "30";
  } else valueTime = +valueTime.substr(0, 2) + 1 + ":" + "00";
  const [currentDate, setCurrentDate] = useState(startDate);
  const [currentTime, setCurrentTime] = useState(valueTime);

  const valueDate = currentDate;

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const selectDate = (date) => {
    setStartDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
    const strDate = date.toString().substr(4, 11).replace(/\s/g, "");
    dispatch(loadingOrdersByDateAction(strDate, _id));
  };

  const addOrderOnClick = (
    userId,
    miniServiceId,
    miniServiceName,
    _id,
    Name,
    orderDate,
    orderTime,
    status
  ) => {
    const validDate = new Date(
      orderDate.getFullYear(),
      orderDate.getMonth(),
      orderDate.getDate(),
      +orderTime.substr(0, 2),
      +orderTime.substr(3, 2)
    );
    dispatch(
      addOrder(
        userId,
        miniServiceId,
        miniServiceName,
        _id,
        Name,
        validDate,
        orderTime,
        status
      )
    );
  };

  const onButtonClick = () => {
    modalHide();
    addOrderOnClick(
      userId,
      miniServiceId,
      miniServiceName,
      _id,
      Name,
      valueDate,
      currentTime,
      userInfo ? "Неоплачен" : "Необработан"
    );
  };

  const onTimeClick = (time) => {
    if (onTimeChange) {
      onTimeChange(time);
    }

    setCurrentTime(time);
  };

  const visitDateDateFormat = new Date(visitDate);

  return (
    <Container>
      <Row className={" justify-content-center align-items-center"}>
        <Col className="col-3 mr-3">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              selectDate(date);
              setCurrentDate(date);
            }}
            locale="ru"
            minDate={new Date()}
            filterDate={isWeekday}
            className="datePicker"
          />
        </Col>
        <Col className="col-3">
          <TimePicker
            selectData={startDate}
            onTimeClick={onTimeClick}
            valueTime={visitTime ? visitTime : valueTime}
          />
        </Col>
        {isButton ? (
          <Col className="col-3">
            <Button variant="outline-danger" onClick={onButtonClick}>
              Подтвердить
            </Button>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default Calendar;
