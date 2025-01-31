import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // フロントエンドのURL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`ユーザーがルーム ${roomId} に参加`);
  });

  socket.on("sendMessage", ({ roomId, message }) => {
    console.log(`ルーム ${roomId} にメッセージ: ${message}`);
    io.to(roomId).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("ユーザーが切断しました");
  });
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
