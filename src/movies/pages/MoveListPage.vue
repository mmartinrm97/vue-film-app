<template>
  <div class="flex flex-col gap-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-semibold text-gray-900 dark:text-gray-50">Vue Movie App</h1>
      <button
        @click="toggleDarkMode()"
        class="rounded  bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-700 focus:outline-none dark:bg-sky-300 dark:text-sky-950 dark:hover:bg-sky-200"
      >
        <SunIcon v-show="isDarkMode" />
        <MoonIcon v-show="!isDarkMode" />
      </button>
    </div>
    <div class="my-6">
      <GenreFilter :filters="filters" @updateFilters="updateFilters" />
    </div>
    <Suspense>
      <MovieList :filters="filters" />
      <template #fallback>
        <div v-if="error">
          <MovieListError :error="error" />
        </div>
        <div v-else>
          <MovieListLoading />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import GenreFilter from '@/movies/components/GenreFilter.vue'
import MovieList from '@/movies/components/MovieList.vue'
import { useDark, useToggle } from '@vueuse/core'
import { onErrorCaptured, reactive, ref } from 'vue'
import type { MovieFilter } from '@/movies/types/movie'
import SunIcon from '@/assets/icons/SunIcon.vue'
import MoonIcon from '@/assets/icons/MoonIcon.vue'
import MovieListLoading from '@/movies/components/MovieListLoading.vue'
import MovieListError from '@/movies/components/MovieListError.vue'
import { AxiosError } from 'axios'

const isDarkMode = useDark({
  disableTransition: false
})
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
