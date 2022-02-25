<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./layout/Header.vue";
import Banner from "./components/Banner.vue";
import { useMovieStore } from "@/stores/MovieStore";
import { onMounted } from "vue";

const movieStore = useMovieStore();
onMounted(async () => {
  await movieStore.fetchTrendingMovies();
});
</script>

<template>
  <Header />
  <Banner
    v-if="movieStore.movies.length"
    :banner-movie="movieStore.movies[0]"
  />
  <RouterView />
</template>
