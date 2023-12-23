import { api_key } from "@/constants/constants";
import { MovieType } from "@/types/type";
import React from "react";

export function FetchMovie(
  setState: React.Dispatch<React.SetStateAction<MovieType[]>>,
  movieType: string,
  params?: string
) {
  fetch(
    `https://api.themoviedb.org/3/${movieType}?api_key=${api_key}&${params}`
  )
    .then((res) => res.json())
    .then((data) => {
      setState(data.results);
    });
}
