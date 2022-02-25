import type { Genre } from "@/models/genre.model";
import { defineStore } from "pinia";

const TMDB_GET_GENRE_API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

export const useGenreStore = defineStore({
  id: "GenreStore",
  state: () => ({
    genres: [] as Genre[]
  }),
  getters: {
    getAllGenres: function (): Genre[] {
      return this.genres;
    },
  },
  actions: {
    async fetchAllGenre() {
      const response = await fetch(TMDB_GET_GENRE_API_URL);
      try {
        const result = await response.json();
        this.genres = result.genres;
      } catch (err) {
        this.genres = [];
        console.error("Error loading genre:", err);
        return err;
      }
    },
  },
});
