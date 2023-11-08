<template>
  <div
    class="flex flex-col gap-y-6 overflow-hidden rounded-lg bg-sky-50 p-4 text-gray-800 shadow-lg dark:overflow-hidden dark:bg-sky-950 dark:text-gray-300"
  >
    <div>
      <!-- Filter tile -->
      <h2>
        <span class="text-xl font-semibold text-gray-900 dark:text-gray-100">Filters:</span>
        <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">({{ totalFilters }})</span>
      </h2>
    </div>
    <!-- Display  name filter-->
    <div>
      <label for="name" class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
        >Name:</label
      >
      <input
        :disabled="hasError"
        id="name"
        v-model.trim="nameFilter"
        type="text"
        placeholder="Enter movie name"
        class="focus:shadow-outline dark:focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none disabled:cursor-not-allowed"
      />
    </div>

    <!-- Display description filter -->
    <div>
      <label for="description" class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
        >Description:</label
      >
      <textarea
        :disabled="hasError"
        id="description"
        v-model.trim="descriptionFilter"
        type="texta"
        placeholder="Enter movie description"
        class="focus:shadow-outline dark:focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none disabled:cursor-not-allowed"
      />
    </div>
    <!-- Display genre filter -->
    <div>
      <label for="genre" class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
        >Genre:</label
      >
      <input
        id="genre"
        :disabled="hasError"
        v-model.trim="selectedGenre"
        @change="addGenreFilter"
        class="focus:shadow-outline dark:focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none disabled:cursor-not-allowed"
        list="genre-list"
        placeholder="Enter movie genre"
      />
      <datalist id="genre-list" class="w-full">
        <!-- Define la lista de géneros -->
        <option v-for="genre in genresApiData" :key="genre.id" :value="genre.name">
          {{ genre.name }}
        </option>
      </datalist>
      <span v-if="!isValidGenre" class="text-sm text-red-600"
        >"{{ selectedGenre }}" is not a valid genre</span
      >
    </div>

    <!-- Display selected genres as labels -->
    <div>
      <span
        v-for="genre in genresFilter"
        :key="genre"
        class="mr-1 inline-block rounded-full bg-gray-300 px-2 py-1 text-xs font-semibold text-gray-800"
      >
        {{ genre }}
        <button @click="removeGenreFilter(genre)" class="ml-1 text-xs text-gray-600">×</button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import type { MovieFilter, MovieGenre } from '@/movies/types'
import { useGetGenresApi } from '../composables/useGetGenresApi'

const emit = defineEmits<{
  (event: 'updateFilters', filters: MovieFilter): void
}>()

// Data from API
const genresApiData = ref<MovieGenre[]>([])

// Selected genre
const selectedGenre = ref<string>('')

// Constant to validate genre
//TODO: Validate genre
const isValidGenre = ref(true)

// Filters to send to the MovieList component
const genresFilter = ref<string[]>([])
const nameFilter = ref<string>('')
const descriptionFilter = ref<string>('')

// total Filters
const totalFilters = computed(() => {
  let count = 0

  if (nameFilter.value.trim() !== '') {
    count++
  }
  if (descriptionFilter.value.trim() !== '') {
    count++
  }
  count += genresFilter.value.length

  return count
})

watch([selectedGenre, nameFilter, descriptionFilter], () => {
  const newFilters: MovieFilter = {
    genre: genresFilter.value,
    name: nameFilter.value,
    description: descriptionFilter.value
  }
  emit('updateFilters', newFilters)
})

function addGenreFilter() {
  if (selectedGenre.value !== '' && !genresFilter.value.includes(selectedGenre.value)) {
    genresFilter.value.push(selectedGenre.value)
  }
  selectedGenre.value = ''
}

function removeGenreFilter(genre: string) {
  const index = genresFilter.value.indexOf(genre)
  if (index !== -1) {
    genresFilter.value.splice(index, 1)
  }
}

const hasError = ref<boolean>(true)

async function loadGenres() {
  hasError.value = true
  try {
    const data = await useGetGenresApi()
    genresApiData.value = data
    hasError.value = false
  } catch (error: any) {
    hasError.value = true
  }
}

onMounted(async () => {
  await loadGenres()
})
</script>

<style scoped></style>
