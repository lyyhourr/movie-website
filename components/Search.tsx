import { FetchMovie } from "@/lib/Fetch";
import { MovieType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Genres from "./Genre";

export default function Search({
  setToggleSearch,
}: {
  setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    FetchMovie(setMovies, `search/movie`, `query=${search}`);
  }, [search]);
  return (
    <div className="mx-auto gap-4 my-2 z-100 overflow-auto h-screen">
      <div className="flex justify-center items-center ">
        <div className="flex items-center gap-5 justify-center bg-white text-black p-[3px] rounded-md w-fit mx-auto">
          <input
            type="text"
            className="outline-none text-sm md:text-base w-[120px] sm:w-[250px] md:w-[400px] pl-2"
            placeholder="Search movie..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="md:text-lg text-xs bg-black text-white py-1 px-1 md:px-3 hover:bg-slate-800 transition-all rounded-lg">
            Search
          </button>
        </div>

        <div
          className={`group duration-500 hover:bg-white rounded-full hover:text-black flex items-center cursor-pointer`}
          onClick={() => {
            setToggleSearch(false), setSearch("");
          }}
        >
          <IoMdCloseCircle className=" w-[25px] h-[25px] md:w-[30px] md:h-[30px] cursor-pointer p-[2px]" />
          <p className=" md:text-[0px] p-[3px] text-[0px] duration-700  group-hover:text-sm md:group-hover:text-lg">
            Close
          </p>
        </div>
      </div>

      {movies &&
        movies.slice(0, 6).map(
          (item, i) =>
            5 && (
              <Link
                key={i}
                className="flex  gap-4 items-center my-5 sm:my-10 cursor-pointer z-50"
                href={`/movie/${item.id}`}
                onClick={() => setToggleSearch(false)}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  width={1000}
                  height={1000}
                  alt={`${item.title} image`}
                  className="w-[150px] h-[75px] ml-2 sm:ml-0 sm:w-[200px] sm:h-[100px] rounded-xl "
                />
                <div className="flex flex-col gap-2 ">
                  <p className=" text-sm sm:text-base  font-semibold">
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + "..."
                      : item.title}
                  </p>
                  <Genres genre={item.genre_ids} />
                </div>
              </Link>
            )
        )}
    </div>
  );
}
