import { describe, expect, it } from 'vitest'
import { useGetGenresApi } from '../../../../movies/composables/useGetGenresApi'

describe('useGetGenresApi', () => {
  it('should fetch the generes from api', async () => {
    const result = await useGetGenresApi()
    expect(result)
  })
})
