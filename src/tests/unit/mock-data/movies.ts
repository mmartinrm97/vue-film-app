import type { Movie } from '@/movies/types'
import { ref } from 'vue'

export const movies = ref<Movie[]>([
  {
    id: '1',
    title: 'Movie 1',
    description: 'Description 1',
    genre: 'Action, Sci-Fi',
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 140
  },
  {
    id: '2',
    title: 'Movie 2',
    description: 'Description 2',
    genre: 'Drama, Comedy, Action',
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 140
  },
  {
    id: '3',
    title: 'Movie 3',
    description: 'Description 3',
    genre: 'Biography, Drama, History',
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 220
  },
  {
    id: '4',
    title: 'Movie 4',
    description: 'Description 4',
    genre: 'Family, Fantasy',
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 120
  },
  {
    id: '5',
    title: 'Movie 5',
    description: 'Description 5',
    "genre": "Crime, Drama",
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 120
  },
  {
    id: '6',
    title: 'Movie 6',
    description: 'Description 6',
    "genre": "Adventure, Drama, Fantasy",
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 120
  },
  {
    id: '7',
    title: 'Movie 7',
    description: 'Description 7',
    genre: 'Family, Fantasy',
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 120
  },
  {
    id: '8',
    title: 'Movie 8',
    description: 'Description 8',
    "genre": "Action, Sci-Fi",
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 120
  },
  {
    id: '9',
    title: 'Movie 9',
    description: 'Description 9',
    "genre": "Action, Sci-Fi",
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 120
  },
  {
    id: '10',
    title: 'Movie 10',
    description: 'Description 10',
    genre: 'Family, Fantasy',
    url: 'https://www.imdb.com/title/tt0111161/',
    movie_cover: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1860098049/',
    duration: 140
  }
])
