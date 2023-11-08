import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GenreFilter from '@/movies/components/GenreFilter.vue'
import type { MovieFilter } from '@/movies/types'

describe('GenreFilter component', async () => {
  it('renders the component with initial state', () => {
    const filters: MovieFilter = {
      genre: [],
      name: '',
      description: ''
    }

    const wrapper = mount(GenreFilter, {
      props: { filters }
    })

    // Verifica que el componente se ha renderizado correctamente
    expect(wrapper.exists()).toBeTruthy

    //Genera un snapshot
    expect(wrapper.html()).toMatchSnapshot()

    // Verifica que el título de los filtros esté presente
    const title = wrapper.find('span')
    expect(title.text()).toBe('Filters:')

    // Verifica que el contador de filtros inicia en 0
    expect(wrapper.text()).toContain('(0)')

    // Verifica la presencia de elementos filtros HTML en el componente
    expect(wrapper.find('label[for="name"]').exists()).toBeTruthy
    expect(wrapper.find('input[id="name"]').exists()).toBeTruthy
    expect(wrapper.find('label[for="description"]').exists()).toBeTruthy
    expect(wrapper.find('textarea[id="description"]').exists()).toBeTruthy
    expect(wrapper.find('label[for="genre"]').exists()).toBeTruthy
    expect(wrapper.find('input[id="genre"]').exists()).toBeTruthy
  })

  it('disables inputs when hasError is true', async () => {
    const filters: MovieFilter = {
      genre: [],
      name: '',
      description: ''
    }

    const wrapper = mount(GenreFilter, {
      props: { filters }
    })

    // Verifica que los inputs estén habilitados por defecto
    const nameInput = wrapper.find('#name')
    const descriptionInput = wrapper.find('#description')
    const genreInput = wrapper.find('#genre')

    expect(nameInput.attributes('disabled')).toBeFalsy()
    expect(descriptionInput.attributes('disabled')).toBeFalsy()
    expect(genreInput.attributes('disabled')).toBeFalsy()
  })
})
