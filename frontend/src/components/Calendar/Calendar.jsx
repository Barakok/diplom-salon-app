import React, { useState, useEffect } from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import TimePicker from "../TimePicker/TimePicker";

import "./Calendar.css";
import ru from 'date-fns/locale/ru';
import {Container, Row, Col, Button} from "react-bootstrap";
registerLocale('ru', ru)

const Calendar = ({modalHide}) => {
  const [startDate, setStartDate] = useState(new Date());

  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const selectDate = (date) => {
    setStartDate(date);
    console.log(date.toString());
  }

  return (
    <Container>
      <Row className={"mt-3 justify-content-center align-items-center"}>
        <Col className="col-3 mr-3">
          <DatePicker selected={startDate}
                      onChange={date => selectDate(date)}
                      locale="ru"
                      minDate={new Date()}
                      filterDate={isWeekday}
                      className="datePicker"/>
        </Col>
        <Col className="col-3">
          <TimePicker selectData = {startDate}/>
        </Col>
        <Col className="col-3">
          <Button variant="outline-danger"
          onClick={modalHide}>
            Подтвердить
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;