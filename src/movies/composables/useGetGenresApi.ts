import moviesApi from '@/api/movies.api'
import type { MovieGenre } from '../types'

export const useGetGenresApi = async (): Promise<MovieGenre[]> => {
  const { data } = await moviesApi.get<MovieGenre[]>('/genres')
  return data
}
