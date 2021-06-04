import React from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function MessageListItem({ msg }) {
  const { messageId, messageText, senderName, createdAt, userId } = msg;
  const { userInfo } = useSelector((state) => state.userLogin);
  let currentUser = false;
  if (userId === userInfo._id) {
    currentUser = userId;
  }
  return (
    <ListGroup.Item
      className={`d-flex ${currentUser ? "justify-content-end" : ""}`}
    >
      <Card
        bg={`${currentUser ? "primary" : "danger"}`}
        text="light"
        style={{ width: "55%" }}
      >
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Text>{senderName}</Card.Text>
        </Card.Header>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text>{messageText}</Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
}
