"use client"
import { social_icon } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

export default function Footer() {
  function handleCopy() {
    navigator.clipboard.writeText("002560314")
    toast.success("Copied to clipboard");
    setTimeout(() => {
      toast("Buy me a coffee 🫵🫵🫵", { duration: 3000 })
    }, 2000);
  }
  return (
    <div className="border-t border-gray-500">
      <footer className="grid md:grid-cols-2 items-center w-[90%] mx-auto my-5">
        <p className=" lg:text-xl  md:w-[70%] text-gray-100">
          Explore a world of captivating narratives, thrilling adventures, and unforgettable moments.Pophorn bring you a curated collection of films that transcend boundaries and ignite your passion for storytelling.
        </p>

        <div className="flex justify-evenly items-center my-3 md:justify-center md:gap-5">
          {social_icon.map((item, i) => (
            <Link href={item.href} key={i}>
              <Image src={item.image} width={50} height={50} alt="icons" />
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center group mt-5 duration-200">

          <p className="text-center lg:text-start    cursor-pointer w-fit">
            @2023
          </p>
          <p className="text-gray-400 ml-3  font-bold hover:text-white duration-500  cursor-pointer"> Mam lyhua </p>
          <p className="group-hover:block text-sm  lg:hidden">(3th Year Student)</p>
        </div>

        <div className="flex items-center justify-center gap-5 my-5 lg:my-0">
          <Image
            src={"/icons/aba.jpeg"}
            width={45}
            height={45}
            alt="ABA"
            className="rounded-xl"
          />
          <p className="font-bold text-xl   tracking-widest">002 560 314</p>
          <button className={` py-1  hover:scale-105 bg-white text-black  duration-500 px-3 text-lg rounded-md`} onClick={handleCopy}>Copy</button>
        </div>
      </footer>
      <div className="flex justify-evenly items-center my-1   text-gray-600 md:justify-center md:gap-5 md:my-6 font-semibold">
        <p className="hover:text-white duration-300 cursor-pointer hover:scale-105">Privacy</p>
        <p className="hover:text-white duration-300 cursor-pointer hover:scale-105">Term of service</p>
        <p className="hover:text-white duration-300 cursor-pointer hover:scale-105">Language</p>
      </div>
    </div>
  );
}
