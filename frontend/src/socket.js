import io from "socket.io-client";

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io.connect("http://localhost:3001", connectionOptions);

export default socket;
