"use client";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useGlobalHook } from "@/global-hooks/globalHook";
import React from "react";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showMenu = useGlobalHook((item) => item.showMenu);
  const setShowMenu = useGlobalHook((item) => item.setShowMenu);
  return (
    <main className="bg-transparent overflow-hidden">

      <div
        className={`w-screen h-screen fixed transition-all bg-black ${showMenu ? "z-10 opacity-80" : "z-[-1] opacity-0"
          }`}
        onClick={() => setShowMenu(false)}
      />
      <Menu />
      {children}

    </main>
  );
}
