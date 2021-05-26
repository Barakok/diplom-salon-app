import React from "react";
import { Modal } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
const ModalCard = (props) => {
  const { show, onHide, miniServiceId, miniServiceName } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ minWidth: "700px" }}
    >
      <Modal.Body className="mt-4 mb-4">
        <h4 style={{ textAlign: "center" }}>Выберите удобную дату и время</h4>
        <Calendar
          modalHide={props.onHide}
          miniServiceId={miniServiceId}
          miniServiceName={miniServiceName}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalCard;
