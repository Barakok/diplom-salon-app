import React, { useRef, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import MessageListItem from "./MessageListItem";

export default function MessageList({ messages }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const listStyles = {
    height: "70vh",
    border: "1px solid rgba(0,0,0,.4)",
    borderRadius: "4px",
    overflow: "auto",
  };

  return (
    <>
      <ListGroup variant="flush" style={listStyles}>
        {messages.map((msg) => (
          <MessageListItem key={msg.messageId} msg={msg}></MessageListItem>
        ))}
        <span ref={messagesEndRef}></span>
      </ListGroup>
    </>
  );
}
