import React from 'react';
import  {Button, Modal} from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
const ModalCard = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{minWidth: "700px"}}
    >
      <Modal.Body className="mt-4 mb-4">
        <h4 style={{textAlign:"center"}} >Выберите удобную дату и время</h4>
          <Calendar modalHide = {props.onHide}/>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCard;