import type { Movie } from "@/models/movie.model";
import { defineStore } from "pinia";

const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
const TMDB_TRENDING_MOVIES_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

export const useMovieStore = defineStore({
  id: "MovieStore",
  state: () => ({
    movies: [] as Movie[],
    trendingMovies: [] as Movie[],
  }),
  getters: {
    getAllMovies: (state): Movie[] => state.movies,
    getMoviesByGenreId: (state) => {
      return (_genreId: number) => {
        return state.movies.filter((x) =>
          x.genre_ids.some((g) => g == _genreId)
        );
      };
    },
    getFavoritesMovies: (state) => {
      return () => state.movies.filter((m) => m.favorite);
    }
  },
  actions: {
    async fetchLatestMovies() {
      try {
        const response = await fetch(TMDB_API_URL);
        const result = await response.json();
        this.movies = result.results;
      } catch (err) {
        console.error("Error loading movies:", err);
        return err;
      }
    },
    async fetchTrendingMovies() {
      try {
        const response = await fetch(TMDB_TRENDING_MOVIES_API_URL);
        const result = await response.json();
        this.movies = result.results;
      } catch (err) {
        console.error("Error loading trending movies:", err);
        return err;
      }
    },
    setFavoriteMovie(movie_id: number) {
      const selectedMovie = this.movies.find((m) => m.id === movie_id);
      if (selectedMovie) selectedMovie.favorite = !selectedMovie.favorite;
    },
  },
});
