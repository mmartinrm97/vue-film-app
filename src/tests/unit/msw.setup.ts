import { HttpHandler, HttpResponse, http } from 'msw'
import { afterAll, beforeAll } from 'vitest'
import { genresMockData } from './mock-data/genres'
import { setupServer } from 'msw/node'
import { movies } from './mock-data/movies'

const apiUri = import.meta.env.VITE_API_URL

const handlers: HttpHandler[] = [
  http.get(`${apiUri}/genres`, () => {
    return HttpResponse.json(genresMockData)
  }),
  http.get(`${apiUri}/movies`, () => {
    return HttpResponse.json(movies.value)
  }),
]
const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterAll(() => server.close())
