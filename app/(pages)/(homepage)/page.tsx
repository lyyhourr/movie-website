"use client";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Slide from "@/components/Slide";
import React, { useState } from "react";
import { companies, heros } from "@/constants/constants";
import { MovieType } from "@/types/type";
import {
  HeroLayout,
  LandscapeSlideLayout,
  LandscapeSlideWithNumberLayout,
  PortraitSlideLayout,
} from "@/components/Layout";
import { FetchMovie } from "@/lib/Fetch";

export default function Home() {
  const [justReleaseMovies, setjustReleaseMovies] = useState<MovieType[]>([]);
  const [popularOfTheWeekMovies, setPopularOfTheWeekMovies] = useState<
    MovieType[]
  >([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [tvSeries, setTvSeries] = useState<MovieType[]>([]);
  const [koreanMovies, setKoreanMovies] = useState<MovieType[]>([]);
  const [chinaMovies, setChinaMovies] = useState<MovieType[]>([]);
  const [cartoon, setCartoon] = useState<MovieType[]>([]);

  React.useEffect(() => {
    FetchMovie(setTvSeries, `tv/airing_today`);
    FetchMovie(setjustReleaseMovies, `movie/upcoming`);
    FetchMovie(setPopularOfTheWeekMovies, `movie/top_rated`);
    FetchMovie(setMovies, `movie/now_playing`);
    FetchMovie(
      setKoreanMovies,
      `search/movie`,
      "query=k&include_adult=false&language=korea&page=2&region=korea"
    );
    FetchMovie(
      setChinaMovies,
      `search/movie`,
      "query=china&include_adult=false&language=en-US&page=2"
    );
    FetchMovie(
      setCartoon,
      `discover/movie`,
      "with_genres=16&sort_by=popularity.desc&language=en-US&page=1"
    );
  }, []);
  const korea = koreanMovies.filter(item => item.genre_ids.length > 2);
  return (
    <div className="">
      {HeroLayout(heros)}

      <div className="ml-2">
        <Slide slidetype="companies_logo">
          {companies.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" bg-black rounded-xl mx-2 cursor-pointer"
            >
              <Image
                src={`/company_logo/${item}.png`}
                width={10000000}
                height={10000000}
                className="bg-transparent  h-[90px] lg:h-[120px] object-contain   my-[10px]"
                alt="company logo"
              />
            </SwiperSlide>
          ))}
        </Slide>
        {PortraitSlideLayout(justReleaseMovies, "Just Released")}
        {LandscapeSlideWithNumberLayout(popularOfTheWeekMovies, "Top Rated")}
        {LandscapeSlideLayout(movies, "Popular of the week")}
        {LandscapeSlideWithNumberLayout(cartoon, "For Kids")}
        {PortraitSlideLayout(chinaMovies, "Chinese Series")}
        {LandscapeSlideLayout(korea, "Korean Series")}
        {LandscapeSlideLayout(tvSeries, "TV Series", true)}
      </div>
    </div>
  );
}
