export const moives_genres = [
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
  { id: 28, name: "Action" },
];
export const social_icon = [
  {
    href: "https://www.facebook.com/profile.php?id=100077547875626",
    image: "/icons/facebook.png",
  },
  {
    href: "https://www.instagram.com/lyhourrr_m/?next=%2F",
    image: "/icons/instagram.png",
  },
  {
    href: "https://t.me/lyhuamam",
    image: "/icons/telegram.png",
  },
  {
    href: "https://www.tiktok.com/@lyyhour10?_t=8iNDKhv1POh&_r=1",
    image: "/icons/tiktok.png",
  },
];

export const universe = [
  {
    id: "Marvel",
    name: "Universe of Marvel",
  },
  {
    id: "DC",
    name: "Universe of DC",
  },
];

const currentYear = new Date().getFullYear();
export const yearsArray = Array.from({ length: 8 }, (_, index) => ({
  name: currentYear - index,
  id: currentYear - index,
}));

export const api_key = "369e0f255bfdafc2ab625be2c4466086";
export const companies = [
  "universal",
  "disney",
  "marvel",
  "wb",
  "netflix",
  "cn",
  "dreamwork",
  "hbomax",
  "dc",
  "paramount",
];
export const heros = [
  {
    title: "spider-man into the spider-verse",
    time: "1h 57mn 2022 Fantasy Action",
    description: ` "The Death of Spider-Man" and Spider-Men that served as Miles Morales' debut, the film's story follows Miles as he becomes the new Spider-Man and joins other Spider-People from various paralle`,
    image: "/banners/spider_man.jpg",
    trailer: "v=shW9i6k8cB0",
  },
  {
    title: "Advenger 4",
    time: "3h 05mn 2019 Superhero Thriller",
    description:
      "  Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.",
    image: "/banners/advenger.jpg",
    trailer: "v=TcMBFSGVi1c",
  },
  {
    title: "mortal combat",
    time: "1h 50mn 2022 Fantasy Action",
    description:
      "  After killing the attackers, Hanzo fights Bi-Han, who stabs him with his own kunai. Hanzo dies, and his soul is condemned to the Netherrealm. Raiden, God of Thunder, later takes Hanzo's surviving infant daughter to safety.",
    image: "/banners/mortal_kombat.jpg",
    trailer: "v=-BQPKD7eozY",
  },
];
