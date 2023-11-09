import { computed, ref, type Ref } from 'vue'
import type { Movie, MovieFilter } from '../types'


export function useFilteredMovies(filters: MovieFilter, movies: Ref<Movie[]> ) {
//   const movies = ref<Movie[]>([])

  const filteredMovies = computed<Movie[]>(() => {
    return movies.value.filter((movie) => {
      const movieGenres = movie.genre.split(', ').map((genre) => genre.trim())
      const isGenreMatch = filters.genre.every((genre) => movieGenres.includes(genre))

      const isNameMatch =
        filters.name === '' ||
        movie.title.toLowerCase().includes(filters.name.toLowerCase())

      const isDescriptionMatch =
        filters.description === '' ||
        movie.description.toLowerCase().includes(filters.description.toLowerCase())

      return isGenreMatch && isNameMatch && isDescriptionMatch
    })
  })

  return { filteredMovies, movies }
}
