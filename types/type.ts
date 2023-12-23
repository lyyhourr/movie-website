export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  name?: string;
  genres?: {
    id: number;
    name: string;
  }[];
  tagline?: string;
  spoken_languages?: {
    name: string;
    english_name: string;
    iso_639_1: string;
  }[];
  runtime?: string;
  production_companies?:
    | {
        id: number;
        logo_path: string;
        name: string;
        original_country: string;
      }[]
    | undefined;
  homepage?: string;
};
export type HeroType = {
  title: string;
  time: string;
  description: string;
  image: string;
  trailer?: string;
};
