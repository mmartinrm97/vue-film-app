import moviesApi from '@/api/movies.api'
import type { Movie } from '../types/movie'

export const useGetMoviesApi = async (): Promise<Movie[]> => {
  const { data } = await moviesApi.get<Movie[]>('/movies')
  return data
}
