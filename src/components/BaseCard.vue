<script setup lang="ts">
import type { Movie } from "@/models/movie.model";
import { useMovieStore } from "@/stores/MovieStore";

interface Props {
  movie: Movie;
}
const movieStore = useMovieStore();
const setFavorite = function (movie: Movie) {
  movieStore.setFavoriteMovie(movie.id);
};

defineProps<Props>();
</script>

<template>
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8"
    >
      <div class="h-48 overflow-visible w-1/2">
        <img
          class="rounded-3xl shadow-lg max-h-48"
          :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
        />
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">
          <h2 class="text-3xl font-bold">{{ movie.title || movie.original_title }}</h2>
          <div class="bg-yellow-400 font-bold rounded-xl p-2">{{ movie.vote_average }}</div>
        </div>
        <div>
          <div class="text-sm text-gray-400">Movie</div>
          <div class="text-lg text-gray-800">{{ movie.release_date }}</div>
          <button @click="setFavorite(movie)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              :fill="movie.favorite ? 'yellow' : 'none'"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="{2}"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        </div>
        <p class="text-gray-400 max-h-40 overflow-y-hidden">{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>
