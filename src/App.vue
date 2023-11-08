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
          <MoonIcon v-show="!isDarkMode" />
        </button>
      </div>
      <div class="my-6">
        <GenreFilter :filters="filters" @updateFilters="updateFilters" />
      </div>
      <main>
        <Suspense>
          <MovieList :filters="filters" />
          <template #fallback>
            <div
              v-if="error"
              class="col-span-full text-center text-red-700 dark:text-red-300 text-xl my-4"
            >
              <div>
                <span> Error: {{ error.message }}. </span>
              </div>
            </div>
            <div v-else>
              <MovieListLoading />
            </div>
          </template>
        </Suspense>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import GenreFilter from '@/movies/components/GenreFilter.vue'
import MovieList from '@/movies/components/MovieList.vue'
import { useDark, useToggle } from '@vueuse/core'
import { onErrorCaptured, reactive, ref } from 'vue'
import type { MovieFilter } from './movies/types/movie'
import SunIcon from '@/assets/icons/SunIcon.vue'
import MoonIcon from '@/assets/icons/MoonIcon.vue'
import MovieListLoading from './movies/components/MovieListLoading.vue'
import { AxiosError } from 'axios'

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

const error = ref<Error | null>(null)
onErrorCaptured((err: any) => {
  if (err instanceof AxiosError) {
    error.value = err
  } else {
    error.value = err
  }
})
</script>

<style scoped></style>
