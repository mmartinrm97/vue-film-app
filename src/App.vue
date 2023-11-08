<template>
  <div class="bg-gray-100 dark:bg-gray-800 min-h-screen">
    <div class="max-w-6xl mx-auto p-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold text-gray-900 dark:text-gray-50">Movie Filter App</h1>
        <button
          @click="toggleDarkMode()"
          class="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <SunIcon v-show="isDarkMode" />
          <MoonIcon v-show="!isDarkMode"/>
        </button>
      </div>
      <div class="my-6">
        <GenreFilter :filters="filters" @updateFilters="updateFilters" />
      </div>
      <main>
        <MovieList :filters="filters" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import GenreFilter from './components/GenreFilter.vue'
import MovieList from './components/MovieList.vue'
import { useDark, useToggle } from '@vueuse/core'
import { reactive } from 'vue'
import type { MovieFilter } from './movies/types/movie'
import SunIcon from '@/assets/icons/SunIcon.vue'
import MoonIcon from '@/assets/icons/MoonIcon.vue'

const isDarkMode = useDark()
const toggleDarkMode = useToggle(isDarkMode)

const filters = reactive({
  genre: [],
  name: '',
  description: ''
})

const updateFilters = (newFilters: MovieFilter) => {
  Object.assign(filters, newFilters)
}
</script>

<style scoped></style>
