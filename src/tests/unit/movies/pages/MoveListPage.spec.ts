import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieListPage from '@/movies/pages/MoveListPage.vue'

describe('MovieListPage page', () => {
  it('renders the title', () => {
    const wrapper = mount(MovieListPage)
    expect(wrapper.text()).toContain('Vue Movie App')
  })


  it('renders the component with initial state', () => {
    const wrapper = mount(MovieListPage)
    // Verifica que el componente se ha renderizado correctamente
    expect(wrapper.exists()).toBe(true)

    // Verifica que el botón de alternancia de modo oscuro esté presente
    const darkModeButton = wrapper.find('button')
    expect(darkModeButton.exists()).toBe(true)

    // Verifica que el botón inicialmente muestra el ícono SunIcon
    expect(darkModeButton.findComponent({ name: 'SunIcon' }).exists()).toBe(true)
  })

  it('toggles dark/light mode when button is clicked', async () => {
    const wrapper = mount(MovieListPage)

    const darkModeButton = wrapper.find('button')

    // Verifica que el botón inicialmente muestra el ícono SunIcon
    expect(darkModeButton.findComponent({ name: 'SunIcon' }).exists()).toBe(true)

    // Simula un clic en el botón
    await darkModeButton.trigger('click')

    // Verifica que el botón ahora muestre el ícono MoonIcon después del clic
    expect(darkModeButton.findComponent({ name: 'MoonIcon' }).exists()).toBe(true)

    // Realiza otro clic para alternar de nuevo a SunIcon
    await darkModeButton.trigger('click')

    // Verifica que el botón muestre SunIcon nuevamente
    expect(darkModeButton.findComponent({ name: 'SunIcon' }).exists()).toBe(true)
  })

})
