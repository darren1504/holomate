"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="shadow-t-lg fixed bottom-0 left-0 right-0 mx-auto flex h-20 max-w-md items-center justify-around bg-sky-50 py-2">
      <div>
        <Link href="/" className="flex flex-col items-center">
          <Image
            src={currentPath === "/" ? "/home_selected.svg" : "/home.svg"}
            alt="home"
            width={40}
            height={40}
            className="my-1"
          ></Image>
          <p
            className={`text-sm ${currentPath === "/" ? "font-bold text-blue-400" : ""}`}
          >
            ホーム
          </p>
        </Link>
      </div>
      <div>
        <Link href="/chat" className="flex flex-col items-center">
          <Image
            src={currentPath === "/chat" ? "/chat_selected.svg" : "/chat.svg"}
            alt="chat"
            width={40}
            height={40}
            className="my-1"
          ></Image>
          <p
            className={`text-sm ${currentPath === "/chat" ? "font-bold text-blue-400" : ""}`}
          >
            チャット
          </p>
        </Link>
      </div>
      <div>
        <Link href="/room" className="flex flex-col items-center">
          <Image
            src={
              currentPath === "/room"
                ? "/community_selected.svg"
                : "/community.svg"
            }
            alt="community"
            width={40}
            height={40}
            className="my-1"
          ></Image>
          <p
            className={`text-sm ${currentPath === "/room" ? "font-bold text-blue-400" : ""}`}
          >
            枠立て
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={
            currentPath === "/profile"
              ? "/profile_selected.svg"
              : "/profile.svg"
          }
          alt="profile"
          width={24}
          height={24}
          className="my-2"
        ></Image>
        <p
          className={`text-sm ${currentPath === "/profile" ? "font-bold text-blue-400" : ""}`}
        >
          マイページ
        </p>
      </div>
    </div>
  );
};

export default Navbar;
