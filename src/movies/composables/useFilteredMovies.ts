import { computed, toRef, type Ref } from 'vue'
import type { Movie, MovieFilter } from '../types'

export function useFilteredMovies(
  filters: MovieFilter,
  movies: Ref<Movie[]> | Movie[] | (() => Movie[])
) {
  const moviesData = toRef(movies)

  const filteredMovies = computed<Movie[]>(() => {
    return moviesData.value.filter((movieData) => {
      const movieGenres = movieData.genre.split(', ').map((genre) => genre.trim())
      const isGenreMatch = filters.genre.every((genre) => movieGenres.includes(genre))

      const isNameMatch =
        filters.name === '' || movieData.title.toLowerCase().includes(filters.name.toLowerCase())

      const isDescriptionMatch =
        filters.description === '' ||
        movieData.description.toLowerCase().includes(filters.description.toLowerCase())

      return isGenreMatch && isNameMatch && isDescriptionMatch
    })
  })

  return { filteredMovies, movies }
}
