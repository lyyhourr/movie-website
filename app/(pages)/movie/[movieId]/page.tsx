"use client"
import Button from '@/components/Button';
import { LandscapeSlideLayout, LandscapeSlideWithNumberLayout, PortraitSlideLayout } from '@/components/Layout';
import { api_key } from '@/constants/constants';
import { FetchMovie } from '@/lib/Fetch';
import { MovieType } from '@/types/type';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaPlayCircle } from 'react-icons/fa';

export default function MoviePage({ params }: { params: { movieId: string } }) {
    const [movie, setMovies] = useState<MovieType>()
    const [isLoading, setLoading] = useState(true)
    const [relatedMovies, setRelatedMovies] = useState<MovieType[]>([]);
    const [youMayLikeMovies, setYouMayLikeMovies] = useState<MovieType[]>([]);
    const [recommendedMovies, setRecommendedMovies] = useState<MovieType[]>([]);
    const [playingVdo, setPlayingVdo] = useState(false)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data), setLoading(false)
            })
        FetchMovie(setYouMayLikeMovies, `movie/${params.movieId}/similar`, "")
        FetchMovie(setRecommendedMovies, `movie/${params.movieId}/recommendations`)
        FetchMovie(setRelatedMovies, `movie/${params.movieId}/similar`, "page=2")
    }, [])
    function handlePlay() {
        setPlayingVdo(true)
        setTimeout(() => {
            toast.error("couldn't play the video ", { duration: 3000 })
            setPlayingVdo(false)
        }, 3000);
    }
    return (
        <div className={` ${isLoading && "animate-pulse"} mt-[80px]`}>
            <div className=' grid lg:grid-cols-5 gap-5'>
                <div className='relative col-span-3  w-full'>
                    <Image
                        src={playingVdo ? "/blank.png" : movie?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}` : "/blank.png"}
                        width={10000000}
                        height={10000000}
                        alt='movie bg'
                        className={`${playingVdo && "animate-pulse"} w-full lg:h-[500px] xl:h-[625px] xl:w-[110%] mx-auto  rounded-lg`}
                    />
                    {
                        // playingVdo && <p className={` ${playingVdo && "animate-pulse"} absolute text-lg  text-black left-[40%] top-[40%] lg:left-[45%]`}>Loading Video...</p>
                        playingVdo && <p className={` ${playingVdo && "animate-pulse"} absolute text-lg flex justify-center items-center gap-2 text-black left-[40%] top-[40%] `}>
                            <Loader2 className='text-bue-500 animate-spin' />
                            Loading...
                        </p>
                    }
                    {
                        !playingVdo && (
                            <Button
                                color="green"
                                classname={`p-2 lg:p-4 text-lg  lg:text-2xl absolute left-[40%] top-[40%] lg:left-[45%] ${movie?.backdrop_path ? "block" : "hidden"}`}
                                icon={<FaPlayCircle />}
                                onClick={handlePlay}
                            >
                                PLAY
                            </Button>
                        )
                    }
                    {!movie?.backdrop_path && (<p className={` animate-pulse absolute text-lg  text-black left-[40%] top-[40%] lg:left-[45%]`}>Loading ...</p>)}
                </div>
                <div className=' flex flex-col gap-4 text-gray-500 lg:gap-10  ml-4 xl:ml-0 col-span-2'>
                    <p className='text-2xl lg:text-5xl text-center text-white font-bold mt-3'>{movie?.title}</p>
                    <p className=' text-sm'>{movie?.tagline}</p>
                    <p>Duration : {movie?.runtime} minutes</p>
                    <p className=''>Genres : {movie?.genres?.map((gen, i) => i === 0 ? (<span key={i}> {gen.name}</span>) : (<span key={i}> &#8226; {gen.name}</span>))}</p>
                    <p>Spoken Language : {movie?.spoken_languages?.map((lang) => lang.english_name)}</p>
                    <p>Release date : {movie?.release_date}</p>
                    <p> Rating : {movie?.vote_average} ⭐</p>
                    <p className='hidden xl:block text-gray-400 text-sm lg:text-xl'>Storyline : {movie?.overview}</p>
                </div>
                <div>
                </div>
            </div>
            <p className='ml-4 xl:hidden text-gray-400 text-sm lg:text-xl my-4'>Storyline : {movie?.overview}</p>

            <div className='flex items-center justify-evenly  mx-3'>
                <p className=' sm:text-xl sm:font-bold'>Companies:</p>
                <div className="flex items-center justify-center gap-5">

                    {
                        movie?.production_companies?.slice(0, 2).map((item, i) => item.logo_path && (
                            <div key={i} className='relative' >
                                <Image
                                    src={item?.logo_path ? `https://image.tmdb.org/t/p/w500/${item.logo_path}` : "/blank.png"}
                                    width={10000000}
                                    height={100000}
                                    alt='company logo'
                                    className={`${!item?.logo_path && "animate-pulse"} w-[100px] h-[50px] sm:w-[150px] sm:h-[100px] p-[5px] rounded-lg  z-100 bg-white text-black`}
                                />
                                {
                                    !item?.logo_path && <p className={` absolute text-sm  text-black left-3 top-1 md:top-7 `}>No Image...</p>
                                }
                            </div>))
                    }
                </div>
            </div >

            <div className='my-5 ml-2'>
                {relatedMovies.length !== 0 && PortraitSlideLayout(relatedMovies, "Related Movies")}
                {youMayLikeMovies.length !== 0 && LandscapeSlideWithNumberLayout(youMayLikeMovies, "You may also like")}
                {recommendedMovies.length !== 0 && LandscapeSlideLayout(recommendedMovies, "Recommendations")}
            </div>
        </div >
    )
}
