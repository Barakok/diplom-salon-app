import React from "react";
import { Modal } from "react-bootstrap";
import WorkersTable from "./WorkersTable";

export default function ModalWorker(props) {
  const { show, onHide, onModalCardShow } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="mt-4 mb-4">
        <h4 style={{ textAlign: "center" }}>Выберите мастера</h4>
        <WorkersTable onHide={onHide} onModalCardShow={onModalCardShow} />
      </Modal.Body>
    </Modal>
  );
}
