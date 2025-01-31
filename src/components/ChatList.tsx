import React from "react";
import ChatItem from "@/components/ChatItem";
import { chats } from "@/types/data";

export default function ChatList() {
  return (
    <div className="space-y-4 p-4">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
