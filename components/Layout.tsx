import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Slide from "@/components/Slide";
import React, { useEffect, useState } from "react";
import { api_key, moives_genres } from "@/constants/constants";
import { HeroType, MovieType } from "@/types/type";
import Link from "next/link";
import Hero from "@/components/Hero";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Genres = (genre: number[]) => (
  <p className="txt-sm text-gray-600 text-center">
    {moives_genres.map(
      (gen, i) => gen.id === genre[0] && (<span key={i}> {gen.name}</span>)
    )}{" "}
    &#8226;
    {moives_genres.map(
      (gen, i) => gen.id === genre[1] && (<span key={i}> {gen.name}</span>)
    )}
  </p>
)
const Description = (desc: string) => (
  <div className="absolute top-0 hidden md:block  w-full group-hover:translate-y-0 duration-500 h-full bg-black bg-opacity-80    text-white -translate-y-full  ">
    <div className="mt-5 w-[82%] mx-auto">
      <p className="font-bold  text-white mb-4">OVERVIEW: </p>
      <p className="text-sm  text-opacity-80 text-gray-300 ">
        {desc.length > 250 ? desc.slice(0, 250) + " etc..." : desc}
      </p>
    </div>
  </div>
);

export const LandscapeSlideLayout = (movie: MovieType[], title: string, isTv?: boolean) => (
  <Slide title={title} slidetype="landscape" className="">
    {movie.map((item, index) => item.backdrop_path && (
      <SwiperSlide key={index}>
        <Link
          className="mx-[5%]  ml-3  py-2 flex justify-center group cursor-pointer"
          href={`/${isTv ? "tv" : "movie"}/${item.id}`}
        >
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : "/blank.png"}
              width={10000000}
              height={10000000}
              className="bg-transparent w-full h-[150px] lg:w-[3000px] lg:h-[200px] rounded-2xl object-fill "
              alt={`slide image`}
            />
            <div>
              <p className="font-bold">
                {item.title ? item.title : item.name}{" "}
              </p>
              {Genres(item.genre_ids)}
            </div>
          </div>
          {Description(item.overview)}
        </Link>
      </SwiperSlide>
    ))}
  </Slide>
);

export const LandscapeSlideWithNumberLayout = (
  movie: MovieType[],
  title: string
) => (
  <Slide title={title} slidetype="landscape" className="">
    {movie.map((item, index) =>
      item.backdrop_path &&
      (<SwiperSlide key={index}>
        <Link
          className="flex  items-center ml-3  py-2  justify-center gap-2 mx-[5%] group cursor-pointer"
          href={`/movie/${item.id}`}
        >
          <p className="text-5xl font-bold"> {index + 1}</p>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            width={10000000}
            height={10000000}
            className="bg-transparent w-[100px] h-[130px] lg:w-[150px] lg:h-[200px] rounded-2xl object-fill  "
            alt={`swiper-slide-`}
          />
          <div className="flex flex-col gap-3 text-sm">
            <p className="font-bold text-base">{item.original_title}</p>
            {Genres(item.genre_ids)}
            <p className="text-xs">
              Release date:{" "}
              <span className="text-gray-500 text-[11px]">
                {" "}
                {item.release_date}{" "}
              </span>
            </p>
            <p>⭐ {item.vote_average} </p>
          </div>
        </Link>
      </SwiperSlide>)
    )}

  </Slide>
);
export const PortraitSlideLayout = (movie: MovieType[], title: string) => (
  <Slide title={title} slidetype="portrait">
    {movie.map((item, i) => item.poster_path && (
      <SwiperSlide key={i}>
        <Link className="group duration-500 cursor-pointer" href={`/movie/${item.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            width={10000000}
            height={10000000}
            className="bg-transparent w-[200px] hover:scale-105 duration-500 h-[300px] sm:w-[220px]  sm:h-[320px] lg:w-[250px] lg:h-[350px] xl:w-[300px] xl:h-[420px]  rounded-xl object-fill mx-auto "
            alt={`swiper-slide-${item}`}
          />
          {Description(item.overview)}
        </Link>
      </SwiperSlide>
    ))}
  </Slide>
);

export const PortraitLayout = (movie: MovieType[]) => (
  < >
    {movie.map((item, i) => item.poster_path && (
      <div key={i}>
        <Link className="group duration-500 cursor-pointer" href={`/movie/${item.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            width={10000000}
            height={10000000}
            className="bg-transparent  h-full md:hover:scale-105 duration-500   rounded-xl object-fill mx-auto "
            alt={`swiper-slide-${item}`}
          />
        </Link>
      </div>
    ))}
  </>
)


export const HeroLayout = (hero: HeroType[]) => (
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 1000 }}
    speed={800}
  >
    {hero.map((item, index) => (
      <SwiperSlide key={index} className="">
        <Hero
          title={item.title}
          time={item.time}
          description={item.description}
          image={item.image}
          trailer={item.trailer}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export const LoadingText = () => (
  <div className='animate-pulse h-screen w-screen'>
    <p className='text-3xl text-center content-center'>Loading Screen...</p>
  </div>
)

export const MenuMoviesLayout = (title: string, movieType?: string, api_query?: string) => {

  const [movies, setMovies] = useState<MovieType[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/${movieType}?api_key=${api_key}&${api_query}&page=${page}`)
      .then(res => res.json())
      .then(data => { setMovies(data.results), setIsLoading(false) })
  }, [page])
  useEffect(() => {
    movies.length > 0 && setIsLoading(false)
  }, [movies])
  return (
    <div className='mt-[70px] mx-auto text-center text-3xl'>
      {isLoading && LoadingText()}
      {!isLoading && (
        <>
          <p className='text-4xl my-5 sm:my-[50px] font-semibold md:font-bold'> {title} </p>

          <div className='grid grid-cols-2 gap-3 mx-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4  '>
            {PortraitLayout(movies)}
          </div>
          <div className="w-full flex items-center justify-center gap-2 my-3">
            <button
              className={`bg-gray-700 hover:bg-gray-500 duration-500 hover:scale-105 rounded-full p-[3px] ${page === 1 && "opacity-30 hover:cursor-not-allowed"}`}
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-500 duration-500 hover:scale-105 rounded-full p-[3px]"
              onClick={() => setPage(p => p + 1)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </>
      )}
    </div>
  )
}