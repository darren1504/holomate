import React from "react";
import ChatList from "@/components/ChatList";
import Navbar from "@/components/Navbar";

export default function Chat() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-[url('/main-bg.png')] bg-cover pb-20">
      <header className="p-6 text-center text-xl font-bold text-sky-50">
        チャット欄
      </header>
      <main>
        <ChatList />
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
