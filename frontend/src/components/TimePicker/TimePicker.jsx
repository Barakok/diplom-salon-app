import React, { useEffect, useState } from "react";

import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import "./TimePicker.css";

const TimePicker = (props) => {
  const { onTimeClick, valueTime } = props;

  const availableTimeArray = [
    [
      { disable: false, time: "08:00" },
      { disable: false, time: "08:30" },
      { disable: false, time: "09:00" },
      { disable: false, time: "09:30" },
    ],
    [
      { disable: false, time: "10:00" },
      { disable: false, time: "10:30" },
      { disable: false, time: "11:00" },
      { disable: false, time: "11:30" },
    ],
    [
      { disable: false, time: "12:00" },
      { disable: false, time: "12:30" },
      { disable: false, time: "13:00" },
      { disable: false, time: "13:30" },
    ],
    [
      { disable: false, time: "14:00" },
      { disable: false, time: "14:30" },
      { disable: false, time: "15:00" },
      { disable: false, time: "15:30" },
    ],
  ];
  const [availableTime, setAvailableTime] = useState(availableTimeArray);
  const [selectTime, setSelectTime] = useState(valueTime);

  useEffect(() => {
    const selDate = dateNormalize(props.selectData);
    const curDate = dateNormalize(new Date());

    if (selDate === curDate) {
      const tmpArray = availableTimeArray.map((rowTime) => {
        return rowTime.map((item) => {
          if (item.time < valueTime) {
            item.disable = true;
          }
          return item;
        });
      });
      console.log("tmpArray", tmpArray);
      setAvailableTime(tmpArray);
    } else setAvailableTime(availableTimeArray);
  }, [props.selectData]);

  const onClickTime = (e) => {
    onTimeClick(e.target.innerText);
    setSelectTime(e.target.innerText);
  };

  const dateNormalize = (date) => {
    return date.toString().substr(0, 10);
  };

  return (
    <Container>
      <Row className="">
        <Col className="m-0 p-0 col-9">
          <InputGroup>
            <DropdownButton
              title={selectTime}
              id="input-group-dropdown-1"
              varian="outline-dark"
            >
              <Dropdown.Item>
                <Table borderless>
                  <tbody className="m-0 p-0 col-9">
                    {availableTime.map((row, index) => (
                      <tr key={Math.random() * 100 + 1} className="mt-3 my-1">
                        {row.map((col) => (
                          <Button
                            disabled={col.disable}
                            key={Math.random() * 100 + 1}
                            value={col}
                            className="my-1 mx-1"
                            variant="info"
                            onClick={onClickTime}
                          >
                            <td className="p-0">{col.time}</td>
                          </Button>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TimePicker;
