"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Chat } from "@/types/data";

interface ChatItemProps {
  chat: Chat;
}

export default function ChatItem({ chat }: ChatItemProps) {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer items-center rounded-lg bg-sky-50 p-3 shadow"
      onClick={() => router.push(`/chat/privateChat/${chat.id}`)}
    >
      <Image
        src={chat.avatar}
        alt={chat.name}
        className="h-12 w-12 rounded-full"
        width={40}
        height={40}
      ></Image>
      <div className="ml-2">
        <p className="font-bold">{chat.name}</p>
        <p className="text-sm text-gray-600">{chat.message}</p>
        <p className="text-xs text-gray-400">{chat.time}</p>
      </div>
    </div>
  );
}
