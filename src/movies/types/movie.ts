export type Movie = {
  id: string
  title: string
  description: string
  genre: string
  url: string
  movie_cover: string
  duration: number
}

export type MovieFilter = {
  genre: string[]
  name: string
  description: string
}

export type MovieGenre = {
  id: string
  name: string
}

