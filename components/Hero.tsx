import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlayCircle, FaEye } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

type PropsType = {
  title: string;
  time: string;
  description: string;
  img_opacity?: "opacity-50" | "opacity-30";
  image: string;
  trailer?: string;
};

export default function Hero(props: PropsType) {
  function handleMovies(text: string, isMovie: boolean) {
    toast.loading(isMovie ? `Playing ${text}` : `Directing to ${text} Trailer`, { duration: 2000 })
    setTimeout(() => {
      toast.error(`${text} ${isMovie ? "movie" : "trailer"} video isn't avaliable right now`, { duration: 2000 })
    }, 2000);
  }
  return (
    <div className=" ">
      <Image
        src={props.image}
        width={10000}
        height={10000}
        alt="banner"
        className={`lg:h-[600px] h-[450px] md:h-[400px] object-cover xl:h-[750px] ${props.img_opacity}`}
      />

      <div className="absolute bottom-9 text-white">
        <div className="flex flex-col gap-2 xl:gap-5 w-[95%] ml-[2%] sm:w-[80%]">
          <p className="text-xl font-semibold uppercase sm:text-4xl md:text-5xl  ">
            {props.title}
          </p>
          <p className="opacity-80 md:text-lg  ">{props.time}</p>
          <p className="text-xs w-[70%] md:text-sm lg:text-base xl:text-lg">
            {props.description}
          </p>

          <div className="flex gap-2 mt-5">
            <Button
              color="green"
              classname="sm:w-[180px] sm:h-[50px] lg:w-[230px] lg:h-[60px]"
              icon={<FaPlayCircle />}
              onClick={() => handleMovies(props.title, true)}
            >
              Play Now
            </Button>
            <Button
              icon={<FaEye />}
              color="transparent"
              classname="sm:w-[180px] sm:h-[50px] lg:w-[230px] lg:h-[60px]"
              onClick={() => handleMovies(props.title, false)}
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
