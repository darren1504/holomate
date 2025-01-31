"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MessageInput from "@/components/MessageInput";
import { chats } from "@/types/data";
import socket from "@/utils/socket";

export default function PrivateChatRoom() {
  const params = useParams();
  const chatId = Number(params.id);
  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const chat = chats.find((c) => c.id === chatId);
    if (chat) {
      setChatName(chat.name);
    }

    socket.emit("joinRoom", chatId);

    socket.on("receiveMessage", (message: string) => {
      console.log("受信:", message);
      setMessages((prev) => [...prev, message]); // メッセージを追加
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [chatId]);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-[url('/main-bg.png')] bg-cover">
      <header className="bg-white p-4 text-center text-lg font-bold shadow">
        {chatName}
      </header>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <p key={index} className="mb-2 rounded bg-white p-2 shadow">
            {msg}
          </p>
        ))}
      </div>
      <MessageInput socket={socket} roomId={chatId} />
    </div>
  );
}
