import { useFilteredMovies } from '@/movies/composables'
import type { Movie, MovieFilter } from '@/movies/types'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'

describe('useFilteredMovies', () => {
  const movies = ref<Movie[]>([
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
    }
  ])

  it('should return all movies when no filters are applied', () => {
    const filter: MovieFilter = {
      genre: [],
      name: '',
      description: ''
    }

    const { filteredMovies } = useFilteredMovies(filter, movies)
    expect(filteredMovies.value).toEqual(movies.value)
  })

  it('should filter movies by genre', () => {
    const filter: MovieFilter = { name: '', description: '', genre: ['Drama'] }
    const { filteredMovies } = useFilteredMovies(filter, movies)
    const expectedMovies = movies.value.filter((movie) => movie.genre.includes('Drama'))
    expect(filteredMovies.value).toEqual(expectedMovies)
  })

  it('should filter movies by name', () => {
    const filter: MovieFilter = { name: 'Movie 1', description: '', genre: [] }
    const { filteredMovies } = useFilteredMovies(filter, movies)
    const expectedMovies = movies.value.filter((movie) => movie.title.includes('Movie 1'))
    expect(filteredMovies.value).toEqual(expectedMovies)
  })

  it('should filter movies by description', () => {
    const filter: MovieFilter = { name: '', description: 'Description 1', genre: [] }
    const { filteredMovies } = useFilteredMovies(filter, movies)
    const expectedMovies = movies.value.filter((movie) =>
      movie.description.includes('Description 1')
    )
    expect(filteredMovies.value).toEqual(expectedMovies)
  })

  it('should filter movies by name and description', () => {
    const filter: MovieFilter = { name: 'Movie 1', description: 'Description 1', genre: [] }
    const { filteredMovies } = useFilteredMovies(filter, movies)
    const expectedMovies = movies.value.filter(
      (movie) => movie.title.includes('Movie 1') && movie.description.includes('Description 1')
    )
    expect(filteredMovies.value).toEqual(expectedMovies)
  })

  it('should filter movies by name, description and genre', () => {
    const filter: MovieFilter = {
      name: 'Movie 1',
      description: 'Description 1',
      genre: ['Action']
    }
    const { filteredMovies } = useFilteredMovies(filter, movies)
    const expectedMovies = movies.value.filter(
      (movie) =>
        movie.title.includes('Movie 1') &&
        movie.description.includes('Description 1') &&
        movie.genre.includes('Action')
    )
    expect(filteredMovies.value).toEqual(expectedMovies)
  })
})
