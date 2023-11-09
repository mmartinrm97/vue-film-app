<template>
  <div>
    <h3 class="col-span-full pb-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
      Movie List
    </h3>
    <div v-if="error" class="col-span-full">
      <MovieListError :error="error" />
    </div>
    <div v-if="isLoading" class="col-span-full">
      <MovieListLoading />
    </div>
    <div v-else>
      <template v-if="filteredMovies.length > 0">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="movie in filteredMovies" :key="movie.id">
            <MovieCard :movie="movie" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="col-span-full mt-4 text-center text-xl text-gray-700 dark:text-gray-300">
          No movies found
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Movie, MovieFilter } from '@/movies/types'
import { useGetMoviesApi } from '@/movies/composables/useGetMoviesApi'
import MovieCard from '@/movies/components/MovieCard.vue'
import MovieListLoading from '@/movies/components/MovieListLoading.vue'
import MovieListError from '@/movies/components/MovieListError.vue'
import { useFilteredMovies } from '@/movies/composables'

type Props = {
  filters: MovieFilter
}

const props = defineProps<Props>()
const movies = ref<Movie[]>([])
const error = ref<Error | null>(null)
const isLoading = ref<boolean>(false)

const { filteredMovies } = useFilteredMovies(props.filters, movies)

onMounted(async () => {
  isLoading.value = true
  try {
    const result = await useGetMoviesApi()
    movies.value = result
  } catch (error: any) {
    error.value = error
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped></style>
