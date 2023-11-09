<template>
  <div
    class="h-full overflow-hidden rounded-lg bg-sky-50 shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-xl dark:overflow-hidden dark:bg-sky-950 dark:shadow-lg"
  >
    <img class="h-72 w-full object-cover" :src="movie.movie_cover" :alt="movie.title" />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ movie.title }}</h3>
      <p class="text-sm text-gray-700 dark:text-gray-300">{{ movie.description }}</p>
      <div class="mt-2">
        <span
          class="mr-1 inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          v-for="genre in movie.genre.split(', ')"
          :key="genre"
        >
          {{ genre }}
        </span>
      </div>
      <div class="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Duration: {{ movie.duration }} min.
      </div>
      <a
        :href="movie.url"
        target="_blank"
        class="mt-2 inline-block text-sm text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
        >Ver en IMDb</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '../types'

type Props = {
  movie: Movie
}

defineProps<Props>()
</script>
