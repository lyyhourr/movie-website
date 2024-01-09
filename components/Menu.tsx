"use client";
import { moives_genres, universe, yearsArray } from "@/constants/constants";
import { useGlobalHook } from "@/global-hooks/globalHook";
import Link from "next/link";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Menu() {
  const showMenu = useGlobalHook((item) => item.showMenu);
  const setShowMenu = useGlobalHook((item) => item.setShowMenu);
  interface Routes {
    [key: string]: string | number;
  }
  const MenuRoutes = (title: string, routes: Routes[], page: string) => (
    <div className="border-b border-gray-600 py-2 my-1">
      <p className="text-red-600 font-semibold text-lg md:text-2xl ">{title}</p>
      <div className="grid grid-cols-2 gap-2 items-center justify-center mt-2">
        {routes.map((item, i) => (
          <Link
            key={i}
            href={`/${page}/${item.id}`}
            className=" hover:font-bold duration-500 hover:underline hover:text-red-500"
            onClick={() => setShowMenu(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav
      className={`w-[330px]  fixed h-screen bg-[#212121]  duration-500 rounded-tl-xl ${showMenu ? "right-0 z-50" : "-right-full z-[-1]"
        }`}
    >
      <div className="p-2 flex flex-col gap-4 ">
        <div
          className="bg-white hover:bg-red-500 hover:text-white hover:scale-105 cursor-pointer transition-all text-black rounded-3xl p-2 w-fit ml-auto flex gap-1 items-center"
          onClick={() => setShowMenu(false)}
        >
          <p className="text-sm">Close</p>
          <IoMdCloseCircle className="w-[20px] h-[20px]" />
        </div>
        <div className="border-b border-gray-600  text-center">
          <Link
            href={`/`}
            className=" text-red-600 font-semibold text-2xl hover:underline duration-500 "
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
        </div>
        {MenuRoutes("Movies", moives_genres, "genre")}
        {MenuRoutes("Universe", universe, "universe")}
        {MenuRoutes("Year", yearsArray, "year")}
      </div>
    </nav>
  );
}
