"use client";
import { Swiper, useSwiper } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";
type PropsTypes = {
  children: React.ReactNode;
  title?: string;
  slidetype: "companies_logo" | "portrait" | "landscape" | "bigCard";
  className?: string;
};

export default function Slide(props: PropsTypes) {
  return (
    <div className={`flex flex-col gap-4  my-3    ${props.className}`}>
      {props.title && <p className="font-semibold text-lg "> {props.title} </p>}

      <div className="">
        {props.slidetype === "portrait" && (
          <div className="relative">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              className=""
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 4,
                },
                692: {
                  slidesPerView: 3,
                },
                918: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 5,
                },
              }}
            >
              {props.children}
              <SwiperNavButton />
            </Swiper>
          </div>
        )}
        {props.slidetype === "companies_logo" && (
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            className=""
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              429: {
                slidesPerView: 3,
              },
              692: {
                slidesPerView: 4,
              },
              918: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
              1440: {
                slidesPerView: 7,
              },
            }}
          >
            {props.children}
            <SwiperNavButton />
          </Swiper>
        )}
        {props.slidetype === "landscape" && (
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            className=""
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              850: {
                slidesPerView: 3,
              },
              1350: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 4,
              },
              1700: {
                slidesPerView: 5,
              },
            }}
          >
            {props.children}
            <SwiperNavButton />
          </Swiper>
        )}
        {props.slidetype === "bigCard" && (
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            className=""
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              850: {
                slidesPerView: 1,
              },
              1350: {
                slidesPerView: 2,
                spaceBetween: 7,
              },
            }}
          >
            {props.children}
            <SwiperNavButton />
          </Swiper>
        )}
      </div>
    </div>
  );
}
export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-center gap-2 my-3">
      <button
        className="bg-gray-700 hover:bg-gray-500 duration-500 hover:scale-105 rounded-full p-[3px]"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="bg-gray-700 hover:bg-gray-500 duration-500 hover:scale-105 rounded-full p-[3px]"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
