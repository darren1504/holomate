"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { Event } from "@/types/data";

function RoomConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "";
  const type = searchParams.get("type") || "";
  const date = searchParams.get("date") || "";
  const location = searchParams.get("location") || "";
  const people = searchParams.get("people") || "";

  const [eventList, setEventList] = useState<Event[]>([]);

  const handleConfirm = () => {
    const newEvent = { name, type, date, location, people };
    setEventList([...eventList, newEvent]);
    router.push("/room");
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-[url('/main-bg.png')] bg-cover p-4">
      <header>
        <h1 className="my-4 text-center text-xl font-bold text-sky-50">
          イベント設定
        </h1>
      </header>
      <main>
        <div className="mx-auto flex h-80 max-w-sm flex-col justify-center rounded-lg bg-sky-50 p-6 shadow">
          <p>イベント名：{name}</p>
          <p className="mt-4">イベント種類：{type}</p>
          <p className="mt-4">日程：{date}</p>
          <p className="mt-4">場所：{location}</p>
          <p className="mt-4">人数：{people}人</p>
        </div>
        <p className="my-12 text-center text-lg font-bold text-sky-50">
          上記を確認して枠を立てますか？
        </p>
        <div className="flex flex-col items-center justify-around">
          <button
            className="w-52 rounded-xl bg-sky-50 px-4 py-4 font-bold"
            onClick={() => router.back()}
          >
            取り消し
          </button>
          <button
            className="mt-6 w-52 rounded-xl bg-blue-500 px-4 py-4 font-bold text-white"
            onClick={handleConfirm}
          >
            枠を立てる
          </button>
        </div>
      </main>
    </div>
  );
}

export default function RoomConfirm() {
  return (
    <Suspense
      fallback={<p className="text-center text-white">読み込み中...</p>}
    >
      <RoomConfirmContent />
    </Suspense>
  );
}
