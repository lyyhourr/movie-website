import { moives_genres } from "@/constants/constants";

export default function Genres(props: { genre: number[] }) {
    return (
        <p className="txt-sm text-gray-600 ">
            {moives_genres.map(
                (gen, i) => gen.id === props.genre[0] && (<span key={i}> {gen.name}</span>)
            )}{" "}
            &#8226;
            {moives_genres.map(
                (gen, i) => gen.id === props.genre[1] && (<span key={i}> {gen.name}</span>)
            )}
        </p>
    )
}