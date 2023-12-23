"use client";
import { MenuMoviesLayout } from '@/components/Layout';
import { moives_genres } from '@/constants/constants'


export default function GenresMovies({ params }: { params: { genreId: string } }) {
    const name = moives_genres.filter(item => item.id.toString() === params.genreId)
    return MenuMoviesLayout(`${name[0].name} movies`, "discover/movie", `with_genres=${params.genreId}`)
}
