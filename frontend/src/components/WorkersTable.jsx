import React from "react";
import { Container, Row } from "react-bootstrap";
import WorkerCard from "./WorkerCard";
import { useSelector } from "react-redux";
import Loader from "./Loader";

export default function WorkersTable({ onHide, onModalCardShow }) {
  const workers = useSelector((state) => state.workers);
  const { loading, allWorkers } = workers;
  return (
    <Container>
      <Row className="justify-content-center">
        {loading ? (
          <Loader />
        ) : (
          allWorkers.map((item) => (
            <WorkerCard
              key={item._id}
              worker={item}
              onHide={onHide}
              onModalCardShow={onModalCardShow}
            />
          ))
        )}
      </Row>
    </Container>
  );
}
