<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="movie in filteredMovies" :key="movie.id">
      <MovieCard :movie="movie" />
    </div>
    <div
      v-if="filteredMovies.length === 0"
      class="col-span-full mt-4 text-center text-xl text-gray-700 dark:text-gray-300"
    >
      No movies found
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Movie, MovieFilter } from '@/movies/types'
import { useGetMoviesApi } from '@/movies/composables/useGetMoviesApi'
import MovieCard from '@/movies/components/MovieCard.vue'

type Props = {
  filters: MovieFilter
}

const props = defineProps<Props>()
const data = await useGetMoviesApi()
const movies = ref<Movie[]>(data)

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
</script>

<style scoped></style>
