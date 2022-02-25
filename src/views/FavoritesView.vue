<script setup lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import BaseCard from "../components/BaseCard.vue";

const movieStore = useMovieStore();
</script>

<template>
  <main>
    <div class="container" v-if="movieStore.getFavoritesMovies().length">
      <BaseCard
        v-for="movie in movieStore.getFavoritesMovies()"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div class="container" v-if="!movieStore.getFavoritesMovies().length">
      <div class="relative p-8 text-center border border-gray-200 rounded-lg">
        <h2 class="text-2xl font-medium">Aucun favori</h2>
        <p class="mt-4 text-sm text-gray-500">
          Les films favoris apparaissent ici, ajoutez-en un
        </p>
        <router-link
          :to="'/movies'"
          class="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          >Liste des films</router-link
        >
      </div>
    </div>
  </main>
</template>
