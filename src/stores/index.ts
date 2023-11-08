import type { Movie } from '@/movies/types/movie';
import { defineStore } from 'pinia';

interface State {
  movies: Movie[];
  filter: {
    genre: string[];
    name: string;
    description: string;
  };
}

export const useStore = defineStore({
  id: 'main',
  state: (): State => ({
    movies: [],
    filter: {
      genre: [],
      name: '',
      description: '',
    },
  }),
  getters: {
    filteredMovies(state: State): Movie[] {
      return state.movies.filter((movie) => {
        return (
          (state.filter.genre.length === 0 || state.filter.genre.includes(movie.genre)) &&
          (!state.filter.name || movie.title.includes(state.filter.name)) &&
          (!state.filter.description || movie.description.includes(state.filter.description))
        );
      });
    },
  },
  actions: {
    setMovies(movies: Movie[]) {
      this.movies = movies;
    },
    setFilter(filter: { genre: string[]; name: string; description: string }) {
      this.filter = filter;
    },
  },
});