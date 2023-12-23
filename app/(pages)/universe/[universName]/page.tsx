"use client"
import { MenuMoviesLayout } from '@/components/Layout'


export default function SuperHeros({ params }: { params: { universName: string } }) {

    return MenuMoviesLayout(`Universe of ${params.universName}`, "search/movie", `query=${params.universName}`)
}
