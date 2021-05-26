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

const Calendar = ({ modalHide, miniServiceId, miniServiceName }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { currentWorker } = useSelector((state) => state.currentWorker);
  const { Name, _id } = currentWorker;
  let userId = "606059bb7a1e4d0c38122ba5";
  if (userInfo) {
    userId = userInfo._id;
  }
  const [currentDate, setCurrentDate] = useState(startDate);
  const [currentTime, setCurrentTime] = useState(
    currentDate.toString().substr(16, 5)
  );

  const valueDate = currentDate.toString().substr(4, 11);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const selectDate = (date) => {
    setStartDate(date);
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
    dispatch(
      addOrder(
        userId,
        miniServiceId,
        miniServiceName,
        _id,
        Name,
        orderDate,
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
      "Неоплачен"
    );
  };

  const onTimeClick = (time) => {
    setCurrentTime(time);
  };

  return (
    <Container>
      <Row className={"mt-3 justify-content-center align-items-center"}>
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
          <TimePicker selectData={startDate} onTimeClick={onTimeClick} />
        </Col>
        <Col className="col-3">
          <Button variant="outline-danger" onClick={onButtonClick}>
            Подтвердить
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;
