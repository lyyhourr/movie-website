"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalHook } from "@/global-hooks/globalHook";
import Search from "./Search";

export default function Navbar() {
  const setShowMenu = useGlobalHook((item) => item.setShowMenu);
  const [toggleSearch, setToggleSearch] = useState(false)
  return (
    <header className="fixed w-full top-0">
      <nav className="bg-transparent flex justify-between items-center md:w-[90%] mx-auto ">
        <Link href={"/"}>
          <Image width={200} height={180} alt="logo" src={"/logo/logo_w.png"} className="w-auto h-auto" />
        </Link>
        <div className="flex gap-2 items-center mr-2 md:gap-5">
          <CiSearch className="w-[30px] h-[30px] md:h-[40px] md:w-[40px] cursor-pointer " onClick={() => setToggleSearch(true)} />
          <Menu
            className="w-[30px] h-[30px] md:h-[40px] md:w-[40px] cursor-pointer "
            onClick={() => setShowMenu(true)}
          />
        </div>
      </nav>
      <div className={`fixed w-full bg-black opacity-90 py-1 md:py-2 top-0  flex items-center duration-700 ${toggleSearch ? "translate-y-0 " : "-translate-y-full"}`}>
        <Search setToggleSearch={setToggleSearch} />
      </div>
    </header>
  );
}
