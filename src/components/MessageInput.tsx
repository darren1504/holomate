"use client";

import { useState } from "react";
import { Socket } from "socket.io-client";

interface MessageInputProps {
  socket: Socket;
  roomId: number;
}

const MessageInput: React.FC<MessageInputProps> = ({ socket, roomId }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("送信: ", { roomId, message });
      socket.emit("sendMessage", { roomId, message });
      setMessage("");
    }
  };

  return (
    <div className="flex bg-sky-50 p-4 shadow">
      <input
        type="text"
        className="flex-1 rounded-lg border p-2"
        placeholder="メッセージを作成"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="ml-2 rounded-lg bg-blue-500 px-4 py-2 font-bold text-sky-50"
        onClick={handleSendMessage}
      >
        送る
      </button>
    </div>
  );
};

export default MessageInput;
