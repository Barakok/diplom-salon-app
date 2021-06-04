import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
export default function MessagesForm({ sendMessage, username }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      sendMessage({ messageText: text, senderName: username });
      setText("");
    }
  };
  return (
    <>
      <Form onSubmit={handleSendMessage}>
        <Form.Group className="d-flex">
          <Form.Control
            value={text}
            onChange={handleChangeText}
            type="text"
            placeholder="Message..."
          />
          <Button variant="success" type="submit" style={{ height: "45px" }}>
            Отправить
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
