import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessagesForm";

const SERVER_URL = "http://localhost:5000";

export default function Chat() {
  const roomId = "6062f42d3e3bb32e740d9dff";
  const { userInfo } = useSelector((state) => state.userLogin);
  const { _id, name } = userInfo;
  const user = { username: name, userId: _id };
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const { username, userId } = user;

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.emit("user:add", { username, userId });

    socketRef.current.on("users", (users) => {
      setUsers(users);
    });

    socketRef.current.emit("message:get");

    socketRef.current.on("messages", (messages) => {
      console.log(messages[0].messages);
      setMessages(messages[0].messages);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, userId, username]);

  const sendMessage = ({ messageText, senderName }) => {
    socketRef.current.emit("message:add", {
      userId,
      messageText,
      senderName,
    });
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col className="col-12">
          <Row>
            <Col>
              <MessageList messages={messages} />
            </Col>
          </Row>
          <Row>
            <Col>
              <MessageForm sendMessage={sendMessage} username="Sonic" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
