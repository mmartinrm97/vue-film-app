<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="movie in filteredMovies" :key="movie.id">
      <div
        class="bg-white dark:bg-gray-900 shadow-lg dark:shadow-lg rounded-lg dark:overflow-hidden overflow-hidden h-full"
      >
        <img class="w-full h-72 object-cover" :src="movie.movie_cover" :alt="movie.title" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ movie.title }}</h2>
          <p class="text-gray-700 dark:text-gray-300 text-sm">{{ movie.description }}</p>
          <div class="mt-2">
            <span
              class="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-full px-2 py-1 mr-1"
              v-for="genre in movie.genre.split(', ')"
              :key="genre"
            >
              {{ genre }}
            </span>
          </div>
          <div class="mt-2 text-gray-700 dark:text-gray-300 text-sm">Duration: {{ movie.duration }} min.</div>
          <a
            :href="movie.url"
            target="_blank"
            class="text-blue-500 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 text-sm mt-2 inline-block"
            >Ver en IMDb</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import filmsApi from '../api/movies.api'
import type { MovieFilter } from '@/movies/types/movie'
import type { Movie } from '@/movies/types/movie'

type Props = {
  filters: MovieFilter
}

const props = defineProps<Props>()

const movies = ref<Movie[]>([])

const filteredMovies = computed(() => {
  return movies.value.filter((movie) => {
    const movieGenres = movie.genre.split(', ').map((genre) => genre.trim())
    const isGenreMatch = props.filters.genre.every((genre) => movieGenres.includes(genre))

    const isNameMatch =
      props.filters.name === '' ||
      movie.title.toLowerCase().includes(props.filters.name.toLowerCase())

    const isDescriptionMatch =
      props.filters.description === '' ||
      movie.description.toLowerCase().includes(props.filters.description.toLowerCase())

    return isGenreMatch && isNameMatch && isDescriptionMatch
  })
})

onMounted(async () => {
  const response = await filmsApi.get('/movies')
  movies.value = response.data
})
</script>

<style scoped></style>
