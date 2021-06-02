const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const rooms = new Map();

app.use("/rooms", function (req, res) {
  res.send(rooms);
});

io.on("connection", (socket) => {
  console.log("user connection", socket.id);
});

server.listen(3001, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("Сервер запущен");
});
