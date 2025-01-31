"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Room() {
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventPeople, setEventPeople] = useState("");

  const handleSubmit = () => {
    router.push(
      `/room/confirm?name=${eventName}&type=${eventType}&date=${eventDate}&location=${eventLocation}&people=${eventPeople}`,
    );
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-[url('/main-bg.png')] bg-cover p-4 pb-20">
      <header>
        <h1 className="my-4 text-center text-xl font-bold text-sky-50">
          イベント設定
        </h1>
      </header>
      <main>
        <div className="rounded-lg bg-sky-50 p-4 shadow">
          <label className="mb-2 block font-bold">イベント名</label>
          <input
            className="w-full rounded border border-blue-500 p-2"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <label className="mb-2 mt-4 block font-bold">イベント種類</label>
          <input
            className="w-full rounded border border-blue-500 p-2"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          />

          <label className="mb-2 mt-4 block font-bold">日程</label>
          <input
            type="date"
            className="w-full rounded border border-blue-500 p-2"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />

          <label className="mb-2 mt-4 block font-bold">場所</label>
          <input
            className="w-full rounded border border-blue-500 p-2"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />

          <label className="mb-2 mt-4 block font-bold">人数</label>
          <input
            type="number"
            className="w-full rounded border border-blue-500 p-2"
            value={eventPeople}
            onChange={(e) => setEventPeople(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-8 w-52 rounded-xl bg-sky-50 py-4 font-bold text-blue-500"
            onClick={handleSubmit}
          >
            枠を立てる
          </button>
        </div>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
