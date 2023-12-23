"use client"
import { MenuMoviesLayout } from '@/components/Layout'


export default function SuperHeros({ params }: { params: { yearId: string } }) {

    return MenuMoviesLayout(`${params.yearId} Movies`, "discover/movie", `primary_release_year=${params.yearId}`)
}
