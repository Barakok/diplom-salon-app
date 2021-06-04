const { nanoid } = require("nanoid");

const db = [
  {
    roomId: "6062f42d3e3bb32e740d9dff",
    messages: [
      {
        messageId: "1",
        userId: "6062f42d3e3bb32e740d9dff",
        senderName: "Sonic",
        messageText: "Добрый день",
        createdAt: "2021-06-03",
      },
      {
        messageId: "2",
        userId: "6062e918397ea02c3458c1d6",
        senderName: "Valera",
        messageText: "Здравствуйте",
        createdAt: "2021-06-03",
      },
    ],
  },
];

const messageHandlers = (io, socket) => {
  const getMessages = () => {
    const messages = db.filter((item) => item.roomId === socket.roomId);
    io.in(socket.roomId).emit("messages", messages);
  };
  const addMessage = (message) => {
    db.filter(
      (item) => item.roomId === "6062f42d3e3bb32e740d9dff"
    )[0].messages.push({
      messageId: nanoid(8),
      createdAt: new Date(),
      ...message,
    });
    getMessages();
  };
  socket.on("message:get", getMessages);
  socket.on("message:add", addMessage);
};

module.exports = messageHandlers;
