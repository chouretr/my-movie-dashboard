<script setup lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import { useGenreStore } from "@/stores/GenreStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import type { Genre } from "@/models/movie.model";
import BaseTab from "../components/BaseTab.vue";
import BaseCard from "../components/BaseCard.vue";

const movieStore = useMovieStore();
const genreStore = useGenreStore();
const selectedGenreId = ref(53);

onMounted(async () => {
  await movieStore.fetchLatestMovies();
  await genreStore.fetchAllGenre();
});

const { genres } = storeToRefs(genreStore);
const handleGenreSelect = (genre: Genre) => (selectedGenreId.value = genre.id);
</script>

<template>
  <main>
    <div class="container">
      <BaseTab :genres="genres" @on-genre-select="handleGenreSelect" />
      <BaseCard
        v-for="movie in movieStore.getMoviesByGenreId(selectedGenreId)"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </main>
</template>
