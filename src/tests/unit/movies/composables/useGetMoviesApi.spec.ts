import { describe, expect, it } from 'vitest'
import { useGetMoviesApi } from '../../../../movies/composables/useGetMoviesApi'

describe('useGetMoviesApi', () => {
  it('should fetch the movies from api', async () => {
    const result = await useGetMoviesApi()
    expect(result)
  })
})