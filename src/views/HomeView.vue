<script setup lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import { onMounted } from "vue";
import BaseCard from "../components/BaseCard.vue";

const movieStore = useMovieStore();

onMounted(async () => {
  await movieStore.fetchTrendingMovies();
});
</script>

<template>
  <main>
    <h2>Trending movies</h2>
    <div class="flex">
      <BaseCard
        v-for="movie in movieStore.movies.slice(0, 4)"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </main>
</template>
