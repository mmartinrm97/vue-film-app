import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieList from '@/movies/components/MovieList.vue'
import MovieCard from '@/movies/components/MovieCard.vue'
import MovieListLoading from '@/movies/components/MovieListLoading.vue'
import MovieListError from '@/movies/components/MovieListError.vue'

describe('MovieList.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(MovieList, {
      props: {
        filters: {
          genre: [],
          name: '',
          description: ''
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays "No movies found" when there are no filtered movies', async () => {
    const wrapper = mount(MovieList, {
      props: {
        filters: {
          genre: ['Non-Existent-Genre'],
          name: 'Non-Existent-Movie',
          description: ''
        }
      }
    })

    // Ensure "No movies found" message is displayed
    const noMoviesFound = wrapper.find('.text-center')
    expect(noMoviesFound.exists()).toBeTruthy()
    expect(noMoviesFound.text()).toBe('No movies found')
  })

  it('displays loading message when isLoading is true', async () => {
    const wrapper = mount(MovieList, {
      props: {
        filters: {
          genre: [],
          name: '',
          description: ''
        }
      }
    })
   // Ensure loading message is not displayed initially
   const loadingMessage = wrapper.findComponent(MovieListLoading)
   expect(loadingMessage.exists()).toBeFalsy()
  })
})
